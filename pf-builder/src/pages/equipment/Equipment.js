import * as React from 'react';
import {
	Box, Button, Card, CardContent, Checkbox, Chip, IconButton, InputAdornment, Tab, Table,
	TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCharacter } from '../../context/CharacterContext';
import equipment, { equipmentCategories } from '../../data/equipment';
import classesData from '../../data/classes';
import PageHeader from '../../components/PageHeader';
import { getStepEyebrow } from '../../data/wizardSteps';
import { parseStartingWealth, rollStartingWealth } from '../../utils/startingWealth';
import { parseCostToGold, formatGold } from '../../utils/currency';

const categories = ['All', ...equipmentCategories];

function formatItemStats(item) {
	if (item.category === 'Weapons') {
		const parts = [
			item.weaponType,
			item.dmgM && `${item.dmgM} dmg`,
			item.critical && item.critical !== '—' && item.critical,
			item.range && item.range !== '—' && item.range,
		];
		return parts.filter(Boolean).join(' · ');
	}
	if (item.category === 'Armor & Shields') {
		const parts = [
			item.armorBonus && `${item.armorBonus} AC`,
			item.maxDex && `Max Dex ${item.maxDex}`,
			item.checkPenalty && `ACP ${item.checkPenalty}`,
			item.spellFailure && `${item.spellFailure} spell failure`,
		];
		return parts.filter(Boolean).join(' · ');
	}
	return '';
}

function StartingGold({ character, updateEquipment, spent }) {
	const classData = classesData[character.classInfo.className];
	const wealth = parseStartingWealth(classData?.startingWealth);
	const { goldMethod, gold } = character.equipment;
	const remaining = gold !== '' ? gold - spent : null;

	const chooseAverage = () => {
		updateEquipment({ goldMethod: 'Average', gold: wealth.average });
	};

	const roll = () => {
		updateEquipment({ goldMethod: 'Roll', gold: rollStartingWealth(wealth) });
	};

	return (
		<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2, marginBottom: 3 }}>
			<Typography variant="subtitle2">Starting Gold</Typography>
			{!classData || !wealth ? (
				<Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 0.5 }}>
					Choose a class first to determine starting gold.
				</Typography>
			) : (
				<>
					<Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 0.5 }}>
						{classData.name}: {classData.startingWealth}
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, marginTop: 1.5, flexWrap: 'wrap' }}>
						<Button
							variant={goldMethod === 'Average' ? 'contained' : 'outlined'}
							size="small"
							onClick={chooseAverage}
						>
							Use Average ({wealth.average} gp)
						</Button>
						<Button
							variant={goldMethod === 'Roll' ? 'contained' : 'outlined'}
							size="small"
							onClick={roll}
						>
							{goldMethod === 'Roll' ? 'Reroll' : 'Roll'} {wealth.diceCount}d{wealth.diceSides} × {wealth.multiplier}
						</Button>
						{gold !== '' && (
							<>
								<Typography variant="body1" sx={{ fontWeight: 700 }}>
									{gold} gp starting
								</Typography>
								<Typography
									variant="body1"
									sx={{ fontWeight: 700, color: remaining < 0 ? 'error.main' : 'text.primary' }}
								>
									{formatGold(remaining)} remaining
								</Typography>
							</>
						)}
					</Box>
				</>
			)}
		</Box>
	);
}

export default function Equipment() {
	const { character, updateEquipment } = useCharacter();
	const selected = character.equipment.selected;
	const [search, setSearch] = React.useState('');
	const [category, setCategory] = React.useState('All');

	const toggleItem = (item) => {
		const isSelected = selected.some((s) => s.name === item.name);
		const next = isSelected
			? selected.filter((s) => s.name !== item.name)
			: [...selected, { name: item.name, category: item.category, quantity: 1 }];
		updateEquipment({ selected: next });
	};

	const setQuantity = (name, quantity) => {
		const next = selected.map((s) => (s.name === name ? { ...s, quantity: Math.max(1, quantity) } : s));
		updateEquipment({ selected: next });
	};

	const removeItem = (name) => {
		updateEquipment({ selected: selected.filter((s) => s.name !== name) });
	};

	const selectedWithCost = selected.map((s) => {
		const item = equipment.find((e) => e.name === s.name);
		const unitCost = parseCostToGold(item?.cost);
		return { ...s, rawCost: item?.cost, unitCost, lineCost: unitCost * s.quantity };
	});

	const totalSpent = selectedWithCost.reduce((sum, s) => sum + s.lineCost, 0);

	const filtered = equipment.filter((item) => {
		const matchesCategory = category === 'All' || item.category === category;
		const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Equipment')}
				title="Equipment"
				subtitle="Choose from Core Rulebook weapons, armor, and gear."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3 }}>
					<StartingGold character={character} updateEquipment={updateEquipment} spent={totalSpent} />

					<Box
						sx={{
							display: 'inline-block', marginBottom: 2, padding: '6px 14px',
							backgroundColor: 'action.hover', borderRadius: 5,
						}}
					>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{selected.length} item{selected.length === 1 ? '' : 's'} selected
						</Typography>
					</Box>

					{selected.length > 0 && (
						<TableContainer
							sx={{
								marginBottom: 3, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2,
							}}
						>
							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: 220 }}>Name</TableCell>
										<TableCell sx={{ width: 150 }}>Category</TableCell>
										<TableCell sx={{ width: 110 }}>Cost</TableCell>
										<TableCell sx={{ width: 100 }}>Quantity</TableCell>
										<TableCell sx={{ width: 48 }} />
									</TableRow>
								</TableHead>
								<TableBody>
									{selectedWithCost.map((item) => (
										<TableRow key={item.name}>
											<TableCell sx={{ fontWeight: 600 }}>{item.name}</TableCell>
											<TableCell>
												<Chip label={item.category} size="small" variant="outlined" />
											</TableCell>
											<TableCell>
												{formatGold(item.lineCost)}
												{item.quantity > 1 && (
													<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
														{item.rawCost} each
													</Typography>
												)}
											</TableCell>
											<TableCell>
												<TextField
													type="number"
													size="small"
													value={item.quantity}
													onChange={(e) => setQuantity(item.name, Number(e.target.value) || 1)}
													inputProps={{ min: 1, style: { width: 48 } }}
												/>
											</TableCell>
											<TableCell>
												<IconButton
													size="small"
													onClick={() => removeItem(item.name)}
													aria-label={`Remove ${item.name}`}
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
						placeholder="Search equipment..."
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
						variant="scrollable"
						scrollButtons="auto"
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
								No equipment matches your search.
							</Typography>
						)}
						{filtered.map((item) => {
							const isSelected = selected.some((s) => s.name === item.name);
							const stats = formatItemStats(item);
							return (
								<Box
									key={item.name}
									sx={{
										display: 'flex', gap: 1.5, padding: 1.5,
										borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
										'&:last-of-type': { borderBottom: 'none' },
									}}
								>
									<Checkbox
										checked={isSelected}
										onChange={() => toggleItem(item)}
										size="small"
										sx={{ padding: 0, alignSelf: 'flex-start', marginTop: 0.5 }}
									/>
									<Box sx={{ minWidth: 0 }}>
										<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
											<Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
											<Chip label={item.category} size="small" variant="outlined" />
										</Box>
										<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
											{item.cost}{item.weight && item.weight !== '—' ? ` · ${item.weight}` : ''}
											{stats ? ` · ${stats}` : ''}
										</Typography>
										{item.description && (
											<Typography variant="body2" sx={{ marginTop: 0.5 }}>{item.description}</Typography>
										)}
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
