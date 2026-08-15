import * as React from 'react';
import {
	Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';
import races from '../../data/races';
import { formatAbilityMods } from '../../utils/raceModifiers';
import PageHeader from '../../components/PageHeader';

const abilityFields = [
	{ key: 'str', label: 'Strength' },
	{ key: 'dex', label: 'Dexterity' },
	{ key: 'con', label: 'Constitution' },
	{ key: 'int', label: 'Intelligence' },
	{ key: 'wis', label: 'Wisdom' },
	{ key: 'cha', label: 'Charisma' },
];

function StatItem({ label, value }) {
	return (
		<Box sx={{ minWidth: 120 }}>
			<Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
				{label}
			</Typography>
			<Typography variant="body2" sx={{ fontWeight: 600 }}>{value}</Typography>
		</Box>
	);
}

export default function Race() {
	const { character, updateRace } = useCharacter();
	const selectedRace = character.race.name;
	const data = races[selectedRace];

	const handleRaceChange = (event) => {
		updateRace({ name: event.target.value, abilityChoice: '' });
	};

	const handleAbilityChoiceChange = (event) => {
		updateRace({ abilityChoice: event.target.value });
	};

	return (
		<>
			<PageHeader
				eyebrow="Step 3 of 7"
				title="Choose Your Race"
				subtitle="Race sets your ability modifiers, size, speed, and a handful of racial traits."
			/>
			<CardSelector
				title="Race"
				value={selectedRace}
				onChange={handleRaceChange}
			>
				{Object.keys(races).map((race) => (
					<MenuItem key={race} value={race}>
						{race}
					</MenuItem>
				))}

				{data && (
					<span>
						<Box
							sx={{
								display: 'flex', flexWrap: 'wrap', gap: 3,
								marginTop: 1, padding: 2,
								backgroundColor: 'action.hover', borderRadius: 2,
							}}
						>
							<StatItem label="Size" value={data.size} />
							<StatItem label="Speed" value={data.speed} />
							<StatItem label="Ability Mods" value={formatAbilityMods(data)} />
							<StatItem label="Type" value={data.type} />
						</Box>

						{data.abilityChoice && (
							<FormControl sx={{ minWidth: 220, marginTop: 2 }} size="small">
								<InputLabel>Choose ability for the +{data.abilityChoice} bonus</InputLabel>
								<Select
									label={`Choose ability for the +${data.abilityChoice} bonus`}
									value={character.race.abilityChoice}
									onChange={handleAbilityChoiceChange}
								>
									{abilityFields.map(({ key, label }) => (
										<MenuItem key={key} value={key}>{label}</MenuItem>
									))}
								</Select>
							</FormControl>
						)}

						<Typography variant="body2" sx={{ marginTop: 3 }}>{data.description}</Typography>

						<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Languages</Typography>
						<Typography variant="body2" sx={{ marginTop: 1 }}>
							Automatic: {data.languages.automatic.join(', ')}
						</Typography>
						<Typography variant="body2">
							Bonus: {data.languages.bonus.join(', ')}
						</Typography>

						<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Racial Traits</Typography>
						<TableContainer sx={{ maxHeight: 320, marginTop: 1, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
							<Table size="small" stickyHeader>
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: 160 }}>Trait</TableCell>
										<TableCell>Description</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.traits.map((trait) => (
										<TableRow key={trait.name}>
											<TableCell>{trait.name}</TableCell>
											<TableCell>{trait.description}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</span>
				)}
			</CardSelector>
		</>
	);
}
