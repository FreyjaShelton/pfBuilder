// PF1E's "special size modifier" used for CMB/CMD — opposite sign from the AC size modifier
// (bigger creatures are better at combat maneuvers, not harder to hit).
const CMB_SIZE_MODIFIERS = {
	Fine: -8, Diminutive: -4, Tiny: -2, Small: -1, Medium: 0, Large: 1, Huge: 2, Gargantuan: 4, Colossal: 8,
};

export function getCombatManeuverSizeModifier(size) {
	return CMB_SIZE_MODIFIERS[size] ?? 0;
}

// The AC size modifier is the same magnitude as the CMB one, but flipped — smaller creatures
// are harder to hit.
const ARMOR_CLASS_SIZE_MODIFIERS = {
	Fine: 8, Diminutive: 4, Tiny: 2, Small: 1, Medium: 0, Large: -1, Huge: -2, Gargantuan: -4, Colossal: -8,
};

export function getArmorClassSizeModifier(size) {
	return ARMOR_CLASS_SIZE_MODIFIERS[size] ?? 0;
}

// CMB = BAB + Strength modifier + special size modifier.
export function getCMB(bab, strMod, size) {
	return bab + strMod + getCombatManeuverSizeModifier(size);
}

// CMD = 10 + BAB + Strength modifier + Dexterity modifier + special size modifier.
export function getCMD(bab, strMod, dexMod, size) {
	return 10 + bab + strMod + dexMod + getCombatManeuverSizeModifier(size);
}
