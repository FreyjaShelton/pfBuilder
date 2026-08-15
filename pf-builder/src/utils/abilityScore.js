export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

export const POINT_BUY_COSTS = {
	7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2,
	13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17,
};

export const CAMPAIGN_POINT_BUDGETS = {
	'Low Fantasy': 10,
	'Standard Fantasy': 15,
	'High Fantasy': 20,
	'Epic Fantasy': 25,
};

export function getModifier(score) {
	if (score === '' || score === null || score === undefined || isNaN(score)) return 0;
	return Math.floor((Number(score) - 10) / 2);
}

export function formatModifier(score) {
	if (score === '' || score === null || score === undefined || isNaN(score)) return '';
	const mod = getModifier(score);
	return mod >= 0 ? `+${mod}` : `${mod}`;
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

// Given a pool of values (e.g. the standard array or a set of rolled scores) and the
// currently-assigned values for every ability, returns which values are still available
// to assign to `key` — i.e. the pool minus whatever's already used by other abilities,
// but always including key's own current value so its selection stays valid.
export function getAvailableOptions(pool, currentValues, key) {
	const counts = {};
	pool.forEach((v) => { counts[v] = (counts[v] || 0) + 1; });

	Object.entries(currentValues).forEach(([k, v]) => {
		if (k !== key && v !== '' && v !== null && v !== undefined) {
			counts[v] = (counts[v] || 0) - 1;
		}
	});

	const available = [];
	Object.entries(counts).forEach(([v, count]) => {
		for (let i = 0; i < count; i++) available.push(Number(v));
	});

	const current = currentValues[key];
	if (current !== '' && current !== null && current !== undefined && !available.includes(Number(current))) {
		available.push(Number(current));
	}

	return available.sort((a, b) => b - a);
}
