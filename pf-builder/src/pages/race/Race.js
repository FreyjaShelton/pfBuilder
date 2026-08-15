import * as React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';

export const raceInfo = {
	Dwarf: {
		description: 'Stout and hardy folk who favor stonework, grudges, and stubbornness in equal measure.',
		abilityMods: '+2 Constitution, +2 Wisdom, -2 Charisma',
		size: 'Medium',
		speed: '20 ft.',
	},
	Elf: {
		description: 'Graceful, long-lived wanderers with a deep connection to magic and the arcane arts.',
		abilityMods: '+2 Dexterity, +2 Intelligence, -2 Constitution',
		size: 'Medium',
		speed: '30 ft.',
	},
	Gnome: {
		description: 'Curious, whimsical tinkerers and illusionists with an ever-present sense of wonder.',
		abilityMods: '+2 Constitution, +2 Charisma, -2 Strength',
		size: 'Small',
		speed: '20 ft.',
	},
	'Half-Elf': {
		description: 'Caught between two worlds, half-elves combine human ambition with elven grace.',
		abilityMods: 'One ability score of choice +2',
		size: 'Medium',
		speed: '30 ft.',
	},
	Halfling: {
		description: 'Small, nimble, and endlessly optimistic folk who thrive on the fringes of larger societies.',
		abilityMods: '+2 Dexterity, +2 Charisma, -2 Strength',
		size: 'Small',
		speed: '20 ft.',
	},
	'Half-Orc': {
		description: 'Strong and resilient, half-orcs often struggle to find a place between human and orc society.',
		abilityMods: 'One ability score of choice +2',
		size: 'Medium',
		speed: '30 ft.',
	},
	Human: {
		description: 'Versatile and ambitious, humans adapt quickly and excel in nearly any role.',
		abilityMods: 'One ability score of choice +2',
		size: 'Medium',
		speed: '30 ft.',
	},
};

export default function Race() {
	const { character, updateRace } = useCharacter();
	const selectedRace = character.race.name;

	const handleRaceChange = (event) => {
		updateRace({ name: event.target.value });
	};

	const selected = raceInfo[selectedRace];

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
				{Object.keys(raceInfo).map((race) => (
					<MenuItem key={race} value={race}>
						{race}
					</MenuItem>
				))}

				{selected && (
					<span>
						<Typography variant="body2" sx={{ marginTop: 1 }}>
							{selected.description}
						</Typography>
						<Typography variant="body2" sx={{ marginTop: 1 }}>
							Ability Modifiers: {selected.abilityMods}
						</Typography>
						<Typography variant="body2">
							Size: {selected.size}
						</Typography>
						<Typography variant="body2">
							Speed: {selected.speed}
						</Typography>
					</span>
				)}
			</CardSelector>
		</div>
	);
}
