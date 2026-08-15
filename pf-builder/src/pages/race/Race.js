import * as React from 'react';
import {
	Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';
import races from '../../data/races';
import { formatAbilityMods } from '../../utils/raceModifiers';

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
			<Typography variant="body2">{value}</Typography>
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
		<div>
			<Box sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
				<Typography variant="body2">
					Choose a race
				</Typography>
			</Box>
			<CardSelector
				title={"Race"}
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
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 1 }}>
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

						<Typography variant="body2" sx={{ marginTop: 2 }}>{data.description}</Typography>

						<Typography variant="subtitle2" sx={{ marginTop: 2 }}>Languages</Typography>
						<Typography variant="body2">
							Automatic: {data.languages.automatic.join(', ')}
						</Typography>
						<Typography variant="body2">
							Bonus: {data.languages.bonus.join(', ')}
						</Typography>

						<Typography variant="subtitle2" sx={{ marginTop: 2 }}>Racial Traits</Typography>
						<TableContainer sx={{ maxHeight: 320, marginTop: 1 }}>
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
		</div>
	);
}
