import * as React from 'react';
import {
	Box, Card, CardContent, Checkbox, Chip, IconButton, InputAdornment, Tab, Table, TableBody,
	TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCharacter } from '../../context/CharacterContext';
import feats from '../../data/feats';
import classesData from '../../data/classes';
import PageHeader from '../../components/PageHeader';
import { getStepEyebrow } from '../../data/wizardSteps';
import { getTotalFeatAllotment } from '../../utils/featAllotment';

const categories = ['All', 'General', 'Combat', 'Critical'];

export default function Feats() {
	const { character, updateFeats } = useCharacter();
	const selected = character.feats.selected;
	const [search, setSearch] = React.useState('');
	const [category, setCategory] = React.useState('All');

	const classData = classesData[character.classInfo.className];
	const level = Number(character.classInfo.level) || 1;
	const raceName = character.race.name;
	const allotment = getTotalFeatAllotment({ classData, level, raceName });
	const atLimit = selected.length >= allotment;

	const toggleFeat = (name) => {
		const isSelected = selected.includes(name);
		if (!isSelected && atLimit) return;
		const next = isSelected
			? selected.filter((f) => f !== name)
			: [...selected, name];
		updateFeats({ selected: next });
	};

	const removeFeat = (name) => {
		updateFeats({ selected: selected.filter((f) => f !== name) });
	};

	const selectedFeats = selected
		.map((name) => feats.find((f) => f.name === name))
		.filter(Boolean);

	const filtered = feats.filter((feat) => {
		const matchesCategory = category === 'All' || feat.type === category;
		const matchesSearch = feat.name.toLowerCase().includes(search.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Feats')}
				title="Feats"
				subtitle="Choose from Core Rulebook General, Combat, and Critical feats."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3 }}>
					<Box
						sx={{
							display: 'inline-block', marginBottom: 2, padding: '6px 14px',
							backgroundColor: atLimit && selected.length > 0 ? 'success.dark' : 'action.hover',
							borderRadius: 5,
						}}
					>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{selected.length} of {allotment} feat{allotment === 1 ? '' : 's'} selected
						</Typography>
					</Box>

					{selectedFeats.length > 0 && (
						<TableContainer
							sx={{
								marginBottom: 3, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2,
							}}
						>
							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: 200 }}>Name</TableCell>
										<TableCell sx={{ width: 100 }}>Type</TableCell>
										<TableCell>Prerequisites</TableCell>
										<TableCell sx={{ width: 48 }} />
									</TableRow>
								</TableHead>
								<TableBody>
									{selectedFeats.map((feat) => (
										<TableRow key={feat.name}>
											<TableCell sx={{ fontWeight: 600 }}>{feat.name}</TableCell>
											<TableCell>
												<Chip label={feat.type} size="small" variant="outlined" />
											</TableCell>
											<TableCell>{feat.prerequisites || '—'}</TableCell>
											<TableCell>
												<IconButton
													size="small"
													onClick={() => removeFeat(feat.name)}
													aria-label={`Remove ${feat.name}`}
												>
													<DeleteOutlineIcon fontSize="small" />
												</IconButton>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					)}

					<TextField
						placeholder="Search feats..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						fullWidth
						size="small"
						sx={{ marginBottom: 2 }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon fontSize="small" />
								</InputAdornment>
							),
						}}
					/>

					<Tabs
						value={category}
						onChange={(event, val) => setCategory(val)}
						sx={{ marginBottom: 2, minHeight: 36 }}
					>
						{categories.map((cat) => (
							<Tab key={cat} label={cat} value={cat} sx={{ minHeight: 36 }} />
						))}
					</Tabs>

					<Box
						sx={{
							maxHeight: 600, overflowY: 'auto',
							border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2, padding: 1,
						}}
					>
						{filtered.length === 0 && (
							<Typography variant="body2" sx={{ color: 'text.secondary', padding: 2 }}>
								No feats match your search.
							</Typography>
						)}
						{filtered.map((feat) => {
							const isSelected = selected.includes(feat.name);
							const disabled = !isSelected && atLimit;
							return (
								<Box
									key={feat.name}
									sx={{
										display: 'flex', gap: 1.5, padding: 1.5,
										borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
										'&:last-of-type': { borderBottom: 'none' },
										opacity: disabled ? 0.5 : 1,
									}}
								>
									<Checkbox
										checked={isSelected}
										onChange={() => toggleFeat(feat.name)}
										disabled={disabled}
										size="small"
										sx={{ padding: 0, alignSelf: 'flex-start', marginTop: 0.5 }}
									/>
									<Box sx={{ minWidth: 0 }}>
										<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
											<Typography sx={{ fontWeight: 600 }}>{feat.name}</Typography>
											<Chip label={feat.type} size="small" variant="outlined" />
										</Box>
										{feat.prerequisites && (
											<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
												Prerequisites: {feat.prerequisites}
											</Typography>
										)}
										<Typography variant="body2" sx={{ marginTop: 0.5 }}>{feat.benefit}</Typography>
									</Box>
								</Box>
							);
						})}
					</Box>
				</CardContent>
			</Card>
		</>
	);
}
