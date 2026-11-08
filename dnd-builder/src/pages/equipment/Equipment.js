import * as React from 'react';
import {
	Box, Card, CardContent, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography,
} from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { useCharacter } from '../../context/CharacterContext';
import { getStepEyebrow } from '../../data/wizardSteps';
import { getEditionData } from '../../data';
import { getArmorClass, getAttacks, getBackground, getClass } from '../../utils/characterCalc';

export default function Equipment() {
	const { character, updateEquipment } = useCharacter();
	const { equipment } = character;
	const { weapons, armor, gear } = getEditionData(character.edition).equipment;
	const cls = getClass(character);
	const bg = getBackground(character);
	const bodyArmor = armor.filter((a) => a.type !== 'Shield');
	const attacks = getAttacks(character);

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Equipment')}
				title="Equipment"
				subtitle="Choose your armor, weapons and gear. Armor Class and attacks are calculated for you."
			/>
			{(cls || bg) && (
				<Card sx={{ backgroundColor: 'background.paper', marginBottom: 3 }}>
					<CardContent sx={{ padding: 3 }}>
						<Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
							Your starting equipment (reference)
						</Typography>
						{cls && cls.startingEquipment.map((line, i) => (
							<Typography key={i} variant="body2" sx={{ marginTop: 0.5 }}>• {line}</Typography>
						))}
						{cls?.startingGold && <Typography variant="body2" sx={{ marginTop: 0.5 }}>Or instead, start with {cls.startingGold} gp.</Typography>}
						{bg?.equipment && <Typography variant="body2" sx={{ marginTop: 1 }}>Background: {bg.equipment}</Typography>}
					</CardContent>
				</Card>
			)}
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3 }}>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
						<FormControl sx={{ flex: '1 1 240px' }}>
							<InputLabel>Armor</InputLabel>
							<Select
								label="Armor"
								value={equipment.armor}
								onChange={(e) => updateEquipment({ armor: e.target.value })}
							>
								<MenuItem value=""><em>None</em></MenuItem>
								{bodyArmor.map((a) => (
									<MenuItem key={a.name} value={a.name}>{a.name} (AC {a.ac}, {a.type})</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControlLabel
							control={<Checkbox checked={equipment.shield} onChange={(e) => updateEquipment({ shield: e.target.checked })} />}
							label="Shield (+2 AC)"
						/>
						<Typography variant="h6" sx={{ marginLeft: 'auto' }}>AC {getArmorClass(character)}</Typography>
					</Box>

					<FormControl fullWidth sx={{ marginTop: 3 }}>
						<InputLabel>Weapons</InputLabel>
						<Select
							multiple
							label="Weapons"
							value={equipment.weapons}
							onChange={(e) => updateEquipment({ weapons: e.target.value })}
							renderValue={(vals) => vals.join(', ')}
						>
							{weapons.map((w) => (
								<MenuItem key={w.name} value={w.name}>{w.name} ({w.damage || '—'} {w.damageType}{w.mastery ? `, ${w.mastery}` : ''})</MenuItem>
							))}
						</Select>
					</FormControl>
					{attacks.length > 0 && (
						<Box sx={{ marginTop: 1 }}>
							{attacks.map((a) => (
								<Typography key={a.name} variant="body2" color="text.secondary">
									{a.name}: {a.attackBonus} to hit, {a.damage}
								</Typography>
							))}
						</Box>
					)}

					<FormControl fullWidth sx={{ marginTop: 3 }}>
						<InputLabel>Adventuring gear</InputLabel>
						<Select
							multiple
							label="Adventuring gear"
							value={equipment.gear}
							onChange={(e) => updateEquipment({ gear: e.target.value })}
							renderValue={(vals) => vals.join(', ')}
						>
							{gear.map((g) => (
								<MenuItem key={g.name} value={g.name}>{g.name} ({g.cost})</MenuItem>
							))}
						</Select>
					</FormControl>

					<TextField
						label="Gold (gp)"
						type="number"
						value={equipment.gold}
						onChange={(e) => updateEquipment({ gold: e.target.value === '' ? '' : Number(e.target.value) })}
						sx={{ marginTop: 3, width: 200 }}
					/>
				</CardContent>
			</Card>
		</>
	);
}
