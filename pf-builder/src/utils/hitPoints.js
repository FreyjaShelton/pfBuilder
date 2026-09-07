// Average value for one hit die, per the Core Rulebook's optional "Average Hit Points" table
// (half the die rounded down, plus one) — e.g. d6 -> 4, d8 -> 5, d10 -> 6, d12 -> 7.
export function getAverageHitDieValue(hitDie) {
	const sides = parseInt(hitDie.replace('d', ''), 10);
	return Math.floor(sides / 2) + 1;
}

// Total hit points: max hit die at 1st level, the average hit die value for every level after
// that, plus a Constitution modifier per level. No favored class bonuses, feats (e.g.
// Toughness), or per-level rolling — this is the same deterministic "average" approach the app
// already uses for starting gold.
export function getTotalHitPoints({ hitDie, level, conMod }) {
	if (!hitDie || !level) return 0;
	const sides = parseInt(hitDie.replace('d', ''), 10);
	const avgPerLevel = getAverageHitDieValue(hitDie);
	const hitDieTotal = sides + (level - 1) * avgPerLevel;
	return hitDieTotal + conMod * level;
}

// Hit points contributed by a secondary (multiclass) class — every level here uses the average
// hit die value, since only the very first level a character ever takes (always in the primary
// class) gets the max-hit-die bonus.
export function getAdditionalClassHitPoints({ hitDie, level, conMod }) {
	if (!hitDie || !level) return 0;
	const avgPerLevel = getAverageHitDieValue(hitDie);
	return avgPerLevel * level + conMod * level;
}
