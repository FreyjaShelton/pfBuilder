import * as React from 'react';
import {
	Box, Card, CardContent, Checkbox, Chip, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';
import skills from '../../data/skills';
import { ABILITY_NAMES, formatSigned } from '../../utils/abilityScore';
import {
	getBackgroundSkills, getClass, getRacialSkills, getSkillBonuses,
} from '../../utils/characterCalc';

export default function Skills() {
	const { character, updateSkills } = useCharacter();
	const cls = getClass(character);
	const chosen = character.skills.classChoices;
	const fromBackground = getBackgroundSkills(character);
	const fromRace = getRacialSkills(character);
	const locked = [...fromBackground, ...fromRace];
	const options = cls
		? (cls.skillChoices.from === 'any' ? skills.map((s) => s.name) : cls.skillChoices.from)
		: [];
	const limit = cls ? cls.skillChoices.count : 0;

	const toggle = (name) => {
		if (chosen.includes(name)) updateSkills({ classChoices: chosen.filter((n) => n !== name) });
		else if (chosen.length < limit) updateSkills({ classChoices: [...chosen, name] });
	};

	const bonuses = getSkillBonuses(character);

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Skills')}
				title="Skills"
				subtitle="Choose your class skill proficiencies. Background and racial skills are added automatically."
			/>
			<Card sx={{ backgroundColor: 'background.paper', marginBottom: 3 }}>
				<CardContent sx={{ padding: 3 }}>
					{!cls ? (
						<Typography color="text.secondary">Pick a class first to choose its skills.</Typography>
					) : (
						<>
							<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
								{cls.name}: choose {limit} ({chosen.length}/{limit})
							</Typography>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 1 }}>
								{options.map((name) => {
									const alreadyHave = locked.includes(name);
									return (
										<FormControlLabel
											key={name}
											sx={{ width: { xs: '100%', sm: '50%' }, margin: 0 }}
											control={
												<Checkbox
													checked={chosen.includes(name) || alreadyHave}
													disabled={alreadyHave || (!chosen.includes(name) && chosen.length >= limit)}
													onChange={() => toggle(name)}
												/>
											}
											label={alreadyHave ? `${name} (already proficient)` : name}
										/>
									);
								})}
							</Box>
						</>
					)}
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
						{fromBackground.map((n) => <Chip key={`bg-${n}`} size="small" label={`${n} (background)`} />)}
						{fromRace.map((n) => <Chip key={`race-${n}`} size="small" label={`${n} (race)`} />)}
					</Box>
				</CardContent>
			</Card>
			<TableContainer sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Skill</TableCell>
							<TableCell>Ability</TableCell>
							<TableCell align="center">Proficient</TableCell>
							<TableCell align="right">Bonus</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bonuses.map((s) => (
							<TableRow key={s.key}>
								<TableCell>{s.name}</TableCell>
								<TableCell>{ABILITY_NAMES[s.ability]}</TableCell>
								<TableCell align="center">{s.proficient ? '●' : ''}</TableCell>
								<TableCell align="right">{formatSigned(s.bonus)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
