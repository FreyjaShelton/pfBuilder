import * as React from 'react';
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useCharacter } from '../../context/CharacterContext';

const alignments = [
	'Lawful Good', 'Neutral Good', 'Chaotic Good',
	'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
	'Lawful Evil', 'Neutral Evil', 'Chaotic Evil',
];

export default function Home() {
	const { character, updateInfo } = useCharacter();
	const { info } = character;

	const handleChange = (field) => (event) => {
		updateInfo({ [field]: event.target.value });
	};

	return (
		<Card sx={{ backgroundColor: 'transparent', marginTop: 2, marginLeft: 2, marginRight: 2 }}>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					Basic Info
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
					<TextField label="Character Name" value={info.name} onChange={handleChange('name')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Player" value={info.player} onChange={handleChange('player')} sx={{ flex: '1 1 200px' }} />
					<FormControl sx={{ flex: '1 1 200px' }}>
						<InputLabel>Alignment</InputLabel>
						<Select label="Alignment" value={info.alignment} onChange={handleChange('alignment')}>
							{alignments.map((a) => (
								<MenuItem key={a} value={a}>{a}</MenuItem>
							))}
						</Select>
					</FormControl>
					<TextField label="Deity" value={info.deity} onChange={handleChange('deity')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Homeland" value={info.homeland} onChange={handleChange('homeland')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Gender" value={info.gender} onChange={handleChange('gender')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Age" value={info.age} onChange={handleChange('age')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Height" value={info.height} onChange={handleChange('height')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Weight" value={info.weight} onChange={handleChange('weight')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Hair" value={info.hair} onChange={handleChange('hair')} sx={{ flex: '1 1 200px' }} />
					<TextField label="Eyes" value={info.eyes} onChange={handleChange('eyes')} sx={{ flex: '1 1 200px' }} />
				</Box>
			</CardContent>
		</Card>
	);
}
