// Table: Carrying Capacity (d20pfsrd) — max light/medium/heavy load in lbs. by Strength
// score, for a Medium biped. Index 0 is unused so the array can be indexed by STR directly.
const CARRYING_CAPACITY_TABLE = [
	null,
	[3, 6, 10], [6, 13, 20], [10, 20, 30], [13, 26, 40], [16, 33, 50],
	[20, 40, 60], [23, 46, 70], [26, 53, 80], [30, 60, 90], [33, 66, 100],
	[38, 76, 115], [43, 86, 130], [50, 100, 150], [58, 116, 175], [66, 133, 200],
	[76, 153, 230], [86, 173, 260], [100, 200, 300], [116, 233, 350], [133, 266, 400],
	[153, 306, 460], [173, 346, 520], [200, 400, 600], [233, 466, 700], [266, 533, 800],
	[306, 613, 920], [346, 693, 1040], [400, 800, 1200], [466, 933, 1400],
];

// Table: Bigger and Smaller Creatures (bipeds) — multiplier applied to the Medium-biped
// figures above.
const SIZE_MULTIPLIERS = {
	Fine: 1 / 8, Diminutive: 1 / 4, Tiny: 1 / 2, Small: 3 / 4, Medium: 1,
	Large: 2, Huge: 4, Gargantuan: 8, Colossal: 16,
};

// Str scores above 29 ("Tremendous Strength"): find the 20-29 row with the same ones digit
// and multiply by 4 for every 10 points above that row's score.
function getBaseRow(str) {
	if (str <= 29) return CARRYING_CAPACITY_TABLE[str];
	const baseStr = 20 + (str % 10);
	const multiplier = Math.pow(4, (str - baseStr) / 10);
	return CARRYING_CAPACITY_TABLE[baseStr].map((v) => v * multiplier);
}

// Returns { light, medium, heavy, liftOverHead, liftOffGround, dragOrPush } in lbs. for a
// Strength score and creature size. Lift over head = max (heavy) load; lift off ground = 2x
// that; drag or push = 5x that.
export function getCarryingCapacity(str, size = 'Medium') {
	if (!str || str < 1) {
		return { light: 0, medium: 0, heavy: 0, liftOverHead: 0, liftOffGround: 0, dragOrPush: 0 };
	}
	const [light, medium, heavy] = getBaseRow(str);
	const sizeMultiplier = SIZE_MULTIPLIERS[size] ?? 1;
	const light_ = Math.floor(light * sizeMultiplier);
	const medium_ = Math.floor(medium * sizeMultiplier);
	const heavy_ = Math.floor(heavy * sizeMultiplier);
	return {
		light: light_,
		medium: medium_,
		heavy: heavy_,
		liftOverHead: heavy_,
		liftOffGround: heavy_ * 2,
		dragOrPush: heavy_ * 5,
	};
}
