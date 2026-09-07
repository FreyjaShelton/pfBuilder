import * as React from 'react';
import {
	Box, Checkbox, Chip, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select,
	Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField,
	Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CardSelector from '../../components/CardSelector';
import { useCharacter } from '../../context/CharacterContext';
import classes from '../../data/classes';
import multiclassArchetypes from '../../data/multiclassArchetypes';
import spells from '../../data/spells';
import racesData from '../../data/races';
import PageHeader from '../../components/PageHeader';
import { getSaveBonuses, formatBaseAttackBonus, getBaseAttackBonus } from '../../utils/classProgression';
import { getBonusSpellsAtLevel } from '../../utils/bonusSpells';
import { getSpellcastingStartLevel, getSpellsPerDayAtLevel, getSpellsKnownAtLevel } from '../../utils/spellSlots';
import { getModifier } from '../../utils/abilityScore';
import { getRacialModifiers } from '../../utils/raceModifiers';
import { getStepEyebrow } from '../../data/wizardSteps';

const levels = Array.from({ length: 20 }, (_, i) => i + 1);
const abilityModifiers = Array.from({ length: 10 }, (_, i) => i + 1);
const bonusSpellLevels = Array.from({ length: 9 }, (_, i) => i + 1);
const multiclassTypes = [
	{ value: '', label: 'None' },
	{ value: 'Standard', label: 'Standard Multiclassing' },
	{ value: 'Variant', label: 'Variant Multiclassing' },
];
const abilityKeyByName = {
	Strength: 'str', Dexterity: 'dex', Constitution: 'con',
	Intelligence: 'int', Wisdom: 'wis', Charisma: 'cha',
};

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

// Spells Per Day / Spells Known reference table: rows are character level 1-20, columns are
// spell level (0-9, 0-6, or 1-4 depending on the class — derived from the data's own row
// width so Paladin/Ranger's 4-column, no-cantrips tables work the same as everyone else's).
function SpellSlotTable({ title, rows, startLevel }) {
	if (!rows) return null;
	const columnCount = rows[0].length;
	return (
		<>
			<Typography variant="subtitle2" sx={{ marginTop: 3 }}>{title}</Typography>
			<TableContainer sx={{ maxHeight: 400, marginTop: 1, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
				<Table size="small" stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell sx={{ width: 50 }}>Lvl</TableCell>
							{Array.from({ length: columnCount }, (_, i) => (
								<TableCell key={i}>{startLevel + i}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{levels.map((lvl) => (
							<TableRow key={lvl}>
								<TableCell>{lvl}</TableCell>
								{rows[lvl - 1].map((count, i) => (
									<TableCell key={i}>{count || ''}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

// Bonus spells granted by a high ability score — a single shared reference table, the same
// for every spellcasting class.
function BonusSpellsTable() {
	return (
		<>
			<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Bonus Spells (from a high ability score)</Typography>
			<TableContainer sx={{ maxHeight: 400, marginTop: 1, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
				<Table size="small" stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell sx={{ width: 70 }}>Mod</TableCell>
							{bonusSpellLevels.map((lvl) => (
								<TableCell key={lvl}>{lvl}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{abilityModifiers.map((mod) => (
							<TableRow key={mod}>
								<TableCell>+{mod}</TableCell>
								{bonusSpellLevels.map((lvl) => (
									<TableCell key={lvl}>{getBonusSpellsAtLevel(mod, lvl) || ''}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

// How many distinct spells a class may select at a given spell level: its spells-per-day slots
// at the character's current level in this class, plus any bonus spells from a high ability
// score. One documented exception: Bard's spellsPerDay has a literal 0 in the cantrip column
// (cantrips are cast at will, never slot-limited) — fall back to spellsKnown's cantrip count
// there instead, since a 0 cap would otherwise make cantrips unselectable.
function getSpellLevelLimit({ data, characterLevel, level, startLevel, abilityMod }) {
	if (!characterLevel || characterLevel < 1) return 0;
	let slots = getSpellsPerDayAtLevel(data, characterLevel, level, startLevel);
	if (level === 0 && slots === 0) {
		slots = getSpellsKnownAtLevel(data, characterLevel, level, startLevel);
	}
	const bonus = level >= 1 ? getBonusSpellsAtLevel(abilityMod, level) : 0;
	return slots + bonus;
}

// Browsable, selectable Core Rulebook spell list for one class — a summary table of picks
// (grouped by level, then alphabetically) plus search + spell-level tabs + a scrollable list,
// the same structural pattern as the Feats page. Selection is capped per spell level by
// spells-per-day + bonus spells from a high ability score.
function SpellList({ data, characterLevel, startLevel, maxLevel }) {
	const { character, updateSpells } = useCharacter();
	const [search, setSearch] = React.useState('');
	const [spellLevel, setSpellLevel] = React.useState('All');

	const className = data.name;
	const allSelected = character.spells.selected;
	const classSelected = React.useMemo(
		() => allSelected.filter((s) => s.className === className),
		[allSelected, className]
	);

	const raceData = racesData[character.race.name];
	const racialMods = getRacialModifiers(raceData, character.race.abilityChoice);
	const abilityKey = abilityKeyByName[data.spellcasting.keyAbility];
	const baseScore = character.abilities[abilityKey];
	const adjustedScore = baseScore === '' ? '' : Number(baseScore) + (racialMods[abilityKey] || 0);
	const abilityMod = getModifier(adjustedScore);

	const classSpells = React.useMemo(
		() => spells.filter((spell) => spell.levels[className] !== undefined),
		[className]
	);

	const spellLevelOptions = Array.from({ length: maxLevel - startLevel + 1 }, (_, i) => startLevel + i);

	// Static breakdown across every spell level the class has access to — independent of
	// whichever level tab/search is currently filtering the browsable list below.
	const levelBreakdown = spellLevelOptions.map((level) => ({
		level,
		limit: getSpellLevelLimit({ data, characterLevel, level, startLevel, abilityMod }),
		count: classSelected.filter((s) => s.level === level).length,
	})).filter(({ limit }) => limit > 0);

	const totalLimit = levelBreakdown.reduce((sum, { limit }) => sum + limit, 0);

	const toggleSpell = (spell) => {
		const level = spell.levels[className];
		const isSelected = classSelected.some((s) => s.name === spell.name);
		if (!isSelected) {
			const limit = getSpellLevelLimit({ data, characterLevel, level, startLevel, abilityMod });
			const countAtLevel = classSelected.filter((s) => s.level === level).length;
			if (countAtLevel >= limit) return;
		}
		const next = isSelected
			? allSelected.filter((s) => !(s.className === className && s.name === spell.name))
			: [...allSelected, { name: spell.name, className, level }];
		updateSpells({ selected: next });
	};

	const removeSpell = (name) => {
		updateSpells({ selected: allSelected.filter((s) => !(s.className === className && s.name === name)) });
	};

	const sortedSelected = [...classSelected].sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

	const filtered = classSpells.filter((spell) => {
		const matchesLevel = spellLevel === 'All' || spell.levels[className] === spellLevel;
		const matchesSearch = spell.name.toLowerCase().includes(search.toLowerCase());
		return matchesLevel && matchesSearch;
	});

	return (
		<>
			<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Spell List</Typography>

			<Box
				sx={{
					display: 'inline-block', marginTop: 1, marginBottom: 2, padding: '6px 14px',
					backgroundColor: 'action.hover', borderRadius: 5,
				}}
			>
				<Typography variant="body2" sx={{ fontWeight: 600 }}>
					{classSelected.length} of {totalLimit} spell{totalLimit === 1 ? '' : 's'} selected
				</Typography>
			</Box>

			{levelBreakdown.length > 0 && (
				<Box
					sx={{
						marginBottom: 2, padding: 2,
						backgroundColor: 'action.hover', borderRadius: 2,
					}}
				>
					{levelBreakdown.map(({ level, count, limit }) => (
						<Typography key={level} variant="body2" sx={{ display: 'block' }}>
							{level === 0 ? 'Cantrips' : `Level ${level}`}: {count} of {limit}
						</Typography>
					))}
				</Box>
			)}

			{sortedSelected.length > 0 && (
				<TableContainer
					sx={{
						marginBottom: 2, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2,
					}}
				>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell sx={{ width: 60 }}>Lvl</TableCell>
								<TableCell>Name</TableCell>
								<TableCell sx={{ width: 160 }}>School</TableCell>
								<TableCell sx={{ width: 48 }} />
							</TableRow>
						</TableHead>
						<TableBody>
							{sortedSelected.map((s) => {
								const spell = classSpells.find((sp) => sp.name === s.name);
								return (
									<TableRow key={s.name}>
										<TableCell>{s.level === 0 ? 'Cantrip' : s.level}</TableCell>
										<TableCell sx={{ fontWeight: 600 }}>{s.name}</TableCell>
										<TableCell>{spell?.school}</TableCell>
										<TableCell>
											<IconButton
												size="small"
												onClick={() => removeSpell(s.name)}
												aria-label={`Remove ${s.name}`}
											>
												<DeleteOutlineIcon fontSize="small" />
											</IconButton>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			)}

			<TextField
				placeholder="Search spells..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				fullWidth
				size="small"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon fontSize="small" />
						</InputAdornment>
					),
				}}
			/>
			<Tabs
				value={spellLevel}
				onChange={(event, val) => setSpellLevel(val)}
				variant="scrollable"
				scrollButtons="auto"
				sx={{ marginTop: 1, minHeight: 36 }}
			>
				<Tab label="All" value="All" sx={{ minHeight: 36 }} />
				{spellLevelOptions.map((lvl) => (
					<Tab key={lvl} label={lvl === 0 ? 'Cantrips' : lvl} value={lvl} sx={{ minHeight: 36 }} />
				))}
			</Tabs>
			<Box
				sx={{
					maxHeight: 500, overflowY: 'auto', marginTop: 1,
					border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2, padding: 1,
				}}
			>
				{filtered.length === 0 && (
					<Typography variant="body2" sx={{ color: 'text.secondary', padding: 2 }}>
						No spells match your search.
					</Typography>
				)}
				{filtered.map((spell) => {
					const level = spell.levels[className];
					const isSelected = classSelected.some((s) => s.name === spell.name);
					const limit = getSpellLevelLimit({ data, characterLevel, level, startLevel, abilityMod });
					const countAtLevel = classSelected.filter((s) => s.level === level).length;
					const disabled = !isSelected && countAtLevel >= limit;
					return (
						<Box
							key={spell.name}
							sx={{
								display: 'flex', gap: 1.5, padding: 1.5,
								borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
								'&:last-of-type': { borderBottom: 'none' },
								opacity: disabled ? 0.5 : 1,
							}}
						>
							<Checkbox
								checked={isSelected}
								onChange={() => toggleSpell(spell)}
								disabled={disabled}
								size="small"
								sx={{ padding: 0, alignSelf: 'flex-start', marginTop: 0.5 }}
							/>
							<Box sx={{ minWidth: 0 }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
									<Typography sx={{ fontWeight: 600 }}>{spell.name}</Typography>
									<Chip
										label={`Lvl ${level} · ${spell.school}${spell.subschool ? ` (${spell.subschool})` : ''}`}
										size="small"
										variant="outlined"
									/>
								</Box>
								{spell.descriptor && (
									<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
										{spell.descriptor}
									</Typography>
								)}
								<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', marginTop: 0.5 }}>
									Casting Time {spell.castingTime} · Components {spell.components} · Range {spell.range}
									{spell.target ? ` · Target ${spell.target}` : ''} · Duration {spell.duration} · Save {spell.savingThrow} · SR {spell.spellResistance}
								</Typography>
								<Typography variant="body2" sx={{ marginTop: 0.5 }}>{spell.description}</Typography>
							</Box>
						</Box>
					);
				})}
			</Box>
		</>
	);
}

// Full class write-up: stat block, role/description, class skills, spellcasting, level
// progression, and class features. Shared by the primary class and (for Standard
// Multiclassing) the secondary class, so both get the same depth of reference material.
function ClassWriteup({ data, characterLevel }) {
	return (
		<>
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

			{data.spellcasting && data.spellsPerDay && (
				<>
					{(() => {
						const startLevel = getSpellcastingStartLevel(data);
						const maxLevel = startLevel + data.spellsPerDay[0].length - 1;
						return (
							<>
								<SpellSlotTable title="Spells Per Day" rows={data.spellsPerDay} startLevel={startLevel} />
								{data.spellsKnown && (
									<SpellSlotTable title="Spells Known" rows={data.spellsKnown} startLevel={startLevel} />
								)}
								<BonusSpellsTable />
								<SpellList data={data} characterLevel={characterLevel} startLevel={startLevel} maxLevel={maxLevel} />
							</>
						);
					})()}
				</>
			)}
		</>
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

	const primaryLevel = Number(character.classInfo.level) || 1;
	const maxSecondaryLevel = Math.max(0, 20 - primaryLevel);
	const secondaryClassOptions = Object.keys(classes).filter((cls) => cls !== selectedClass);
	const secondaryData = classes[character.classInfo.secondaryClassName];
	const archetypeData = multiclassArchetypes[character.classInfo.secondaryClassName];

	const handleMulticlassTypeChange = (event) => {
		updateClass({ multiclassType: event.target.value, secondaryClassName: '', secondaryLevel: '' });
	};

	const handleSecondaryClassChange = (event) => {
		updateClass({ secondaryClassName: event.target.value, secondaryLevel: '' });
	};

	const handleSecondaryLevelChange = (event) => {
		updateClass({ secondaryLevel: event.target.value });
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
						<TextField
							select
							label="Level"
							value={character.classInfo.level}
							onChange={handleLevelChange}
							sx={{ marginTop: 1, minWidth: 80, maxWidth: 160 }}
						>
							{Array.from({ length: 20 }, (_, i) => i + 1).map((level) => (
								<MenuItem key={level} value={level}>
									{level}
								</MenuItem>
							))}
						</TextField>

						<ClassWriteup data={data} characterLevel={primaryLevel} />

						<Typography variant="subtitle2" sx={{ marginTop: 3 }}>Multiclassing</Typography>
						<Box sx={{ padding: 2, marginTop: 1, backgroundColor: 'action.hover', borderRadius: 2 }}>
							<FormControl sx={{ minWidth: 260 }} size="small">
								<InputLabel>Multiclassing</InputLabel>
								<Select
									label="Multiclassing"
									value={character.classInfo.multiclassType}
									onChange={handleMulticlassTypeChange}
								>
									{multiclassTypes.map(({ value, label }) => (
										<MenuItem key={label} value={value}>{label}</MenuItem>
									))}
								</Select>
							</FormControl>

							{character.classInfo.multiclassType === 'Standard' && (
								<Box sx={{ marginTop: 2 }}>
									<Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1.5 }}>
										Split your total level between two classes. Each class contributes its own
										BAB, saves, HP, skill points, and special abilities at its own level.
									</Typography>
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'flex-start' }}>
										<FormControl sx={{ minWidth: 220 }} size="small">
											<InputLabel>Secondary Class</InputLabel>
											<Select
												label="Secondary Class"
												value={character.classInfo.secondaryClassName}
												onChange={handleSecondaryClassChange}
											>
												{secondaryClassOptions.map((cls) => (
													<MenuItem key={cls} value={cls}>{cls}</MenuItem>
												))}
											</Select>
										</FormControl>

										{character.classInfo.secondaryClassName && (
											<FormControl sx={{ minWidth: 100 }} size="small">
												<InputLabel>Level</InputLabel>
												<Select
													label="Level"
													value={character.classInfo.secondaryLevel}
													onChange={handleSecondaryLevelChange}
												>
													{Array.from({ length: maxSecondaryLevel }, (_, i) => i + 1).map((lvl) => (
														<MenuItem key={lvl} value={lvl}>{lvl}</MenuItem>
													))}
												</Select>
											</FormControl>
										)}
									</Box>

									{character.classInfo.secondaryClassName && character.classInfo.secondaryLevel && (
										<Typography variant="body2" sx={{ marginTop: 1.5, fontWeight: 600 }}>
											Total Character Level: {primaryLevel + Number(character.classInfo.secondaryLevel)}
										</Typography>
									)}

									{secondaryData && (
										<ClassWriteup
											data={secondaryData}
											characterLevel={Number(character.classInfo.secondaryLevel) || 0}
										/>
									)}
								</Box>
							)}

							{character.classInfo.multiclassType === 'Variant' && (
								<Box sx={{ marginTop: 2 }}>
									<Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1.5 }}>
										Stay full-level in {selectedClass || 'your class'} and pick a secondary class
										archetype instead. You keep 100% of your levels, but at each tier level below
										you gain that class's fixed benefit instead of choosing a normal feat.
									</Typography>
									<FormControl sx={{ minWidth: 220 }} size="small">
										<InputLabel>Secondary Class (Archetype)</InputLabel>
										<Select
											label="Secondary Class (Archetype)"
											value={character.classInfo.secondaryClassName}
											onChange={handleSecondaryClassChange}
										>
											{secondaryClassOptions.map((cls) => (
												<MenuItem key={cls} value={cls}>{cls}</MenuItem>
											))}
										</Select>
									</FormControl>

									{secondaryData && archetypeData && (
										<TableContainer sx={{ maxHeight: 320, marginTop: 2, border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
											<Table size="small" stickyHeader>
												<TableHead>
													<TableRow>
														<TableCell sx={{ width: 50 }}>Lvl</TableCell>
														<TableCell sx={{ width: 160 }}>Benefit</TableCell>
														<TableCell>Description</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{archetypeData.map((tier) => (
														<TableRow key={tier.level}>
															<TableCell>{tier.level}</TableCell>
															<TableCell>{tier.name}</TableCell>
															<TableCell>{tier.description}</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									)}
								</Box>
							)}
						</Box>
					</span>
				)}
			</CardSelector>
		</>
	);
}
