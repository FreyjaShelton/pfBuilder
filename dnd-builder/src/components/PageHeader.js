import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function PageHeader({ eyebrow, title, subtitle }) {
	return (
		<Box sx={{ marginBottom: 3 }}>
			{eyebrow && (
				<Typography
					variant="overline"
					sx={{ color: 'primary.main', letterSpacing: 1.5, fontWeight: 600 }}
				>
					{eyebrow}
				</Typography>
			)}
			<Typography variant="h4" sx={{ fontWeight: 700, marginTop: 0.5 }}>
				{title}
			</Typography>
			{subtitle && (
				<Typography variant="body1" sx={{ color: 'text.secondary', marginTop: 0.5 }}>
					{subtitle}
				</Typography>
			)}
		</Box>
	);
}
