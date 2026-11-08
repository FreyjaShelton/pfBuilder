import githubLogoWhite from './github-mark-white.png'
import linkedinLogoWhite from './In-White-72.png'
import profilePic from './profilePic.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function FooterComp() {
	return (
		<footer>
			<br />
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				paddingBottom: { xs: '72px', md: 0 },
			}}>
				<Box sx={{ textAlign: "center" }}>
					<a
						href="https://freyjashelton.github.io/"
						style={{ marginRight: '16px' }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={profilePic}
							alt="personal website"
							style={{
								borderRadius: '50%',
								width: '40px',
								height: '40px',
							}} />
					</a>
					<a
						href="https://www.linkedin.com/in/freyja-shelton/"
						style={{ marginRight: '16px' }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={linkedinLogoWhite}
							alt="linkedin"
							width="40"
							height="40" />
					</a>
					<a
						href="https://github.com/FreyjaShelton"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={githubLogoWhite}
							alt="github"
							width="40"
							height="40" />
					</a>
					<Typography
						variant="body2"
						sx={{
							textAlign: 'center',
						}}>© 2026 Freyja Shelton. All Rights Reserved.</Typography>
				</Box>
			</Box>
			<br />
		</footer >
	);
}
