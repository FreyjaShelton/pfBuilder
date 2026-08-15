import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';

export default function Equipment() {
	return (
		<>
			<PageHeader
				eyebrow="Step 6 of 7"
				title="Equipment"
				subtitle="Gear, weapons, and armor."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3, textAlign: 'center' }}>
					<Typography variant="body1" sx={{ color: 'text.secondary' }}>
						Equipment selection is on the way — check back soon.
					</Typography>
				</CardContent>
			</Card>
		</>
	);
}
