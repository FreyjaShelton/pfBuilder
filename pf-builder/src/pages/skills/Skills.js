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
		<div>
			<Card sx={{ backgroundColor: 'transparent', marginTop: 2, marginLeft: 2, marginRight: 2 }}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						Skills
					</Typography>

					{!classData ? (
						<Typography variant="body2">
							Choose a class first — skill points and class skills are based on it.
						</Typography>
					) : (
						<>
							<Typography
								variant="body2"
								sx={{ marginBottom: 2, color: remaining < 0 ? 'error.main' : 'text.primary' }}
							>
								Skill points remaining: {remaining} / {totalBudget}
								{' '}({classData.skillRanksPerLevel} + {intMod} Int mod, min 1/level, × level {level})
							</Typography>

							<TableContainer sx={{ maxHeight: 600 }}>
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
						</>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
