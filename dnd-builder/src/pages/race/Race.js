import * as React from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CardSelector from '../../components/CardSelector';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';
import { getEditionData } from '../../data';
import { ABILITY_KEYS, ABILITY_NAMES, formatSigned } from '../../utils/abilityScore';
import { getRacialSkillPicks, is2024 } from '../../utils/characterCalc';

function formatAsi(asi) {
	const parts = Object.entries(asi.fixed).map(([k, v]) => `${ABILITY_NAMES[k]} ${formatSigned(v)}`);
	if (parts.length === 6 && Object.values(asi.fixed).every((v) => v === 1)) return 'All ability scores +1';
	if (asi.choose) parts.push(`${asi.choose.count} other abilities of your choice ${formatSigned(asi.choose.amount)}`);
	return parts.join(', ');
}

// Groups a lineage/ancestry table into one entry per option; "Level N | spell" rows attach to
// the option above them.
function lineageItems(table) {
	const items = [];
	table.rows.forEach((r) => {
		if (/^Level \d/.test(r[0]) && items.length) items[items.length - 1].parts.push(`${r[0]}: ${r[1] || ''}`);
		else items.push({ name: r[0], parts: r.slice(1).filter(Boolean) });
	});
	return items;
}

function TraitList({ traits }) {
	return traits.map((t) => (
		<Typography key={t.name} variant="body2" sx={{ marginTop: 1, whiteSpace: 'pre-line' }}>
			<strong>{t.name}.</strong> {t.description}
		</Typography>
	));
}

export default function Race() {
	const { character, updateRace } = useCharacter();
	const data = getEditionData(character.edition);
	const label = data.raceLabel;
	const race = data.races[character.race.name];
	const subrace = race?.subraces.find((s) => s.name === character.race.subrace);
	const choose = race?.abilityScoreIncrease.choose;
	const skillPicks = getRacialSkillPicks(character);
	const originFeats = data.feats.filter((f) => f.category === 'Origin Feat');
	const hasAsi = race && Object.keys(race.abilityScoreIncrease.fixed).length > 0;

	const handleRaceChange = (event) => {
		updateRace({ name: event.target.value, subrace: '', abilityChoices: [], skillChoices: [], lineage: '', originFeat: '' });
	};

	const abilityOptions = ABILITY_KEYS.filter((k) => !(k in (race?.abilityScoreIncrease.fixed || {})));

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Race')}
				title={label}
				subtitle={is2024(character)
					? 'Your species sets size, speed, and innate traits.'
					: 'Your race sets ability bonuses, speed, and innate traits.'}
			/>
			<CardSelector title={`Choose a ${label.toLowerCase()}`} value={character.race.name} onChange={handleRaceChange}>
				{Object.keys(data.races).map((name) => (
					<MenuItem key={name} value={name}>{name}</MenuItem>
				))}
				{race && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 1 }}>
								{hasAsi || choose ? <Chip label={`Ability: ${formatAsi(race.abilityScoreIncrease)}`} size="small" /> : null}
								<Chip label={`Size: ${race.size}`} size="small" />
								<Chip label={`Speed: ${race.speed} ft.`} size="small" />
							</Box>
							{race.description && <Typography variant="body2">{race.description}</Typography>}
							<TraitList traits={race.traits} />
							{!is2024(character) && (
								<Typography variant="body2" sx={{ marginTop: 1 }}><strong>Languages.</strong> {race.languages}</Typography>
							)}
						</Box>
					</span>
				)}
				{race && race.subraces.length > 0 && (
					<span>
						<FormControl fullWidth sx={{ marginTop: 2 }}>
							<InputLabel>Subrace</InputLabel>
							<Select
								label="Subrace"
								value={character.race.subrace}
								onChange={(e) => updateRace({ subrace: e.target.value })}
							>
								{race.subraces.map((s) => (
									<MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
								))}
							</Select>
						</FormControl>
						{subrace && (
							<Box sx={{ padding: 2, marginTop: 1, backgroundColor: 'action.hover', borderRadius: 2 }}>
								<Chip label={`Ability: ${formatAsi(subrace.abilityScoreIncrease)}`} size="small" />
								{subrace.description && <Typography variant="body2" sx={{ marginTop: 1 }}>{subrace.description}</Typography>}
								<TraitList traits={subrace.traits} />
							</Box>
						)}
					</span>
				)}
				{race?.lineage && (
					<span>
						<FormControl fullWidth sx={{ marginTop: 2 }}>
							<InputLabel>{race.lineage.label}</InputLabel>
							<Select
								label={race.lineage.label}
								value={character.race.lineage}
								onChange={(e) => updateRace({ lineage: e.target.value })}
							>
								{race.lineage.choices.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
							</Select>
						</FormControl>
						{race.tables.length > 0 && (
							<Box sx={{ marginTop: 1 }}>
								{lineageItems(race.tables[0]).map((item) => (
									<Typography key={item.name} variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
										<strong>{item.name}</strong>{item.parts.length ? `: ${item.parts.join(' · ')}` : ''}
									</Typography>
								))}
							</Box>
						)}
					</span>
				)}
				{choose && (
					<span>
						<Typography variant="body2" sx={{ marginTop: 2, marginBottom: 1 }}>
							Choose {choose.count} abilities to increase by {choose.amount}:
						</Typography>
						<FormControl fullWidth>
							<InputLabel>Ability bonuses</InputLabel>
							<Select
								multiple
								label="Ability bonuses"
								value={character.race.abilityChoices}
								onChange={(e) => updateRace({ abilityChoices: e.target.value.slice(-choose.count) })}
								renderValue={(vals) => vals.map((k) => ABILITY_NAMES[k]).join(', ')}
							>
								{abilityOptions.map((k) => (
									<MenuItem key={k} value={k}>{ABILITY_NAMES[k]}</MenuItem>
								))}
							</Select>
						</FormControl>
					</span>
				)}
				{skillPicks && (
					<span>
						<FormControl fullWidth sx={{ marginTop: 2 }}>
							<InputLabel>{skillPicks.label}</InputLabel>
							<Select
								multiple
								label={skillPicks.label}
								value={character.race.skillChoices}
								onChange={(e) => updateRace({ skillChoices: e.target.value.slice(-skillPicks.count) })}
								renderValue={(vals) => vals.join(', ')}
							>
								{skillPicks.from.map((n) => (
									<MenuItem key={n} value={n}>{n}</MenuItem>
								))}
							</Select>
						</FormControl>
					</span>
				)}
				{is2024(character) && race?.name === 'Human' && (
					<span>
						<FormControl fullWidth sx={{ marginTop: 2 }}>
							<InputLabel>Versatile (choose an Origin feat)</InputLabel>
							<Select
								label="Versatile (choose an Origin feat)"
								value={character.race.originFeat}
								onChange={(e) => updateRace({ originFeat: e.target.value })}
							>
								{originFeats.map((f) => <MenuItem key={f.name} value={f.name}>{f.name}</MenuItem>)}
							</Select>
						</FormControl>
					</span>
				)}
			</CardSelector>
		</>
	);
}
