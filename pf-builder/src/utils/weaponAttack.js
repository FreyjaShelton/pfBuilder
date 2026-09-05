import { getCombatManeuverSizeModifier } from './combatStats';

const RANGED_WEAPON_TYPES = ['Ranged', 'Ammunition'];

// PF1E's attack-roll size modifier uses the same table as the CMB size modifier (small
// creatures are easier to hit with but also better at landing hits).
function getAttackSizeModifier(size) {
	return getCombatManeuverSizeModifier(size);
}

// Total attack bonus for a single weapon: BAB + (Str or Dex, depending on melee/ranged) + size.
export function getWeaponAttackBonus({ bab, strMod, dexMod, size, weaponType }) {
	const abilityMod = RANGED_WEAPON_TYPES.includes(weaponType) ? dexMod : strMod;
	return bab + abilityMod + getAttackSizeModifier(size);
}

// Combines a dice string (e.g. "1d8") with a flat modifier into display text, e.g. "1d8+3".
export function formatDamage(dice, modifier) {
	if (!dice || dice === '—') return dice || '';
	if (modifier === 0) return dice;
	return `${dice}${modifier >= 0 ? '+' : ''}${modifier}`;
}

// Damage for a single weapon: the size-appropriate damage die (Small characters use the
// Small-damage column, everyone else uses Medium — this app doesn't model Large+ characters)
// plus a Strength bonus for melee weapons (1.5x for two-handed, full for everything else,
// none for ranged weapons since thrown-weapon nuance isn't modeled).
export function getWeaponDamage({ dmgS, dmgM, size, strMod, weaponType }) {
	const dice = size === 'Small' ? dmgS : dmgM;
	let strBonus = 0;
	if (!RANGED_WEAPON_TYPES.includes(weaponType)) {
		strBonus = weaponType === 'Two-Handed Melee' ? Math.floor(strMod * 1.5) : strMod;
	}
	return formatDamage(dice, strBonus);
}

// Bundles the computed attack-roll stats for one weapon item.
export function getWeaponStats(item, { bab, strMod, dexMod, size }) {
	return {
		attackBonus: getWeaponAttackBonus({ bab, strMod, dexMod, size, weaponType: item.weaponType }),
		damage: getWeaponDamage({
			dmgS: item.dmgS, dmgM: item.dmgM, size, strMod, weaponType: item.weaponType,
		}),
		critical: item.critical || '',
		range: item.range || '',
		damageType: item.damageType || '',
	};
}
