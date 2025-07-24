import * as React from 'react';
import { Box, MenuItem, Typography, FormControl, InputLabel, Card, CardContent } from '@mui/material';
import Select from '@mui/material/Select';

export default function Abilities() {
	const [selection, setSelection] = React.useState('');

	const handleChange = (event) => {
		setSelection(event.target.value);
	};



	return (
		<div>
			<Card>
				<CardContent>
					<Typography variant="body2">
						Ability Scores
					</Typography>
					<br />
					<FormControl fullWidth>
						<InputLabel>Choose a generation method</InputLabel>
						<Select
							label="Choose a generation method"
							onChange={handleChange}
						>
							<MenuItem value={10}>Standard Array</MenuItem>
							<MenuItem value={20}>Point Buy</MenuItem>
							<MenuItem value={30}>Manual/Rolled</MenuItem>
						</Select>
					</FormControl>
					{selection && (
						<span>
							<Typography variant="body2" sx={{ marginTop: 1 }}>
								{selection}
							</Typography>
						</span>
					)}
				</CardContent>
			</Card>

		</div>
	);
}