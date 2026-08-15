import * as React from 'react';
import { Box, Card, CardContent, Divider, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useCharacter } from '../../context/CharacterContext';
import PageHeader from '../../components/PageHeader';

const alignments = [
	'Lawful Good', 'Neutral Good', 'Chaotic Good',
	'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
	'Lawful Evil', 'Neutral Evil', 'Chaotic Evil',
];

function SectionLabel({ children }) {
	return (
		<Typography
			variant="subtitle2"
			sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 1.5 }}
		>
			{children}
		</Typography>
	);
}

export default function Home() {
	const { character, updateInfo } = useCharacter();
	const { info } = character;

	const handleChange = (field) => (event) => {
		updateInfo({ [field]: event.target.value });
	};

	return (
		<>
			<PageHeader
				eyebrow="Step 1 of 7"
				title="Basic Info"
				subtitle="Start with who your character is — these details appear on the finished sheet."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3 }}>
					<SectionLabel>Identity</SectionLabel>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 3 }}>
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
					</Box>

					<Divider sx={{ marginBottom: 3 }} />

					<SectionLabel>Background</SectionLabel>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 3 }}>
						<TextField label="Deity" value={info.deity} onChange={handleChange('deity')} sx={{ flex: '1 1 200px' }} />
						<TextField label="Homeland" value={info.homeland} onChange={handleChange('homeland')} sx={{ flex: '1 1 200px' }} />
					</Box>

					<Divider sx={{ marginBottom: 3 }} />

					<SectionLabel>Appearance</SectionLabel>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
						<TextField label="Gender" value={info.gender} onChange={handleChange('gender')} sx={{ flex: '1 1 140px' }} />
						<TextField label="Age" value={info.age} onChange={handleChange('age')} sx={{ flex: '1 1 140px' }} />
						<TextField label="Height" value={info.height} onChange={handleChange('height')} sx={{ flex: '1 1 140px' }} />
						<TextField label="Weight" value={info.weight} onChange={handleChange('weight')} sx={{ flex: '1 1 140px' }} />
						<TextField label="Hair" value={info.hair} onChange={handleChange('hair')} sx={{ flex: '1 1 140px' }} />
						<TextField label="Eyes" value={info.eyes} onChange={handleChange('eyes')} sx={{ flex: '1 1 140px' }} />
					</Box>
				</CardContent>
			</Card>
		</>
	);
}
