import * as React from 'react';
import {
	AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button,
	MenuItem, Stepper, Step, StepButton, LinearProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const pages = ["Home", "Class", "Race", "Abilities", "Skills", "Equipment", "Finalize"];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const normalizedPath = location.pathname.toLowerCase() === '/' ? '/home' : location.pathname.toLowerCase();
	const rawIndex = pages.findIndex(page => `/${page.toLowerCase()}` === normalizedPath);
	const currentIndex = rawIndex === -1 ? 0 : rawIndex;

	const goTo = (index) => navigate(`/${pages[index].toLowerCase()}`);

	const handleNext = () => {
		if (currentIndex < pages.length - 1) goTo(currentIndex + 1);
	};

	const handlePrevious = () => {
		if (currentIndex > 0) goTo(currentIndex - 1);
	};

	return (
		<Box sx={{ minHeight: '100vh' }}>
			<AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
				<Container maxWidth="md">
					<Toolbar disableGutters>
						<IconButton
							size="large"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							sx={{ color: 'text.primary', display: { xs: 'inline-flex', md: 'none' }, marginRight: 1 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="a"
							href="/"
							sx={{ color: 'text.primary', textDecoration: 'none', fontWeight: 700, flexGrow: 1 }}
						>
							Pathbuilder 1E
						</Typography>
						<Typography variant="body2" sx={{ color: 'text.secondary', display: { xs: 'none', md: 'block' } }}>
							Step {currentIndex + 1} of {pages.length}
						</Typography>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'left' }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									component='a'
									href={`#/${page.toLowerCase()}`}
									onClick={handleCloseNavMenu}
								>
									{page}
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</Container>
			</AppBar>

			<Box
				sx={{
					display: { xs: 'none', md: 'block' },
					borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
					backgroundColor: 'background.paper',
				}}
			>
				<Container maxWidth="md">
					<Stepper nonLinear activeStep={currentIndex} sx={{ paddingY: 2.5 }}>
						{pages.map((page, index) => (
							<Step key={page} completed={index < currentIndex}>
								<StepButton onClick={() => goTo(index)}>{page}</StepButton>
							</Step>
						))}
					</Stepper>
				</Container>
			</Box>

			<Box
				sx={{
					display: { xs: 'block', md: 'none' },
					paddingX: 2,
					paddingY: 1.5,
					borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
					backgroundColor: 'background.paper',
				}}
			>
				<Typography variant="caption" sx={{ color: 'text.secondary' }}>
					Step {currentIndex + 1} of {pages.length}
				</Typography>
				<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
					{pages[currentIndex]}
				</Typography>
				<LinearProgress
					variant="determinate"
					value={((currentIndex + 1) / pages.length) * 100}
					sx={{ marginTop: 1, height: 6, borderRadius: 1 }}
				/>
			</Box>

			<Container maxWidth="md" sx={{ paddingBottom: { xs: 10, md: 6 }, paddingTop: 3 }}>
				<Outlet />

				<Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', marginTop: 5 }}>
					<Button
						variant="outlined"
						color="primary"
						startIcon={<ArrowBackIcon />}
						onClick={handlePrevious}
						disabled={currentIndex <= 0}
					>
						Previous
					</Button>
					<Button
						variant="contained"
						color="primary"
						endIcon={<ArrowForwardIcon />}
						onClick={handleNext}
						disabled={currentIndex >= pages.length - 1}
					>
						Next
					</Button>
				</Box>
			</Container>

			<Box
				sx={{
					display: { xs: 'flex', md: 'none' },
					position: 'fixed',
					bottom: 0,
					width: '100%',
					borderTop: '1px solid rgba(255, 255, 255, 0.08)',
					backgroundColor: 'background.paper',
				}}
			>
				<Button
					variant="text"
					color="primary"
					startIcon={<ArrowBackIcon />}
					onClick={handlePrevious}
					disabled={currentIndex <= 0}
					sx={{ height: 56, width: '50%', borderRadius: 0 }}
				>
					Previous
				</Button>
				<Button
					variant="text"
					color="primary"
					endIcon={<ArrowForwardIcon />}
					onClick={handleNext}
					disabled={currentIndex >= pages.length - 1}
					sx={{ height: 56, width: '50%', borderRadius: 0, borderLeft: '1px solid rgba(255, 255, 255, 0.08)' }}
				>
					Next
				</Button>
			</Box>
		</Box>
	);
}
