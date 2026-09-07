// Every character gets a feat at 1st level and another every odd level thereafter (3rd, 5th, ...).
export function getBaseFeatCount(level) {
	return level > 0 ? Math.floor((level + 1) / 2) : 0;
}

// Counts class-granted bonus feats (Fighter, Monk, Wizard, etc.) up to the given level by
// scanning specialByLevel for "bonus feat" entries. Restricted-list bonus feats that this app
// doesn't offer feat data for (e.g. sorcerer bloodline feats, ranger combat style feats) are
// intentionally not counted here, since the player can't actually spend them on this page.
export function getBonusFeatCount(classData, level) {
	if (!classData || !classData.specialByLevel) return 0;
	return classData.specialByLevel
		.slice(0, level)
		.filter((entry) => /bonus feat/i.test(entry)).length;
}
