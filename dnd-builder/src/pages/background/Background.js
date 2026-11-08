import * as React from 'react';
import {
	Box, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography,
} from '@mui/material';
import CardSelector from '../../components/CardSelector';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';
import { getEditionData } from '../../data';
import { skillNames } from '../../data/skills';
import { ABILITY_NAMES } from '../../utils/abilityScore';
import { is2024 } from '../../utils/characterCalc';

function AbilitySelect({ label, value, onChange, options, exclude = [] }) {
	return (
		<FormControl sx={{ flex: '1 1 160px' }} size="small">
			<InputLabel>{label}</InputLabel>
			<Select label={label} value={value} onChange={(e) => onChange(e.target.value)}>
				{options.filter((k) => !exclude.includes(k)).map((k) => (
					<MenuItem key={k} value={k}>{ABILITY_NAMES[k]}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default function Background() {
	const { character, updateBackground } = useCharacter();
	const { background } = character;
	const data = getEditionData(character.edition);
	const bg = data.backgrounds[background.name];
	const edition2024 = is2024(character);
	const originFeats = data.feats.filter((f) => f.category === 'Origin Feat');
	const isCustom = bg?.name === 'Custom';
	const field = (name, label, minRows = 2) => (
		<TextField
			label={label}
			value={background[name]}
			onChange={(e) => updateBackground({ [name]: e.target.value })}
			multiline
			minRows={minRows}
			fullWidth
			sx={{ marginTop: 2 }}
		/>
	);

	const changeBackground = (e) => updateBackground({
		name: e.target.value, abilityPlus2: '', abilityPlus1: '', abilityPlus1b: '', originFeat: '', customSkills: [],
	});

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Background')}
				title="Background"
				subtitle={edition2024
					? 'Where you came from: ability score bonuses, an Origin feat, two skills and a tool.'
					: 'Where you came from: two skill proficiencies, a feature, and roleplaying hooks.'}
			/>
			<CardSelector title="Choose a background" value={background.name} onChange={changeBackground}>
				{Object.keys(data.backgrounds).map((name) => (
					<MenuItem key={name} value={name}>{name}</MenuItem>
				))}
				{bg && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							{bg.description && <Typography variant="body2">{bg.description}</Typography>}
							{!isCustom && (
								<>
									{edition2024 && (
										<>
											<Typography variant="body2" sx={{ marginTop: 1 }}>
												<strong>Ability scores:</strong> {bg.abilityScores.map((k) => ABILITY_NAMES[k]).join(', ')}
											</Typography>
											<Typography variant="body2"><strong>Origin feat:</strong> {bg.feat}</Typography>
										</>
									)}
									<Typography variant="body2" sx={{ marginTop: edition2024 ? 0 : 1 }}>
										<strong>Skill proficiencies:</strong> {bg.skills.join(', ')}
									</Typography>
									{bg.toolProficiencies && (
										<Typography variant="body2"><strong>Tool proficiency:</strong> {bg.toolProficiencies}</Typography>
									)}
									{!edition2024 && bg.languages && <Typography variant="body2"><strong>Languages:</strong> {bg.languages}</Typography>}
									<Typography variant="body2"><strong>Equipment:</strong> {bg.equipment}</Typography>
									{bg.feature?.name && (
										<Typography variant="body2" sx={{ marginTop: 1 }}><strong>{bg.feature.name}.</strong> {bg.feature.description}</Typography>
									)}
								</>
							)}
						</Box>

						{edition2024 && (
							<Box sx={{ marginTop: 2 }}>
								<Typography variant="subtitle2" sx={{ marginBottom: 1 }}>Ability score bonuses</Typography>
								<RadioGroup
									row
									value={background.abilityMode}
									onChange={(e) => updateBackground({ abilityMode: e.target.value, abilityPlus2: '', abilityPlus1: '', abilityPlus1b: '' })}
								>
									<FormControlLabel value="twoOne" control={<Radio />} label="+2 and +1" />
									<FormControlLabel value="oneOneOne" control={<Radio />} label="+1, +1 and +1" />
								</RadioGroup>
								{background.abilityMode === 'twoOne' && (
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 1 }}>
										<AbilitySelect
											label="+2 to"
											value={background.abilityPlus2}
											onChange={(v) => updateBackground({ abilityPlus2: v })}
											options={bg.abilityScores}
											exclude={[background.abilityPlus1]}
										/>
										<AbilitySelect
											label="+1 to"
											value={background.abilityPlus1}
											onChange={(v) => updateBackground({ abilityPlus1: v })}
											options={bg.abilityScores}
											exclude={[background.abilityPlus2]}
										/>
									</Box>
								)}
								{background.abilityMode === 'oneOneOne' && (isCustom ? (
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 1 }}>
										{[['abilityPlus2', 'First'], ['abilityPlus1', 'Second'], ['abilityPlus1b', 'Third']].map(([key, name]) => (
											<AbilitySelect
												key={key}
												label={`${name} (+1)`}
												value={background[key]}
												onChange={(v) => updateBackground({ [key]: v })}
												options={bg.abilityScores}
												exclude={['abilityPlus2', 'abilityPlus1', 'abilityPlus1b'].filter((k) => k !== key).map((k) => background[k])}
											/>
										))}
									</Box>
								) : (
									<Typography variant="body2" sx={{ marginTop: 1 }}>
										+1 to {bg.abilityScores.map((k) => ABILITY_NAMES[k]).join(', ')}.
									</Typography>
								))}
							</Box>
						)}

						{isCustom && (
							<>
								<TextField
									label="Background name"
									value={background.customName}
									onChange={(e) => updateBackground({ customName: e.target.value })}
									fullWidth
									sx={{ marginTop: 2 }}
								/>
								{edition2024 && (
									<FormControl fullWidth sx={{ marginTop: 2 }}>
										<InputLabel>Origin feat</InputLabel>
										<Select
											label="Origin feat"
											value={background.originFeat}
											onChange={(e) => updateBackground({ originFeat: e.target.value })}
										>
											{originFeats.map((f) => <MenuItem key={f.name} value={f.name}>{f.name}</MenuItem>)}
										</Select>
									</FormControl>
								)}
								<FormControl fullWidth sx={{ marginTop: 2 }}>
									<InputLabel>Skill proficiencies (choose 2)</InputLabel>
									<Select
										multiple
										label="Skill proficiencies (choose 2)"
										value={background.customSkills}
										onChange={(e) => updateBackground({ customSkills: e.target.value.slice(-2) })}
										renderValue={(vals) => vals.join(', ')}
									>
										{skillNames.map((n) => <MenuItem key={n} value={n}>{n}</MenuItem>)}
									</Select>
								</FormControl>
								<TextField
									label="Tool / language proficiencies"
									value={background.customProficiency}
									onChange={(e) => updateBackground({ customProficiency: e.target.value })}
									fullWidth
									sx={{ marginTop: 2 }}
								/>
							</>
						)}
						{field('personalityTraits', 'Personality Traits')}
						{field('ideals', 'Ideals')}
						{field('bonds', 'Bonds')}
						{field('flaws', 'Flaws')}
					</span>
				)}
			</CardSelector>
		</>
	);
}
