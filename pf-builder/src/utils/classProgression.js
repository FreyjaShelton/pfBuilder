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

// Formats any bonus/modifier number with an explicit sign, e.g. 3 -> "+3", -1 -> "-1".
export function formatSigned(n) {
	return n >= 0 ? `+${n}` : `${n}`;
}

// Formats a base attack bonus as the full iterative-attack string PF1E sheets use,
// e.g. 16 -> "+16/+11/+6/+1" (extra attacks at -5 each once the bonus reaches +6).
export function formatBaseAttackBonus(bab) {
	const attacks = [];
	let value = bab;
	while (value >= 1) {
		attacks.push(value);
		value -= 5;
	}
	if (attacks.length === 0) attacks.push(bab);
	return attacks.map((v) => (v >= 0 ? `+${v}` : `${v}`)).join('/');
}
