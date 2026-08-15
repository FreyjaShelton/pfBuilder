import * as React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';
import {
	STANDARD_ARRAY,
	POINT_BUY_COSTS,
	CAMPAIGN_POINT_BUDGETS,
	formatModifier,
	rollSixAbilityScores,
	getAvailableOptions,
} from '../../utils/abilityScore';
import races from '../../data/races';
import { getRacialModifiers } from '../../utils/raceModifiers';
import PageHeader from '../../components/PageHeader';

const abilityFields = [
	{ key: 'str', label: 'Strength' },
	{ key: 'dex', label: 'Dexterity' },
	{ key: 'con', label: 'Constitution' },
	{ key: 'int', label: 'Intelligence' },
	{ key: 'wis', label: 'Wisdom' },
	{ key: 'cha', label: 'Charisma' },
];

function AbilityRow({ label, baseScore, racialMod, control, extra }) {
	const total = baseScore === '' ? '' : Number(baseScore) + racialMod;
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 1 }}>
			<Typography sx={{ width: 140 }}>{label}</Typography>
			{control}
			<Typography sx={{ width: 60 }} variant="body2" color="text.secondary">
				{racialMod !== 0 ? `${racialMod >= 0 ? '+' : ''}${racialMod} race` : ''}
			</Typography>
			<Typography sx={{ width: 30 }} variant="body2">{total}</Typography>
			<Typography sx={{ width: 40 }} variant="body2">{formatModifier(total)}</Typography>
			{extra}
		</Box>
	);
}

function AbilitySummary({ abilities, racialMods }) {
	const allSet = abilityFields.every(({ key }) => abilities[key] !== '');
	if (!allSet) return null;

	return (
		<Box
			sx={{
				display: 'flex', flexWrap: 'wrap', gap: 3,
				marginTop: 3, padding: 2.5,
				backgroundColor: 'action.hover', borderRadius: 2,
			}}
		>
			{abilityFields.map(({ key, label }) => {
				const total = Number(abilities[key]) + racialMods[key];
				return (
					<Box key={key} sx={{ textAlign: 'center', minWidth: 72 }}>
						<Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
							{label.slice(0, 3)}
						</Typography>
						<Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>{total}</Typography>
						<Typography variant="body2" color="text.secondary">{formatModifier(total)}</Typography>
					</Box>
				);
			})}
		</Box>
	);
}

export default function Abilities() {
	const { character, updateAbilities } = useCharacter();
	const { abilities } = character;
	const currentScores = {
		str: abilities.str, dex: abilities.dex, con: abilities.con,
		int: abilities.int, wis: abilities.wis, cha: abilities.cha,
	};
	const racialMods = getRacialModifiers(races[character.race.name], character.race.abilityChoice);

	const handleMethodChange = (event) => {
		updateAbilities({
			generationMethod: event.target.value,
			str: '', dex: '', con: '', int: '', wis: '', cha: '',
		});
	};

	const handleAssignChange = (key) => (event) => {
		const value = event.target.value;
		updateAbilities({ [key]: value === '' ? '' : Number(value) });
	};

	const handleRoll = () => {
		updateAbilities({
			rolls: rollSixAbilityScores(),
			str: '', dex: '', con: '', int: '', wis: '', cha: '',
		});
	};

	const handleCampaignChange = (event) => {
		updateAbilities({
			pointBuyCampaign: event.target.value,
			str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
		});
	};

	const handlePointBuyChange = (key) => (event) => {
		updateAbilities({ [key]: Number(event.target.value) });
	};

	const renderAssignmentRows = (pool) => (
		abilityFields.map(({ key, label }) => {
			const options = getAvailableOptions(pool, currentScores, key);
			return (
				<AbilityRow
					key={key}
					label={label}
					baseScore={abilities[key]}
					racialMod={racialMods[key]}
					control={
						<FormControl sx={{ minWidth: 100 }} size="small">
							<Select value={abilities[key]} displayEmpty onChange={handleAssignChange(key)}>
								<MenuItem value=""><em>—</em></MenuItem>
								{options.map((v) => (
									<MenuItem key={v} value={v}>{v}</MenuItem>
								))}
							</Select>
						</FormControl>
					}
				/>
			);
		})
	);

	const pointBuyBudget = CAMPAIGN_POINT_BUDGETS[abilities.pointBuyCampaign];
	const pointBuySpent = abilityFields.reduce((sum, { key }) => {
		const score = abilities[key];
		return sum + (POINT_BUY_COSTS[score] ?? 0);
	}, 0);
	const pointBuyRemaining = pointBuyBudget !== undefined ? pointBuyBudget - pointBuySpent : undefined;

	return (
		<>
			<PageHeader
				eyebrow="Step 4 of 7"
				title="Ability Scores"
				subtitle="Pick a generation method, then assign Strength through Charisma."
			/>
			<CardSelector
				title="Choose a generation method"
				value={abilities.generationMethod}
				onChange={handleMethodChange}
			>
				<MenuItem value={'Standard Array'}>Standard Array</MenuItem>
				<MenuItem value={'Point Buy'}>Point Buy</MenuItem>
				<MenuItem value={'Manual/Rolled'}>Manual/Rolled</MenuItem>

				{abilities.generationMethod === 'Standard Array' && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Typography variant="body2">
								Assign each score to an ability: {STANDARD_ARRAY.join(', ')}
							</Typography>
							{renderAssignmentRows(STANDARD_ARRAY)}
						</Box>
					</span>
				)}

				{abilities.generationMethod === 'Manual/Rolled' && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<Typography variant="body2">
								Roll 4d6, drop the lowest die, and add the rest — six times. Assign each total to an ability afterward.
							</Typography>
							<Button variant="outlined" size="small" sx={{ marginTop: 1 }} onClick={handleRoll}>
								{abilities.rolls.length ? 'Reroll' : 'Roll Scores'}
							</Button>
							{abilities.rolls.length > 0 && (
								<>
									<Typography variant="body2" sx={{ marginTop: 1 }}>
										Rolled: {abilities.rolls.join(', ')}
									</Typography>
									{renderAssignmentRows(abilities.rolls)}
								</>
							)}
						</Box>
					</span>
				)}

				{abilities.generationMethod === 'Point Buy' && (
					<span>
						<Box sx={{ padding: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<FormControl sx={{ minWidth: 220 }} size="small">
								<InputLabel>Campaign Type</InputLabel>
								<Select label="Campaign Type" value={abilities.pointBuyCampaign} onChange={handleCampaignChange}>
									{Object.entries(CAMPAIGN_POINT_BUDGETS).map(([name, points]) => (
										<MenuItem key={name} value={name}>{name} ({points} points)</MenuItem>
									))}
								</Select>
							</FormControl>

							{abilities.pointBuyCampaign && (
								<>
									<Typography
										variant="body2"
										sx={{ marginTop: 1.5, color: pointBuyRemaining < 0 ? 'error.main' : 'text.primary' }}
									>
										Points remaining: {pointBuyRemaining} / {pointBuyBudget}
									</Typography>
									{abilityFields.map(({ key, label }) => {
										const spentWithoutKey = pointBuySpent - (POINT_BUY_COSTS[abilities[key]] ?? 0);
										const currentCost = POINT_BUY_COSTS[abilities[key]] ?? 0;
										return (
											<AbilityRow
												key={key}
												label={label}
												baseScore={abilities[key]}
												racialMod={racialMods[key]}
												extra={
													<Typography sx={{ width: 70 }} variant="caption" color="text.secondary">
														{currentCost >= 0 ? '+' : ''}{currentCost} pts
													</Typography>
												}
												control={
													<FormControl sx={{ minWidth: 150 }} size="small">
														<Select value={abilities[key]} onChange={handlePointBuyChange(key)}>
															{Object.keys(POINT_BUY_COSTS).map((scoreStr) => {
																const score = Number(scoreStr);
																const cost = POINT_BUY_COSTS[score];
																const affordable = score === abilities[key] || spentWithoutKey + cost <= pointBuyBudget;
																return (
																	<MenuItem key={score} value={score} disabled={!affordable}>
																		{score} ({cost >= 0 ? '+' : ''}{cost} pts)
																	</MenuItem>
																);
															})}
														</Select>
													</FormControl>
												}
											/>
										);
									})}
								</>
							)}
						</Box>
					</span>
				)}

				{abilities.generationMethod && (
					<span>
						<AbilitySummary abilities={abilities} racialMods={racialMods} />
					</span>
				)}
			</CardSelector>
		</>
	);
}
