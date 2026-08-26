import * as React from 'react';
import {
	Box, Chip, MenuItem, Table, TableBody, TableCell, TableContainer,
	TableHead, TableRow, TextField, Typography,
} from '@mui/material';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';
import classes from '../../data/classes';
import PageHeader from '../../components/PageHeader';
import { getSaveBonuses, formatBaseAttackBonus, getBaseAttackBonus } from '../../utils/classProgression';
import { getStepEyebrow } from '../../data/wizardSteps';

const levels = Array.from({ length: 20 }, (_, i) => i + 1);

function StatItem({ label, value }) {
	return (
		<Box sx={{ minWidth: 120 }}>
			<Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
				{label}
			</Typography>
			<Typography variant="body2" sx={{ fontWeight: 600 }}>{value}</Typography>
		</Box>
	);
}

export default function Class() {
	const { character, updateClass } = useCharacter();
	const selectedClass = character.classInfo.className;
	const data = classes[selectedClass];

	const handleClassChange = (event) => {
		updateClass({ className: event.target.value });
	};

	const handleLevelChange = (event) => {
		updateClass({ level: event.target.value });
	};

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Class')}
				title="Choose Your Class"
				subtitle="Your class shapes combat style, skills, and how you grow from level 1 to 20."
			/>
			<CardSelector
				title="Class"
				value={selectedClass}
				onChange={handleClassChange}
			>
				{Object.keys(classes).map((cls) => (
					<MenuItem key={cls} value={cls}>
						{cls}
					</MenuItem>
				))}

				{data && (
					<span>
						<Box
							sx={{
								display: 'flex', flexWrap: 'wrap', gap: 3,
								marginTop: 1, padding: 2,
								backgroundColor: 'action.hover', borderRadius: 2,
							}}
						>
							<StatItem label="Hit Die" value={data.hitDie} />
							<StatItem label="BAB" value={data.bab} />
							<StatItem label="Fort / Ref / Will" value={`${data.saves.fort} / ${data.saves.ref} / ${data.saves.will}`} />
							<StatItem label="Skill Ranks/Level" value={data.skillRanksPerLevel} />
							<StatItem label="Key Ability" value={data.keyAbility} />
							<StatItem label="Alignment" value={data.alignment} />
							<StatItem label="Starting Wealth" value={data.startingWealth} />
						</Box>

						<TextField
							select
							label="Level"
							value={character.classInfo.level}
							onChange={handleLevelChange}
							sx={{ marginTop: 2, minWidth: 80, maxWidth: 160 }}
						>
							{Array.from({ length: 20 }, (_, i) => i + 1).map((level) => (
								<MenuItem key={level} value={level}>
									{level}
								</MenuItem>
							))}
						</TextField>

						<Typography variant="body2" sx={{ marginTop: 3 }}>{data.role}</Typography>
						<Typography variant="body2" sx={{ marginTop: 1.5 }}>{data.description}</Typography>

						<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Class Skills</Typography>
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginTop: 1 }}>
							{data.classSkills.map((skill) => (
								<Chip key={skill} label={skill} size="small" />
							))}
						</Box>

						{data.spellcasting && (
							<>
								<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Spellcasting</Typography>
								<Typography variant="body2" sx={{ marginTop: 1 }}>
									{data.spellcasting.type} ({data.spellcasting.style}) — key ability: {data.spellcasting.keyAbility}
								</Typography>
								<Typography variant="body2" sx={{ marginTop: 0.5 }}>{data.spellcasting.description}</Typography>
							</>
						)}

						{data.specialByLevel && (
							<>
								<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Level Progression</Typography>
								<TableContainer sx={{ maxHeight: 400, marginTop: 1, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
									<Table size="small" stickyHeader>
										<TableHead>
											<TableRow>
												<TableCell sx={{ width: 50 }}>Lvl</TableCell>
												<TableCell sx={{ width: 90 }}>BAB</TableCell>
												<TableCell sx={{ width: 70 }}>Fort</TableCell>
												<TableCell sx={{ width: 70 }}>Ref</TableCell>
												<TableCell sx={{ width: 70 }}>Will</TableCell>
												<TableCell>Special</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{levels.map((lvl) => {
												const bab = getBaseAttackBonus(data.bab, lvl);
												const saves = getSaveBonuses(data.saves, lvl);
												return (
													<TableRow key={lvl}>
														<TableCell>{lvl}</TableCell>
														<TableCell>{formatBaseAttackBonus(bab)}</TableCell>
														<TableCell>+{saves.fort}</TableCell>
														<TableCell>+{saves.ref}</TableCell>
														<TableCell>+{saves.will}</TableCell>
														<TableCell>{data.specialByLevel[lvl - 1]}</TableCell>
													</TableRow>
												);
											})}
										</TableBody>
									</Table>
								</TableContainer>
							</>
						)}

						<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Class Features</Typography>
						<TableContainer sx={{ maxHeight: 320, marginTop: 1, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
							<Table size="small" stickyHeader>
								<TableHead>
									<TableRow>
										<TableCell sx={{ width: 50 }}>Lvl</TableCell>
										<TableCell sx={{ width: 160 }}>Feature</TableCell>
										<TableCell>Description</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.features.map((feature, index) => (
										<TableRow key={index}>
											<TableCell>{feature.level}</TableCell>
											<TableCell>{feature.name}</TableCell>
											<TableCell>{feature.description}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</span>
				)}
			</CardSelector>
		</>
	);
}
