// Parses a raw weight string like "4 lbs.", "1 lb.", "1/2 lb.", or "1-1/2 lbs." into a plain
// number of pounds. Returns 0 for non-numeric weights (e.g. "—", multiplier notations like "×2"
// on barding).
export function parseWeightToLbs(weight) {
	if (!weight) return 0;
	const cleaned = weight.replace(/lbs?\.?/i, '').trim();
	if (!cleaned || cleaned === '—') return 0;

	const mixedMatch = cleaned.match(/^(\d+)-(\d+)\/(\d+)$/);
	if (mixedMatch) return Number(mixedMatch[1]) + Number(mixedMatch[2]) / Number(mixedMatch[3]);

	const fractionMatch = cleaned.match(/^(\d+)\/(\d+)$/);
	if (fractionMatch) return Number(fractionMatch[1]) / Number(fractionMatch[2]);

	const wholeMatch = cleaned.match(/^[\d.]+$/);
	if (wholeMatch) return parseFloat(cleaned);

	return 0;
}
