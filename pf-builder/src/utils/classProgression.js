// Base Attack Bonus at a given character level, per PF1E's three BAB progressions.
export function getBaseAttackBonus(progression, level) {
	switch (progression) {
		case 'Full': return level;
		case '3/4': return Math.floor((level * 3) / 4);
		case '1/2': return Math.floor(level / 2);
		default: return 0;
	}
}

// Saving throw bonus at a given level for a 'Good' or 'Poor' save progression.
export function getSaveBonus(quality, level) {
	return quality === 'Good' ? Math.floor(level / 2) + 2 : Math.floor(level / 3);
}

// Convenience wrapper: given a class's { fort, ref, will } quality object, returns the
// actual numeric bonuses at the given level.
export function getSaveBonuses(saves, level) {
	return {
		fort: getSaveBonus(saves.fort, level),
		ref: getSaveBonus(saves.ref, level),
		will: getSaveBonus(saves.will, level),
	};
}
