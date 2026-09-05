const GOLD_PER_UNIT = { pp: 10, gp: 1, sp: 0.1, cp: 0.01 };

// Converts a raw cost string like "15 gp", "5 sp", "2 cp", "1 pp" into a gold-piece value.
// Returns 0 for non-numeric costs (e.g. "—", multiplier notations like "×2" on barding).
export function parseCostToGold(cost) {
	if (!cost) return 0;
	const match = cost.match(/^([\d.]+)\s*(pp|gp|sp|cp)$/i);
	if (!match) return 0;
	return parseFloat(match[1]) * GOLD_PER_UNIT[match[2].toLowerCase()];
}

// Formats a gold-piece value back into a readable string, trimming floating point noise.
export function formatGold(value) {
	return `${Math.round(value * 100) / 100} gp`;
}
