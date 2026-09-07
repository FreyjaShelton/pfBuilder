// Determines the spell level a class's spellsPerDay table starts at — 0 for classes with
// cantrips, 1 for Paladin/Ranger (whose table has no 0-level column since they never get
// cantrips, so each row is only 4 entries wide instead of 10).
export function getSpellcastingStartLevel(data) {
	return data.spellsPerDay[0].length === 4 ? 1 : 0;
}

function getSpellTableValueAtLevel(table, characterLevel, spellLevel, startLevel) {
	if (!table || !characterLevel || characterLevel < 1) return 0;
	const rowIndex = Math.min(characterLevel, 20) - 1;
	const columnIndex = spellLevel - startLevel;
	const row = table[rowIndex];
	if (!row || columnIndex < 0 || columnIndex >= row.length) return 0;
	return row[columnIndex] || 0;
}

// Raw spells-per-day slot count for one class at one spell level and character level — no
// bonus spells folded in, that's tracked separately.
export function getSpellsPerDayAtLevel(data, characterLevel, spellLevel, startLevel) {
	return getSpellTableValueAtLevel(data.spellsPerDay, characterLevel, spellLevel, startLevel);
}

// Spells-known count (spontaneous casters only — Sorcerer/Bard; other classes have no
// spellsKnown table and this always returns 0 for them).
export function getSpellsKnownAtLevel(data, characterLevel, spellLevel, startLevel) {
	return getSpellTableValueAtLevel(data.spellsKnown, characterLevel, spellLevel, startLevel);
}
