export const ABILITY_KEYS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export const ABILITY_NAMES = {
	str: 'Strength', dex: 'Dexterity', con: 'Constitution',
	int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma',
};

export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

// 5e point buy: 27 points, scores 8-15 before racial bonuses.
export const POINT_BUY_BUDGET = 27;
export const POINT_BUY_COSTS = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };

export function getModifier(score) {
	if (score === '' || score === null || score === undefined || isNaN(score)) return 0;
	return Math.floor((Number(score) - 10) / 2);
}

export function formatSigned(n) {
	return n >= 0 ? `+${n}` : `${n}`;
}

export function formatModifier(score) {
	if (score === '' || score === null || score === undefined || isNaN(score)) return '';
	return formatSigned(getModifier(score));
}

// Rolls 4d6, drops the lowest die, and returns the sum of the remaining three.
export function rollAbilityScore() {
	const dice = Array.from({ length: 4 }, () => 1 + Math.floor(Math.random() * 6));
	dice.sort((a, b) => a - b);
	return dice[1] + dice[2] + dice[3];
}

export function rollSixAbilityScores() {
	return Array.from({ length: 6 }, () => rollAbilityScore());
}

// Values from `pool` not already assigned to another ability, plus this ability's own current
// value so its selection stays valid. Duplicate values in the pool are tracked by count.
export function getAvailableOptions(pool, currentScores, key) {
	const remaining = [...pool];
	for (const [k, v] of Object.entries(currentScores)) {
		if (k === key || v === '') continue;
		const idx = remaining.indexOf(v);
		if (idx !== -1) remaining.splice(idx, 1);
	}
	const own = currentScores[key];
	if (own !== '' && !remaining.includes(own)) remaining.push(own);
	return remaining.sort((a, b) => b - a);
}
