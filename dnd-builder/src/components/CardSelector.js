import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function CardSelector({ title, value, onChange, children }) {
	return (
		<Card sx={{ backgroundColor: 'background.paper' }}>
			<CardContent sx={{ padding: 3 }}>
				<Typography gutterBottom variant="h6" component="div">
					{title}
				</Typography>
				<Select value={value} onChange={onChange} fullWidth displayEmpty>
					{children && React.Children.toArray(children).filter(child => child?.type !== 'span')}
				</Select>
				<Box sx={{ marginTop: 2 }}>
					{React.Children.toArray(children).filter(child => child?.type === 'span')}
				</Box>
			</CardContent>
		</Card>
	);
}
