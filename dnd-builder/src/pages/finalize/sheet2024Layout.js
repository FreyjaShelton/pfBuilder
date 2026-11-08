// Coordinates (PDF points, origin bottom-left, 603x774 pages) for the flat 2024 character sheet.
// Text fields: { page, x, y, size, align, maxWidth }. align is where x sits (left/center/right).
export const TEXT = {
	name: { page: 0, x: 96, y: 739, size: 11, align: 'left', maxWidth: 120 },
	background: { page: 0, x: 80, y: 717, size: 9, align: 'left', maxWidth: 62 },
	species: { page: 0, x: 58, y: 696, size: 9, align: 'left', maxWidth: 82 },
	className: { page: 0, x: 175, y: 717, size: 9, align: 'left', maxWidth: 70 },
	subclass: { page: 0, x: 188, y: 696, size: 9, align: 'left', maxWidth: 60 },
	level: { page: 0, x: 277, y: 729, size: 12, align: 'center', maxWidth: 24 },
	armorClass: { page: 0, x: 349, y: 722, size: 16, align: 'center', maxWidth: 30 },
	hpCurrent: { page: 0, x: 400, y: 711, size: 14, align: 'center', maxWidth: 40 },
	hpTemp: { page: 0, x: 446, y: 727, size: 10, align: 'center', maxWidth: 30 },
	hpMax: { page: 0, x: 446, y: 707, size: 10, align: 'center', maxWidth: 30 },
	hitDiceSpent: { page: 0, x: 500, y: 727, size: 10, align: 'center', maxWidth: 30 },
	hitDiceMax: { page: 0, x: 500, y: 707, size: 10, align: 'center', maxWidth: 30 },
	proficiencyBonus: { page: 0, x: 54, y: 614, size: 16, align: 'center', maxWidth: 40 },
	initiative: { page: 0, x: 265, y: 633, size: 14, align: 'center', maxWidth: 50 },
	speed: { page: 0, x: 356, y: 633, size: 12, align: 'center', maxWidth: 60 },
	size: { page: 0, x: 450, y: 633, size: 12, align: 'center', maxWidth: 60 },
	passivePerception: { page: 0, x: 547, y: 633, size: 14, align: 'center', maxWidth: 50 },
};

// Ability blocks: the big circle holds the modifier, the small box the score.
export const ABILITIES = {
	str: { mod: [45, 548], score: [74, 540] },
	dex: { mod: [45, 430], score: [74, 422] },
	con: { mod: [45, 285], score: [74, 277] },
	int: { mod: [151, 626], score: [180, 618] },
	wis: { mod: [151, 452], score: [180, 444] },
	cha: { mod: [151, 278], score: [180, 270] },
};

// Saving-throw and skill rows: the label's left x and baseline y. Value is right-aligned just
// left of the label; the proficiency circle sits further left.
export const SAVES = {
	str: [48, 506], dex: [48, 388], con: [48, 243],
	int: [154, 584], wis: [154, 410], cha: [154, 236],
};
export const SKILLS = {
	Athletics: [47, 486],
	Acrobatics: [47, 368], 'Sleight of Hand': [47, 354], Stealth: [47, 340],
	Arcana: [153, 564], History: [153, 550], Investigation: [153, 536], Nature: [153, 522], Religion: [153, 508],
	'Animal Handling': [153, 390], Insight: [153, 376], Medicine: [153, 362], Perception: [153, 348], Survival: [153, 334],
	Deception: [153, 216], Intimidation: [153, 202], Performance: [153, 188], Persuasion: [153, 174],
};
export const PROFICIENCY_DOT = { dx: -24, dy: 3, radius: 3 };
export const ROW_VALUE = { dx: -3, size: 8 };

export const HEROIC_INSPIRATION = { page: 0, x: 58, y: 180 };

// Weapons & damage table: up to six rows.
export const WEAPON_ROWS = {
	ys: [562, 548, 534, 520, 506, 492],
	name: { x: 228, size: 8, maxWidth: 105 },
	attack: { x: 338, size: 8, maxWidth: 50 },
	damage: { x: 384, size: 8, maxWidth: 74 },
	notes: { x: 462, size: 7, maxWidth: 125 },
};

// Large free-text boxes: { page, x, y (top baseline), width, height, size }
export const BOXES = {
	classFeatures: { page: 0, x: 229, y: 418, width: 358, height: 195, size: 7 },
	speciesTraits: { page: 0, x: 227, y: 172, width: 162, height: 150, size: 7 },
	feats: { page: 0, x: 410, y: 172, width: 178, height: 150, size: 7 },
	armorTraining: { page: 0, x: 17, y: 100, width: 190, height: 14, size: 7 },
	weaponTraining: { page: 0, x: 17, y: 82, width: 190, height: 24, size: 7 },
	toolTraining: { page: 0, x: 17, y: 40, width: 190, height: 28, size: 7 },
	backstory: { page: 1, x: 411, y: 626, width: 178, height: 120, size: 7 },
	appearance: { page: 1, x: 411, y: 735, width: 178, height: 80, size: 7 },
	alignment: { page: 1, x: 452, y: 489, width: 130, height: 12, size: 8 },
	languages: { page: 1, x: 411, y: 428, width: 178, height: 50, size: 7 },
	equipment: { page: 1, x: 411, y: 360, width: 178, height: 165, size: 7 },
};

export const ARMOR_TRAINING_DOTS = {
	Light: [62, 126], Medium: [96, 126], Heavy: [140, 126], Shields: [178, 126],
};

export const COINS = {
	cp: [434, 66], sp: [470, 66], ep: [506, 66], gp: [541, 66], pp: [576, 66],
};

// Page 2 spellcasting block.
export const SPELLCASTING = {
	ability: { page: 1, x: 22, y: 745, size: 9, align: 'left', maxWidth: 110 },
	modifier: { page: 1, x: 30, y: 710, size: 12, align: 'center', maxWidth: 30 },
	saveDc: { page: 1, x: 30, y: 683, size: 12, align: 'center', maxWidth: 30 },
	attackBonus: { page: 1, x: 30, y: 658, size: 12, align: 'center', maxWidth: 30 },
};
// Spell slot totals: [x, y] of each level's Total box.
export const SLOT_TOTALS = {
	1: [189, 681], 2: [189, 667], 3: [189, 653],
	4: [277, 681], 5: [277, 667], 6: [277, 653],
	7: [355, 681], 8: [355, 667], 9: [355, 653],
};
