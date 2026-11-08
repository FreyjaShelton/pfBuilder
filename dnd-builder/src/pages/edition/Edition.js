import * as React from 'react';
import { Box, Card, CardActionArea, CardContent, Chip, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';

const editionOptions = [
	{
		id: '2024',
		title: 'D&D 2024',
		tag: 'Default',
		summary: 'The revised core rules.',
		points: [
			'Species instead of races; ability score bonuses come from your background',
			'Every background grants an Origin feat',
			'Weapon Mastery properties, updated classes and class tables',
		],
	},
	{
		id: '2014',
		title: 'D&D 2014',
		tag: '',
		summary: 'The original 5th Edition rules.',
		points: [
			'Races and subraces grant ability score bonuses',
			'Backgrounds grant skills, tools and a feature',
			'Original class tables and features',
		],
	},
];

export default function Edition() {
	const { character, setEdition } = useCharacter();

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Edition')}
				title="Edition"
				subtitle="Choose which version of the rules to build with. Race/species, class, background and equipment options follow your choice."
			/>
			<Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
				{editionOptions.map((opt) => {
					const selected = character.edition === opt.id;
					return (
						<Card
							key={opt.id}
							sx={{
								flex: 1,
								backgroundColor: 'background.paper',
								border: 2,
								borderColor: selected ? 'primary.main' : 'divider',
							}}
						>
							<CardActionArea onClick={() => setEdition(opt.id)} sx={{ height: '100%' }}>
								<CardContent sx={{ padding: 3 }}>
									<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
										<Typography variant="h6">{opt.title}</Typography>
										{opt.tag && <Chip size="small" label={opt.tag} color="primary" variant="outlined" />}
										{selected && <Chip size="small" label="Selected" color="primary" />}
									</Box>
									<Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>{opt.summary}</Typography>
									{opt.points.map((p) => (
										<Typography key={p} variant="body2" sx={{ marginTop: 0.5 }}>• {p}</Typography>
									))}
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
			</Box>
			<Typography variant="caption" sx={{ display: 'block', marginTop: 2, color: 'text.secondary' }}>
				Changing the edition later clears your race/species, class, background, skill and equipment choices.
			</Typography>
		</>
	);
}
