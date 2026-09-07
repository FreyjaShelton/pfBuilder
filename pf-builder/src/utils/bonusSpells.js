// PF1E bonus spells from a high ability score: a caster with a high enough ability modifier
// gets extra spell slots at each spell level 1-9. Follows the standard formula behind the
// Core Rulebook's "Ability Modifiers and Bonus Spells" table, so no lookup table is needed.
export function getBonusSpellsAtLevel(abilityMod, spellLevel) {
	if (spellLevel < 1) return 0;
	return Math.max(0, Math.floor((abilityMod - (2 * spellLevel - 1)) / 4) + 1);
}
