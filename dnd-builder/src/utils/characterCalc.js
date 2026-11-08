import { getEditionData } from '../data';
import skills from '../data/skills';
import { ABILITY_KEYS, ABILITY_NAMES, getModifier, formatSigned } from './abilityScore';

const abilityKeyByName = Object.fromEntries(Object.entries(ABILITY_NAMES).map(([k, v]) => [v, k]));
const norm = (s) => String(s).replace(/\s+/g, ' ').trim();

export const is2024 = (character) => character.edition === '2024';
const rules = (character) => getEditionData(character.edition);

export function getRace(character) {
	return rules(character).races[character.race.name] || null;
}

export function getSubrace(character) {
	const race = getRace(character);
	return race?.subraces.find((s) => s.name === character.race.subrace) || null;
}

export function getClass(character) {
	return rules(character).classes[character.classInfo.className] || null;
}

export function getBackground(character) {
	return rules(character).backgrounds[character.background.name] || null;
}

export function getLevel(character) {
	return Math.min(20, Math.max(1, Number(character.classInfo.level) || 1));
}

export function getProficiencyBonus(level) {
	return Math.ceil(level / 4) + 1;
}

// 2014: bonuses come from race/subrace (plus the player's picks for "choose N" races).
// 2024: bonuses come from the background: +2/+1 or +1/+1/+1 among its listed abilities.
export function getAbilityBonuses(character) {
	const bonuses = Object.fromEntries(ABILITY_KEYS.map((k) => [k, 0]));
	if (is2024(character)) {
		const bg = getBackground(character);
		if (!bg) return bonuses;
		const bgInfo = character.background;
		const allowed = bg.abilityScores;
		if (bgInfo.abilityMode === 'oneOneOne') {
			const picks = bg.name === 'Custom' ? [bgInfo.abilityPlus2, bgInfo.abilityPlus1, bgInfo.abilityPlus1b] : allowed;
			new Set(picks.filter((k) => k && allowed.includes(k))).forEach((k) => { bonuses[k] += 1; });
		} else {
			if (bgInfo.abilityPlus2 && allowed.includes(bgInfo.abilityPlus2)) bonuses[bgInfo.abilityPlus2] += 2;
			if (bgInfo.abilityPlus1 && allowed.includes(bgInfo.abilityPlus1) && bgInfo.abilityPlus1 !== bgInfo.abilityPlus2) {
				bonuses[bgInfo.abilityPlus1] += 1;
			}
		}
		return bonuses;
	}
	const race = getRace(character);
	if (!race) return bonuses;
	const apply = (asi) => {
		Object.entries(asi.fixed).forEach(([k, v]) => { bonuses[k] += v; });
	};
	apply(race.abilityScoreIncrease);
	const sub = getSubrace(character);
	if (sub) apply(sub.abilityScoreIncrease);
	const choose = race.abilityScoreIncrease.choose;
	if (choose) {
		character.race.abilityChoices.slice(0, choose.count).forEach((k) => { bonuses[k] += choose.amount; });
	}
	return bonuses;
}

export function getFinalAbilities(character) {
	const bonuses = getAbilityBonuses(character);
	return Object.fromEntries(ABILITY_KEYS.map((k) => {
		const base = character.abilities[k];
		return [k, base === '' ? '' : Math.min(20, Number(base) + bonuses[k])];
	}));
}

export function getAbilityMods(character) {
	const finals = getFinalAbilities(character);
	return Object.fromEntries(ABILITY_KEYS.map((k) => [k, getModifier(finals[k])]));
}

// Skills the species grants outright or lets the player pick.
export function getRacialSkills(character) {
	const race = getRace(character);
	if (!race) return [];
	const picked = character.race.skillChoices;
	if (is2024(character)) {
		if (race.name === 'Human' || race.name === 'Elf') return picked.slice(0, 1);
		return [];
	}
	const granted = [];
	if (race.name === 'Elf') granted.push('Perception');
	if (race.name === 'Half-Orc') granted.push('Intimidation');
	if (race.name === 'Half-Elf') granted.push(...picked.slice(0, 2));
	return granted;
}

// How many racial skill picks the player makes on the Race page, and from which skills.
export function getRacialSkillPicks(character) {
	const race = getRace(character);
	if (!race) return null;
	if (is2024(character)) {
		if (race.name === 'Human') return { count: 1, from: skills.map((s) => s.name), label: 'Skillful (choose 1 skill)' };
		if (race.name === 'Elf') return { count: 1, from: ['Insight', 'Perception', 'Survival'], label: 'Keen Senses (choose 1 skill)' };
		return null;
	}
	if (race.name === 'Half-Elf') return { count: 2, from: skills.map((s) => s.name), label: 'Skill Versatility (choose 2 skills)' };
	return null;
}

export function getBackgroundSkills(character) {
	const bg = getBackground(character);
	if (!bg) return [];
	return bg.name === 'Custom' ? character.background.customSkills.slice(0, 2) : bg.skills;
}

export function getProficientSkills(character) {
	const all = [
		...getBackgroundSkills(character),
		...getRacialSkills(character),
		...character.skills.classChoices,
	];
	return [...new Set(all)];
}

// Feats the 2024 character has from origin sources (background feat, Human's Versatile).
export function getOriginFeats(character) {
	if (!is2024(character)) return [];
	const bg = getBackground(character);
	const feats = [];
	if (bg) feats.push(bg.name === 'Custom' ? character.background.originFeat : bg.feat);
	if (character.race.name === 'Human' && character.race.originFeat) feats.push(character.race.originFeat);
	return feats.filter(Boolean);
}

function columnIndex(cls, matcher) {
	return cls.table.columns.findIndex((c) => matcher.test(norm(c)));
}

export function getClassTableRow(cls, level) {
	return cls?.table.rows[level - 1] || null;
}

// Feature names listed for a class up to and including `level`, from the class table.
export function getClassFeatureNames(cls, level) {
	const col = columnIndex(cls, /^Features$/);
	const names = [];
	for (let l = 1; l <= level; l++) {
		const cell = cls.table.rows[l - 1]?.[col] || '';
		cell.split(/,\s*(?![^()]*\))/).map((s) => s.trim()).filter((s) => s && s !== '-' && s !== '—').forEach((n) => names.push(n));
	}
	return names;
}

// { type: 'standard', slots: {1: n..9: n} } | { type: 'pact', count, level } | null
export function getSpellSlots(character) {
	const cls = getClass(character);
	if (!cls || !cls.spellcastingAbility) return null;
	const level = getLevel(character);
	const row = getClassTableRow(cls, level);
	if (cls.name === 'Warlock') {
		const count = Number(row[columnIndex(cls, /^Spell Slots$/)]) || 0;
		const slotLevel = parseInt(row[columnIndex(cls, /^Slot Level$/)], 10) || 0;
		return { type: 'pact', count, level: slotLevel };
	}
	const slots = {};
	for (let sl = 1; sl <= 9; sl++) {
		const idx = cls.table.columns.findIndex((c) => new RegExp(`^Spell Slots per Spell Level ${sl}(st|nd|rd|th)$`).test(norm(c)));
		const v = idx >= 0 ? Number(row[idx]) : 0;
		slots[sl] = Number.isFinite(v) ? v : 0;
	}
	return { type: 'standard', slots };
}

export function getCantripsKnown(character) {
	const cls = getClass(character);
	if (!cls) return 0;
	const idx = columnIndex(cls, /^Cantrips( Known)?$/);
	return idx >= 0 ? Number(getClassTableRow(cls, getLevel(character))[idx]) || 0 : 0;
}

export function getSpellcastingStats(character) {
	const cls = getClass(character);
	if (!cls || !cls.spellcastingAbility) return null;
	const key = abilityKeyByName[cls.spellcastingAbility];
	const mod = getAbilityMods(character)[key];
	const prof = getProficiencyBonus(getLevel(character));
	return {
		className: cls.name, ability: cls.spellcastingAbility, abilityKey: key,
		saveDc: 8 + prof + mod, attackBonus: prof + mod,
	};
}

export function getHitPoints(character) {
	const cls = getClass(character);
	if (!cls) return null;
	const level = getLevel(character);
	const conMod = getAbilityMods(character).con;
	const sub = getSubrace(character);
	const dwarvenToughness = (sub?.name === 'Hill Dwarf') || (is2024(character) && character.race.name === 'Dwarf');
	const average = Math.floor(cls.hitDie / 2) + 1;
	return cls.hitDie + conMod + (level - 1) * (average + conMod) + (dwarvenToughness ? level : 0);
}

export function getSpeed(character) {
	return getRace(character)?.speed ?? '';
}

export function getArmorClass(character) {
	const armorData = rules(character).equipment.armor;
	const mods = getAbilityMods(character);
	const { armor: armorName, shield } = character.equipment;
	const worn = armorData.find((a) => a.name === armorName && a.type !== 'Shield');
	const shieldBonus = shield ? (armorData.find((a) => a.type === 'Shield')?.ac || 2) : 0;
	let ac;
	if (worn) {
		const dex = worn.dexCap === null ? mods.dex : Math.min(mods.dex, worn.dexCap);
		ac = worn.ac + dex;
	} else if (character.classInfo.className === 'Barbarian') {
		ac = 10 + mods.dex + mods.con;
	} else if (character.classInfo.className === 'Monk' && !shield) {
		ac = 10 + mods.dex + mods.wis;
	} else {
		ac = 10 + mods.dex;
	}
	return ac + shieldBonus;
}

export function getSkillBonuses(character) {
	const mods = getAbilityMods(character);
	const prof = getProficiencyBonus(getLevel(character));
	const proficient = getProficientSkills(character);
	return skills.map((s) => {
		const isProf = proficient.includes(s.name);
		return { ...s, proficient: isProf, bonus: mods[s.ability] + (isProf ? prof : 0) };
	});
}

export function getSavingThrows(character) {
	const cls = getClass(character);
	const mods = getAbilityMods(character);
	const prof = getProficiencyBonus(getLevel(character));
	return ABILITY_KEYS.map((k) => {
		const isProf = !!cls && cls.savingThrows.includes(ABILITY_NAMES[k]);
		return { key: k, name: ABILITY_NAMES[k], proficient: isProf, bonus: mods[k] + (isProf ? prof : 0) };
	});
}

function isWeaponProficient(character, weapon) {
	const cls = getClass(character);
	const race = getRace(character);
	const classText = (cls?.weaponProficiencies || '').toLowerCase();
	const lname = weapon.name.toLowerCase();
	const category = weapon.category.toLowerCase();
	if (classText.includes(category)) {
		if (category === 'martial' && /finesse or light/.test(classText)) {
			if (weapon.properties.includes('Finesse') || weapon.properties.includes('Light')) return true;
		} else if (category === 'simple' || !/martial weapons that/.test(classText)) {
			return true;
		}
	}
	const singular = (w) => w.replace(/s$/, '');
	if (classText.split(/,| and /).some((p) => singular(p.trim()) === lname || p.trim() === lname)) return true;
	const raceText = (race?.traits || []).filter((t) => /proficiency with/i.test(t.description)).map((t) => t.description.toLowerCase()).join(' ');
	return raceText.includes(lname) || raceText.includes(`${lname}s`);
}

export function getAttacks(character) {
	const weaponData = rules(character).equipment.weapons;
	const mods = getAbilityMods(character);
	const prof = getProficiencyBonus(getLevel(character));
	return character.equipment.weapons.map((name) => {
		const w = weaponData.find((x) => x.name === name);
		if (!w) return null;
		const finesse = w.properties.includes('Finesse');
		const mod = w.kind === 'Ranged' ? mods.dex : finesse ? Math.max(mods.str, mods.dex) : mods.str;
		const attack = mod + (isWeaponProficient(character, w) ? prof : 0);
		const damage = w.damage ? `${w.damage}${mod ? formatSigned(mod) : ''} ${w.damageType}` : '';
		return { name: w.name, attackBonus: formatSigned(attack), damage, mastery: w.mastery || '' };
	}).filter(Boolean);
}

export function getArmorProficiencies(character) {
	return getClass(character)?.armorProficiencies || '';
}

export function getLanguages(character) {
	const race = getRace(character);
	const bg = getBackground(character);
	const parts = [];
	if (is2024(character)) {
		parts.push('Common and two other languages of your choice');
		return parts;
	}
	if (race) parts.push(race.languages.replace(/^You can speak, read, and write /, '').split(/\.(\s|$)/)[0]);
	if (bg?.languages) parts.push(`Background: ${bg.languages}`);
	return parts;
}

export function getCarriedGold(character) {
	const g = character.equipment.gold;
	return g === '' ? '' : String(g);
}
