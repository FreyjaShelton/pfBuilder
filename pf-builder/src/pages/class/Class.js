import * as React from 'react';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';

export default function Class() {
	const { character, updateClass } = useCharacter();
	const selectedClass = character.classInfo.className;

	const handleClassChange = (event) => {
		updateClass({ className: event.target.value });
	};

	const handleLevelChange = (event) => {
		updateClass({ level: event.target.value });
	};

	const classInfo = {
		Barbarian: 'A fierce warrior of primitive background who can enter a battle rage.',
		Bard: 'An inspiring magician whose power echoes the music of creation.',
		Cleric: 'A priestly champion who wields divine magic in service of a higher power.',
		Druid: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
		Fighter: 'A master of martial combat, skilled with a variety of weapons and armor.',
		Monk: 'A master of martial arts, harnessing the power of their body and mind.',
		Paladin: 'A holy warrior bound to a sacred oath, defending justice and righteousness.',
		Ranger: 'A warrior who uses martial prowess and nature magic to combat threats.',
		Rogue: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
		Sorcerer: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
		Wizard: 'A scholarly magic-user capable of manipulating the structures of reality.',
	};

	return (
		<div>
			<Box sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
				<Typography variant="body2">
					Choose a class
				</Typography>
			</Box>
			<CardSelector
				title={"Class"}
				value={selectedClass}
				onChange={handleClassChange}
			>
				{Object.keys(classInfo).map((cls) => (
					<MenuItem key={cls} value={cls}>
						{cls}
					</MenuItem>
				))}

				{/* Render class details when a selection is made */}
				{selectedClass && (
					<span>
						<Typography variant="body2" sx={{ marginTop: 1 }}>
							{classInfo[selectedClass]}
						</Typography>
					</span>
				)}
			</CardSelector>
			<Box sx={{ marginTop: 2, marginLeft: 2, marginRight: 2, maxWidth: 200 }}>
				<TextField
					label="Level"
					type="number"
					fullWidth
					value={character.classInfo.level}
					onChange={handleLevelChange}
				/>
			</Box>
		</div>
	);
}
