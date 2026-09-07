import { getBaseAttackBonus, getSaveBonuses } from './classProgression';
import { getBaseFeatCount, getBonusFeatCount } from './featAllotment';

// Total character level: primary + secondary for Standard Multiclassing, otherwise just the
// primary class's level (Variant Multiclassing never grants levels in the secondary class).
export function getTotalCharacterLevel(classInfo) {
	const level = Number(classInfo.level) || 0;
	if (classInfo.multiclassType !== 'Standard') return level;
	return level + (Number(classInfo.secondaryLevel) || 0);
}

function getSecondaryClassData(classInfo, classesData) {
	if (classInfo.multiclassType !== 'Standard' || !classInfo.secondaryClassName) return null;
	return classesData[classInfo.secondaryClassName] || null;
}

// BAB is summed from each class's own progression at that class's own level (Standard only —
// Variant Multiclassing doesn't grant a second BAB progression).
export function getCombinedBab(classInfo, classesData) {
	const primaryData = classesData[classInfo.className];
	const primaryBab = primaryData ? getBaseAttackBonus(primaryData.bab, Number(classInfo.level) || 0) : 0;
	const secondaryData = getSecondaryClassData(classInfo, classesData);
	const secondaryBab = secondaryData
		? getBaseAttackBonus(secondaryData.bab, Number(classInfo.secondaryLevel) || 0)
		: 0;
	return primaryBab + secondaryBab;
}

// Saving throws are summed the same way — each class contributes its own fort/ref/will bonus
// at its own level.
export function getCombinedSaveBonuses(classInfo, classesData) {
	const primaryData = classesData[classInfo.className];
	const primary = primaryData
		? getSaveBonuses(primaryData.saves, Number(classInfo.level) || 0)
		: { fort: 0, ref: 0, will: 0 };
	const secondaryData = getSecondaryClassData(classInfo, classesData);
	const secondary = secondaryData
		? getSaveBonuses(secondaryData.saves, Number(classInfo.secondaryLevel) || 0)
		: { fort: 0, ref: 0, will: 0 };
	return {
		fort: primary.fort + secondary.fort,
		ref: primary.ref + secondary.ref,
		will: primary.will + secondary.will,
	};
}

// Class skills are the union of both classes' lists (Standard only — Variant Multiclassing
// doesn't grant secondary class skills).
export function getCombinedClassSkills(classInfo, classesData) {
	const primaryData = classesData[classInfo.className];
	const primarySkills = primaryData ? primaryData.classSkills : [];
	const secondaryData = getSecondaryClassData(classInfo, classesData);
	if (!secondaryData) return primarySkills;
	return Array.from(new Set([...primarySkills, ...secondaryData.classSkills]));
}

// Skill point budget sums each class's own ranks-per-level (floored at 1, plus Int mod) times
// that class's own level (Standard only).
export function getCombinedSkillBudget(classInfo, classesData, intMod) {
	const primaryData = classesData[classInfo.className];
	const primaryBudget = primaryData
		? Math.max(1, primaryData.skillRanksPerLevel + intMod) * (Number(classInfo.level) || 0)
		: 0;
	const secondaryData = getSecondaryClassData(classInfo, classesData);
	const secondaryBudget = secondaryData
		? Math.max(1, secondaryData.skillRanksPerLevel + intMod) * (Number(classInfo.secondaryLevel) || 0)
		: 0;
	return primaryBudget + secondaryBudget;
}

// The archetype tiers a Variant-multiclassed character has reached so far, given their
// (primary) character level.
export function getReachedArchetypeTiers(classInfo, archetypeData) {
	if (classInfo.multiclassType !== 'Variant' || !classInfo.secondaryClassName) return [];
	const tiers = archetypeData[classInfo.secondaryClassName];
	if (!tiers) return [];
	const level = Number(classInfo.level) || 0;
	return tiers.filter((tier) => tier.level <= level);
}

// Special Abilities list: primary + secondary classes' specialByLevel entries up to their own
// level (Standard), or the primary's entries plus reached Variant archetype tier names.
export function getCombinedSpecialAbilities(classInfo, classesData, archetypeData) {
	const primaryData = classesData[classInfo.className];
	const primaryLevel = Number(classInfo.level) || 0;
	const primaryAbilities = primaryData ? primaryData.specialByLevel.slice(0, primaryLevel) : [];

	if (classInfo.multiclassType === 'Standard') {
		const secondaryData = getSecondaryClassData(classInfo, classesData);
		const secondaryLevel = Number(classInfo.secondaryLevel) || 0;
		const secondaryAbilities = secondaryData ? secondaryData.specialByLevel.slice(0, secondaryLevel) : [];
		return [...primaryAbilities, ...secondaryAbilities];
	}

	if (classInfo.multiclassType === 'Variant') {
		const tierNames = getReachedArchetypeTiers(classInfo, archetypeData)
			.map((tier) => `${classInfo.secondaryClassName} Archetype: ${tier.name}`);
		return [...primaryAbilities, ...tierNames];
	}

	return primaryAbilities;
}

// Number of feat slots a Variant-multiclassed character has traded away for archetype
// benefits, for subtracting from the normal feat allotment.
export function getVariantFeatsTraded(classInfo, archetypeData) {
	return getReachedArchetypeTiers(classInfo, archetypeData).length;
}

// Sums each class's own class-granted bonus feats (Fighter/Monk/Wizard, etc.) at its own level.
export function getCombinedBonusFeatCount(classInfo, classesData) {
	const primaryData = classesData[classInfo.className];
	const primaryBonus = getBonusFeatCount(primaryData, Number(classInfo.level) || 0);
	if (classInfo.multiclassType !== 'Standard') return primaryBonus;
	const secondaryData = getSecondaryClassData(classInfo, classesData);
	const secondaryBonus = getBonusFeatCount(secondaryData, Number(classInfo.secondaryLevel) || 0);
	return primaryBonus + secondaryBonus;
}

// Total number of feats a character may select: the normal level-based progression plus each
// class's own bonus feats, plus the Human racial bonus, minus any feat slots a Variant
// Multiclass character has traded away for archetype benefits.
export function getTotalFeatAllotment(classInfo, classesData, archetypeData, raceName) {
	const totalLevel = getTotalCharacterLevel(classInfo);
	const base = getBaseFeatCount(totalLevel);
	const bonus = getCombinedBonusFeatCount(classInfo, classesData);
	const humanBonus = raceName === 'Human' ? 1 : 0;
	const variantTraded = getVariantFeatsTraded(classInfo, archetypeData);
	return base + bonus + humanBonus - variantTraded;
}
