import { getArmorClassSizeModifier } from './combatStats';

function parseSignedInt(value) {
	const n = parseInt(value, 10);
	return Number.isNaN(n) ? 0 : n;
}

// Splits a character's selected "Armor & Shields" equipment into worn armor vs shields —
// both contribute their own AC bonus, but only worn armor caps the Dexterity bonus to AC.
export function getWornArmorAndShields(selectedEquipment, equipmentData) {
	const items = selectedEquipment
		.map((s) => equipmentData.find((e) => e.name === s.name))
		.filter((item) => item && item.category === 'Armor & Shields');

	return {
		armor: items.filter((item) => item.armorType !== 'Shield'),
		shields: items.filter((item) => item.armorType === 'Shield'),
	};
}

// Computes the PF1E AC breakdown (total, touch, flat-footed) from worn armor/shields, the
// character's Dexterity modifier, and size. Natural armor and deflection aren't modeled yet
// (no source for them — no monstrous races or rings of protection), so they're always 0.
export function getArmorClass({ armorItems, shieldItems, dexMod, size }) {
	const armorBonus = armorItems.reduce((sum, item) => sum + parseSignedInt(item.armorBonus), 0);
	const shieldBonus = shieldItems.reduce((sum, item) => sum + parseSignedInt(item.armorBonus), 0);

	const maxDexCap = armorItems.reduce((min, item) => {
		if (!item.maxDex || item.maxDex === '—') return min;
		return Math.min(min, parseSignedInt(item.maxDex));
	}, Infinity);
	const dexForAC = Math.min(dexMod, maxDexCap);

	const sizeMod = getArmorClassSizeModifier(size);
	const naturalArmor = 0;
	const deflection = 0;

	const total = 10 + armorBonus + shieldBonus + dexForAC + sizeMod + naturalArmor + deflection;
	const touch = 10 + dexForAC + sizeMod + deflection;
	const flatFooted = total - Math.max(dexForAC, 0);

	return { total, touch, flatFooted, armorBonus, shieldBonus, dexForAC, sizeMod, naturalArmor, deflection };
}
