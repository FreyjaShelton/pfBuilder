import * as React from 'react';
import {
	Box, Card, CardContent, FormControl, MenuItem, Select, Table, TableBody,
	TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useCharacter } from '../../context/CharacterContext';
import { getModifier } from '../../utils/abilityScore';
import { getRacialModifiers } from '../../utils/raceModifiers';
import classesData from '../../data/classes';
import racesData from '../../data/races';
import skillsList from '../../data/skills';
import PageHeader from '../../components/PageHeader';

const abilityLabels = { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' };

export default function Skills() {
	const { character, updateSkills } = useCharacter();
	const classData = classesData[character.classInfo.className];
	const level = Number(character.classInfo.level) || 1;
	const racialMods = getRacialModifiers(racesData[character.race.name], character.race.abilityChoice);
	const intMod = getModifier(character.abilities.int === '' ? '' : Number(character.abilities.int) + racialMods.int);
	const ranksPerLevel = classData ? Math.max(1, classData.skillRanksPerLevel + intMod) : 0;
	const totalBudget = classData ? ranksPerLevel * level : 0;
	const classSkillNames = classData ? classData.classSkills : [];

	const raceData = racesData[character.race.name];
	const raceSkillBonuses = raceData?.skillBonuses || [];

	const rows = skillsList.map((skill) => {
		const entry = character.skills[skill.key] || { ranks: '', specialization: '' };
		const ranks = Number(entry.ranks) || 0;
		const baseScore = character.abilities[skill.ability];
		const adjustedScore = baseScore === '' ? '' : Number(baseScore) + racialMods[skill.ability];
		const abilityMod = getModifier(adjustedScore);
		const isClassSkill = classSkillNames.includes(skill.name);
		const classBonus = isClassSkill && ranks > 0 ? 3 : 0;
		const racialSkillBonus = raceSkillBonuses.find((b) => b.skill === skill.key);
		const blanketRacialBonus = racialSkillBonus && !racialSkillBonus.condition ? racialSkillBonus.bonus : 0;
		const total = ranks + abilityMod + classBonus + blanketRacialBonus;
		return { ...skill, entry, ranks, abilityMod, isClassSkill, classBonus, racialSkillBonus, total };
	});

	const totalSpent = rows.reduce((sum, row) => sum + row.ranks, 0);
	const remaining = totalBudget - totalSpent;

	const handleRankChange = (key) => (event) => {
		const value = event.target.value;
		updateSkills({ [key]: { ...character.skills[key], ranks: value === '' ? '' : Number(value) } });
	};

	const handleSpecializationChange = (key) => (event) => {
		updateSkills({ [key]: { ...character.skills[key], specialization: event.target.value } });
	};

	return (
		<>
			<PageHeader
				eyebrow="Step 5 of 7"
				title="Skills"
				subtitle="Spend your skill points — class skills get a +3 bonus once you invest a rank."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: { xs: 1.5, sm: 3 } }}>
					{!classData ? (
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							Choose a class first — skill points and class skills are based on it.
						</Typography>
					) : (
						<>
							<Box
								sx={{
									display: 'inline-block', marginBottom: 2.5, padding: '6px 14px',
									backgroundColor: 'action.hover', borderRadius: 5,
								}}
							>
								<Typography
									variant="body2"
									sx={{ color: remaining < 0 ? 'error.main' : 'text.primary', fontWeight: 600 }}
								>
									{remaining} / {totalBudget} points remaining
								</Typography>
							</Box>
							<Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', marginBottom: 2 }}>
								{classData.skillRanksPerLevel} + {intMod} Int mod, minimum 1/level, × level {level}
							</Typography>

							{/* Desktop / tablet: full table */}
							<TableContainer
								sx={{
									display: { xs: 'none', sm: 'block' },
									maxHeight: 600, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2,
								}}
							>
								<Table size="small" stickyHeader>
									<TableHead>
										<TableRow>
											<TableCell>Skill</TableCell>
											<TableCell>Ability</TableCell>
											<TableCell align="center">Class Skill</TableCell>
											<TableCell>Ranks</TableCell>
											<TableCell>Ability Mod</TableCell>
											<TableCell>Class Bonus</TableCell>
											<TableCell>Racial Bonus</TableCell>
											<TableCell>Total</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => {
											const spentWithoutRow = totalSpent - row.ranks;
											const maxRanks = level;
											return (
												<TableRow key={row.key}>
													<TableCell>
														{row.specialization ? (
															<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
																{row.name}
																<TextField
																	variant="standard"
																	placeholder="specify"
																	value={row.entry.specialization}
																	onChange={handleSpecializationChange(row.key)}
																	sx={{ width: 100 }}
																/>
															</Box>
														) : row.name}
													</TableCell>
													<TableCell>{abilityLabels[row.ability]}</TableCell>
													<TableCell align="center">
														{row.isClassSkill && (
															<Tooltip title="Class skill">
																<CheckIcon fontSize="small" color="primary" />
															</Tooltip>
														)}
													</TableCell>
													<TableCell>
														<FormControl size="small" sx={{ minWidth: 70 }}>
															<Select value={row.ranks} onChange={handleRankChange(row.key)}>
																{Array.from({ length: maxRanks + 1 }, (_, v) => v).map((v) => {
																	const affordable = v === row.ranks || spentWithoutRow + v <= totalBudget;
																	return (
																		<MenuItem key={v} value={v} disabled={!affordable}>
																			{v}
																		</MenuItem>
																	);
																})}
															</Select>
														</FormControl>
													</TableCell>
													<TableCell>{row.abilityMod}</TableCell>
													<TableCell>{row.classBonus || ''}</TableCell>
													<TableCell>
														{row.racialSkillBonus && (
															row.racialSkillBonus.condition ? (
																<Tooltip title={`Situational — ${row.racialSkillBonus.condition}. Not included in total.`}>
																	<Typography variant="body2" color="text.secondary" component="span">
																		+{row.racialSkillBonus.bonus}*
																	</Typography>
																</Tooltip>
															) : (
																`+${row.racialSkillBonus.bonus}`
															)
														)}
													</TableCell>
													<TableCell>{row.total}</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</TableContainer>

							{/* Mobile: stacked cards, one per skill */}
							<Box
								sx={{
									display: { xs: 'block', sm: 'none' },
									border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2,
									paddingX: 2,
								}}
							>
								{rows.map((row) => {
									const spentWithoutRow = totalSpent - row.ranks;
									const maxRanks = level;
									return (
										<Box
											key={row.key}
											sx={{
												paddingY: 1.5,
												borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
												'&:last-of-type': { borderBottom: 'none' },
											}}
										>
											<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
												<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 0 }}>
													{row.isClassSkill && <CheckIcon fontSize="small" color="primary" />}
													<Typography sx={{ fontWeight: 600 }} noWrap>{row.name}</Typography>
												</Box>
												<Typography variant="h6" sx={{ fontWeight: 700 }}>
													{row.total >= 0 ? `+${row.total}` : row.total}
												</Typography>
											</Box>

											{row.specialization && (
												<TextField
													variant="standard"
													placeholder="specify"
													value={row.entry.specialization}
													onChange={handleSpecializationChange(row.key)}
													sx={{ marginTop: 0.5, maxWidth: 200 }}
												/>
											)}

											<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', marginTop: 1 }}>
												<Typography variant="caption" sx={{ color: 'text.secondary' }}>
													{abilityLabels[row.ability]} {row.abilityMod >= 0 ? `+${row.abilityMod}` : row.abilityMod}
												</Typography>
												<FormControl size="small" sx={{ minWidth: 68 }}>
													<Select value={row.ranks} onChange={handleRankChange(row.key)}>
														{Array.from({ length: maxRanks + 1 }, (_, v) => v).map((v) => {
															const affordable = v === row.ranks || spentWithoutRow + v <= totalBudget;
															return (
																<MenuItem key={v} value={v} disabled={!affordable}>
																	{v} rank{v === 1 ? '' : 's'}
																</MenuItem>
															);
														})}
													</Select>
												</FormControl>
												{row.classBonus > 0 && (
													<Typography variant="caption" sx={{ color: 'primary.main' }}>
														class +{row.classBonus}
													</Typography>
												)}
												{row.racialSkillBonus && (
													<Typography variant="caption" sx={{ color: 'text.secondary' }}>
														race +{row.racialSkillBonus.bonus}{row.racialSkillBonus.condition ? '*' : ''}
													</Typography>
												)}
											</Box>
										</Box>
									);
								})}
							</Box>
						</>
					)}
				</CardContent>
			</Card>
		</>
	);
}
