import { useRouteError } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<Container maxWidth="sm" sx={{ paddingTop: 10, textAlign: 'center' }}>
			<Box>
				<Typography variant="h3" sx={{ fontWeight: 700 }}>Oops!</Typography>
				<Typography variant="body1" sx={{ color: 'text.secondary', marginTop: 2 }}>
					Sorry, an unexpected error has occurred.
				</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 1, fontStyle: 'italic' }}>
					{error.statusText || error.message}
				</Typography>
			</Box>
		</Container>
	);
}
