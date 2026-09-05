// Parses a class's `startingWealth` string (e.g. "5d6 × 10 gp (average 175 gp)") into its
// dice count/sides, multiplier, and pre-computed average.
export function parseStartingWealth(startingWealth) {
	if (!startingWealth) return null;
	const diceMatch = startingWealth.match(/(\d+)d(\d+)\s*×\s*(\d+)/);
	const averageMatch = startingWealth.match(/average (\d+) gp/);
	if (!diceMatch) return null;
	return {
		diceCount: Number(diceMatch[1]),
		diceSides: Number(diceMatch[2]),
		multiplier: Number(diceMatch[3]),
		average: averageMatch ? Number(averageMatch[1]) : null,
	};
}

// Rolls a class's starting wealth dice (e.g. 5d6 × 10) and returns the gold total.
export function rollStartingWealth(parsed) {
	if (!parsed) return 0;
	let total = 0;
	for (let i = 0; i < parsed.diceCount; i++) {
		total += 1 + Math.floor(Math.random() * parsed.diceSides);
	}
	return total * parsed.multiplier;
}
