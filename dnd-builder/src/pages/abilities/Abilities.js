import * as React from 'react';
import { Box, Button, FormControl, MenuItem, Select, Typography } from '@mui/material';
import CardSelector from '../../components/CardSelector';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';
import {
	ABILITY_KEYS, ABILITY_NAMES, STANDARD_ARRAY, POINT_BUY_COSTS, POINT_BUY_BUDGET,
	formatModifier, rollSixAbilityScores, getAvailableOptions,
} from '../../utils/abilityScore';
import { getAbilityBonuses, is2024 } from '../../utils/characterCalc';

function AbilityRow({ label, baseScore, bonus, control, extra, source }) {
	const total = baseScore === '' ? '' : Number(baseScore) + bonus;
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 1 }}>
			<Typography sx={{ width: 120 }}>{label}</Typography>
			{control}
			<Typography sx={{ width: 70 }} variant="body2" color="text.secondary">
				{bonus !== 0 ? `${bonus >= 0 ? '+' : ''}${bonus} ${source}` : ''}
			</Typography>
			<Typography sx={{ width: 30 }} variant="body2">{total}</Typography>
			<Typography sx={{ width: 40 }} variant="body2">{formatModifier(total)}</Typography>
			{extra}
		</Box>
	);
}

export default function Abilities() {
	const { character, updateAbilities } = useCharacter();
	const { abilities } = character;
	const bonuses = getAbilityBonuses(character);
	const bonusSource = is2024(character) ? 'background' : 'race';
	const currentScores = Object.fromEntries(ABILITY_KEYS.map((k) => [k, abilities[k]]));
	const blank = Object.fromEntries(ABILITY_KEYS.map((k) => [k, '']));

	const handleMethodChange = (event) => {
		const method = event.target.value;
		updateAbilities({
			generationMethod: method,
			...(method === 'Point Buy' ? Object.fromEntries(ABILITY_KEYS.map((k) => [k, 8])) : blank),
		});
	};

	const handleAssign = (key) => (event) => {
		const v = event.target.value;
		updateAbilities({ [key]: v === '' ? '' : Number(v) });
	};

	const renderAssignmentRows = (pool) => ABILITY_KEYS.map((key) => (
		<AbilityRow
			key={key}
			label={ABILITY_NAMES[key]}
			baseScore={abilities[key]}
			bonus={bonuses[key]}
			source={bonusSource}
			control={
				<FormControl sx={{ minWidth: 100 }} size="small">
					<Select value={abilities[key]} displayEmpty onChange={handleAssign(key)}>
						<MenuItem value=""><em>—</em></MenuItem>
						{getAvailableOptions(pool, currentScores, key).map((v) => (
							<MenuItem key={v} value={v}>{v}</MenuItem>
						))}
					</Select>
				</FormControl>
			}
		/>
	));

	const spent = ABILITY_KEYS.reduce((sum, k) => sum + (POINT_BUY_COSTS[abilities[k]] ?? 0), 0);
	const remaining = POINT_BUY_BUDGET - spent;

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Abilities')}
				title="Ability Scores"
				subtitle={is2024(character) ? "Pick a generation method, then assign scores. Background bonuses are applied automatically once you choose them." : "Pick a generation method, then assign scores. Racial bonuses are applied automatically."}
			/>
			<CardSelector title="Choose a generation method" value={abilities.generationMethod} onChange={handleMethodChange}>
				<MenuItem value="Standard Array">Standard Array</MenuItem>
				<MenuItem value="Point Buy">Point Buy</MenuItem>
				<MenuItem value="Rolled">Rolled (4d6, drop lowest)</MenuItem>

				{abilities.generationMethod === 'Standard Array' && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Typography variant="body2">Assign each score to an ability: {STANDARD_ARRAY.join(', ')}</Typography>
							{renderAssignmentRows(STANDARD_ARRAY)}
						</Box>
					</span>
				)}

				{abilities.generationMethod === 'Rolled' && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Typography variant="body2">Roll 4d6, drop the lowest die, six times, then assign each total to an ability.</Typography>
							<Button
								variant="outlined"
								size="small"
								sx={{ marginTop: 1 }}
								onClick={() => updateAbilities({ rolls: rollSixAbilityScores(), ...blank })}
							>
								{abilities.rolls.length ? 'Reroll' : 'Roll Scores'}
							</Button>
							{abilities.rolls.length > 0 && (
								<>
									<Typography variant="body2" sx={{ marginTop: 1 }}>Rolled: {abilities.rolls.join(', ')}</Typography>
									{renderAssignmentRows(abilities.rolls)}
								</>
							)}
						</Box>
					</span>
				)}

				{abilities.generationMethod === 'Point Buy' && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Typography variant="body2" sx={{ color: remaining < 0 ? 'error.main' : 'text.primary' }}>
								Points remaining: {remaining} / {POINT_BUY_BUDGET} (scores 8–15 before racial bonuses)
							</Typography>
							{ABILITY_KEYS.map((key) => {
								const cost = POINT_BUY_COSTS[abilities[key]] ?? 0;
								return (
									<AbilityRow
										key={key}
										label={ABILITY_NAMES[key]}
										baseScore={abilities[key]}
										bonus={bonuses[key]}
			source={bonusSource}
										extra={<Typography sx={{ width: 70 }} variant="caption" color="text.secondary">{cost} pts</Typography>}
										control={
											<FormControl sx={{ minWidth: 150 }} size="small">
												<Select value={abilities[key]} onChange={handleAssign(key)}>
													{Object.keys(POINT_BUY_COSTS).map((s) => {
														const score = Number(s);
														const affordable = score === abilities[key] || spent - cost + POINT_BUY_COSTS[score] <= POINT_BUY_BUDGET;
														return (
															<MenuItem key={score} value={score} disabled={!affordable}>
																{score} ({POINT_BUY_COSTS[score]} pts)
															</MenuItem>
														);
													})}
												</Select>
											</FormControl>
										}
									/>
								);
							})}
						</Box>
					</span>
				)}
			</CardSelector>
		</>
	);
}
