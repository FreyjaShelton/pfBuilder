import * as React from 'react';
import {
	Accordion, AccordionDetails, AccordionSummary, Box, Chip, FormControl, InputLabel, MenuItem, Select,
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardSelector from '../../components/CardSelector';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';
import { getEditionData } from '../../data';
import { is2024 } from '../../utils/characterCalc';

const norm = (s) => s.replace(/\s+/g, ' ');

function Stat({ label, children }) {
	return (
		<Typography variant="body2" sx={{ marginTop: 0.5 }}>
			<strong>{label}:</strong> {children}
		</Typography>
	);
}

function ClassTable({ cls, level }) {
	return (
		<TableContainer sx={{ maxHeight: 360, marginTop: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
			<Table size="small" stickyHeader>
				<TableHead>
					<TableRow>
						{cls.table.columns.map((c, i) => (
							<TableCell key={i} sx={{ backgroundColor: 'background.paper', whiteSpace: 'nowrap' }}>
								{norm(c).replace('Spell Slots per Spell Level ', '')}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{cls.table.rows.map((row, i) => (
						<TableRow key={i} selected={i + 1 === level}>
							{row.map((cell, j) => <TableCell key={j}>{cell}</TableCell>)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default function Class() {
	const { character, updateClass, updateSkills } = useCharacter();
	const { className, level } = character.classInfo;
	const classes = getEditionData(character.edition).classes;
	const cls = classes[className];

	const handleClassChange = (event) => {
		updateClass({ className: event.target.value });
		updateSkills({ classChoices: [] });
	};

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Class')}
				title="Class"
				subtitle="Your class defines your hit points, proficiencies, and what you can do."
			/>
			<CardSelector title="Choose a class" value={className} onChange={handleClassChange}>
				{Object.keys(classes).map((name) => (
					<MenuItem key={name} value={name}>{name}</MenuItem>
				))}
				{cls && (
					<span>
						<FormControl sx={{ minWidth: 140, marginBottom: 2 }} size="small">
							<InputLabel>Level</InputLabel>
							<Select label="Level" value={level} onChange={(e) => updateClass({ level: e.target.value })}>
								{Array.from({ length: 20 }, (_, i) => i + 1).map((l) => (
									<MenuItem key={l} value={l}>{l}</MenuItem>
								))}
							</Select>
						</FormControl>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 1 }}>
								<Chip label={`Hit Die: d${cls.hitDie}`} size="small" />
								<Chip label={`Saves: ${cls.savingThrows.join(', ')}`} size="small" />
								{cls.spellcastingAbility && <Chip label={`Spellcasting: ${cls.spellcastingAbility}`} size="small" />}
							</Box>
							<Stat label="Primary ability">{cls.suggestedAbilities || cls.primaryAbility.join(', ')}</Stat>
							<Stat label="Armor">{cls.armorProficiencies}</Stat>
							<Stat label="Weapons">{cls.weaponProficiencies}</Stat>
							<Stat label="Tools">{cls.toolProficiencies}</Stat>
							<Stat label="Skills">{cls.skillChoices.raw}</Stat>
							{cls.startingGold && <Stat label="Starting gold (alternative)">{cls.startingGold}</Stat>}
							<Typography variant="body2" sx={{ marginTop: 1 }}><strong>Starting equipment</strong></Typography>
							{cls.startingEquipment.map((line, i) => (
								<Typography key={i} variant="body2" sx={{ marginLeft: 1 }}>• {line}</Typography>
							))}
						</Box>
						<ClassTable cls={cls} level={Number(level)} />
						<Box sx={{ marginTop: 2 }}>
							{cls.features.filter((f) => f.description && (is2024(character) ? f.level : f.headingLevel === 2)).map((f) => (
								<Accordion key={f.name} disableGutters>
									<AccordionSummary expandIcon={<ExpandMoreIcon />}>
										<Typography>{is2024(character) ? `Level ${f.level}: ${f.name}` : f.name}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{f.description}</Typography>
									</AccordionDetails>
								</Accordion>
							))}
						</Box>
					</span>
				)}
			</CardSelector>
		</>
	);
}
