import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#a889d6',
		},
		background: {
			default: '#121317',
			paper: '#1a1c22',
		},
		divider: 'rgba(255, 255, 255, 0.08)',
		text: {
			primary: 'rgba(255, 255, 255, 0.92)',
			secondary: 'rgba(255, 255, 255, 0.6)',
		},
	},
	shape: {
		borderRadius: 8,
	},
	typography: {
		fontFamily: [
			'-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif',
		].join(','),
		h5: { fontWeight: 600, letterSpacing: '-0.01em' },
		h6: { fontWeight: 600, letterSpacing: '-0.01em' },
		subtitle2: { fontWeight: 600 },
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#121317',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					border: '1px solid rgba(255, 255, 255, 0.08)',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 600,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderColor: 'rgba(255, 255, 255, 0.08)',
				},
				head: {
					fontWeight: 600,
					color: 'rgba(255, 255, 255, 0.6)',
				},
				stickyHeader: {
					backgroundColor: '#1a1c22',
				},
			},
		},
	},
});

export default theme;
