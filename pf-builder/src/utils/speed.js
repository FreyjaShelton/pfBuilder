// Speed while wearing the character's current body armor. Only heavy armor actually reduces
// speed in PF1E (light/medium don't), which is already baked into each armor item's
// speed30/speed20 columns — this just picks the right column for the character's base speed
// and applies it, unless a racial trait (e.g. Dwarf's "Slow and Steady") ignores the penalty.
export function getArmorAdjustedSpeed({ baseSpeed, armorItems, ignoresArmorSpeedPenalty }) {
	if (ignoresArmorSpeedPenalty || !armorItems || armorItems.length === 0) return baseSpeed;
	const wornArmor = armorItems[0];
	const adjusted = baseSpeed === '20 ft.' ? wornArmor.speed20 : wornArmor.speed30;
	return adjusted || baseSpeed;
}
