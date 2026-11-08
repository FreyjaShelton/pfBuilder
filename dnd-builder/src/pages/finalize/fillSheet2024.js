import { rgb } from 'pdf-lib';
import { ABILITY_KEYS, ABILITY_NAMES, formatSigned } from '../../utils/abilityScore';
import {
	getAbilityMods, getArmorClass, getAttacks, getBackground, getClass, getClassFeatureNames,
	getFinalAbilities, getHitPoints, getLanguages, getLevel, getOriginFeats, getProficiencyBonus,
	getRace, getSavingThrows, getSkillBonuses, getSpeed, getSpellSlots, getSpellcastingStats,
} from '../../utils/characterCalc';
import {
	TEXT, ABILITIES, SAVES, SKILLS, PROFICIENCY_DOT, ROW_VALUE, WEAPON_ROWS, BOXES,
	ARMOR_TRAINING_DOTS, COINS, SPELLCASTING, SLOT_TOTALS,
} from './sheet2024Layout';

const INK = rgb(0.1, 0.1, 0.12);

// Draws one line of text, shrinking the font until it fits maxWidth.
function drawLine(page, font, text, { x, y, size, align = 'left', maxWidth }) {
	if (text === undefined || text === null || text === '') return;
	const str = String(text);
	let fs = size;
	if (maxWidth) {
		while (fs > 4 && font.widthOfTextAtSize(str, fs) > maxWidth) fs -= 0.5;
	}
	const w = font.widthOfTextAtSize(str, fs);
	const left = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
	page.drawText(str, { x: left, y, size: fs, font, color: INK });
}

function wrap(font, text, size, width) {
	const lines = [];
	String(text).split('\n').forEach((para) => {
		let line = '';
		para.split(/\s+/).filter(Boolean).forEach((word) => {
			const next = line ? `${line} ${word}` : word;
			if (font.widthOfTextAtSize(next, size) <= width) line = next;
			else { if (line) lines.push(line); line = word; }
		});
		lines.push(line);
	});
	return lines;
}

// Wraps text into a box, shrinking the font until it fits the box height.
function drawBox(page, font, text, { x, y, width, height, size }) {
	if (!text) return;
	let fs = size;
	let lines = wrap(font, text, fs, width);
	while (fs > 4.5 && lines.length * (fs + 1.5) > height) {
		fs -= 0.5;
		lines = wrap(font, text, fs, width);
	}
	const lineHeight = fs + 1.5;
	lines.slice(0, Math.floor(height / lineHeight)).forEach((l, i) => {
		page.drawText(l, { x, y: y - i * lineHeight, size: fs, font, color: INK });
	});
}

function dot(page, cx, cy, r = PROFICIENCY_DOT.radius) {
	page.drawCircle({ x: cx, y: cy, size: r, color: INK });
}

export function fillSheet2024(pdfDoc, character, font) {
	const [p1, p2] = pdfDoc.getPages();
	const pages = [p1, p2];
	const put = (key, text) => drawLine(pages[TEXT[key].page], font, text, TEXT[key]);

	const { info, equipment } = character;
	const cls = getClass(character);
	const race = getRace(character);
	const bg = getBackground(character);
	const level = getLevel(character);
	const finals = getFinalAbilities(character);
	const mods = getAbilityMods(character);
	const prof = getProficiencyBonus(level);
	const picked = !!cls;

	put('name', info.name);
	put('background', bg ? (bg.name === 'Custom' ? character.background.customName : bg.name) : '');
	put('species', race ? (character.race.lineage ? `${race.name} (${character.race.lineage})` : race.name) : '');
	put('className', cls?.name);
	put('level', picked ? level : '');
	put('armorClass', picked || finals.dex !== '' ? getArmorClass(character) : '');
	const hp = picked ? getHitPoints(character) : '';
	put('hpCurrent', hp);
	put('hpMax', hp);
	put('hitDiceMax', picked ? `${level}d${cls.hitDie}` : '');
	put('proficiencyBonus', picked ? formatSigned(prof) : '');
	put('initiative', finals.dex === '' ? '' : formatSigned(mods.dex));
	put('speed', race ? `${getSpeed(character)} ft.` : '');
	put('size', race?.size);

	const skillBonuses = getSkillBonuses(character);
	const perception = skillBonuses.find((s) => s.name === 'Perception');
	put('passivePerception', finals.wis === '' ? '' : 10 + perception.bonus);

	ABILITY_KEYS.forEach((k) => {
		if (finals[k] === '') return;
		const { mod, score } = ABILITIES[k];
		drawLine(p1, font, formatSigned(mods[k]), { x: mod[0], y: mod[1], size: 16, align: 'center', maxWidth: 28 });
		drawLine(p1, font, finals[k], { x: score[0], y: score[1], size: 10, align: 'center', maxWidth: 20 });
	});

	const rowValue = (xy, value, proficient) => {
		const [lx, ly] = xy;
		drawLine(p1, font, value, { x: lx + ROW_VALUE.dx, y: ly, size: ROW_VALUE.size, align: 'right', maxWidth: 18 });
		if (proficient) dot(p1, lx + PROFICIENCY_DOT.dx, ly + PROFICIENCY_DOT.dy);
	};
	getSavingThrows(character).forEach((s) => {
		if (finals[s.key] === '') return;
		rowValue(SAVES[s.key], formatSigned(s.bonus), picked && s.proficient);
	});
	skillBonuses.forEach((s) => {
		if (finals[s.ability] === '') return;
		rowValue(SKILLS[s.name], formatSigned(s.bonus), s.proficient);
	});

	getAttacks(character).slice(0, WEAPON_ROWS.ys.length).forEach((atk, i) => {
		const y = WEAPON_ROWS.ys[i];
		drawLine(p1, font, atk.name, { ...WEAPON_ROWS.name, y });
		drawLine(p1, font, atk.attackBonus, { ...WEAPON_ROWS.attack, y });
		drawLine(p1, font, atk.damage, { ...WEAPON_ROWS.damage, y });
		drawLine(p1, font, atk.mastery ? `Mastery: ${atk.mastery}` : '', { ...WEAPON_ROWS.notes, y });
	});

	// Free-text boxes
	const box = (key, text) => drawBox(pages[BOXES[key].page], font, text, BOXES[key]);
	if (cls) box('classFeatures', getClassFeatureNames(cls, level).join(', '));
	if (race) {
		const traitNames = race.traits.map((t) => t.name);
		const lineage = character.race.lineage ? [`${race.lineage?.label || 'Lineage'}: ${character.race.lineage}`] : [];
		box('speciesTraits', [...traitNames, ...lineage].join(', '));
	}
	box('feats', getOriginFeats(character).join(', '));

	if (cls) {
		ARMOR_TRAINING_DOTS && Object.entries(ARMOR_TRAINING_DOTS).forEach(([name, [x, y]]) => {
			if (new RegExp(name === 'Shields' ? 'Shield' : name, 'i').test(cls.armorProficiencies)) dot(p1, x, y);
		});
		box('weaponTraining', cls.weaponProficiencies);
		const tools = [];
		if (cls.toolProficiencies && !/^none$/i.test(cls.toolProficiencies)) tools.push(cls.toolProficiencies);
		if (bg?.name === 'Custom' && character.background.customProficiency) tools.push(character.background.customProficiency);
		else if (bg?.toolProficiencies) tools.push(bg.toolProficiencies);
		box('toolTraining', tools.join('; '));
	}

	// Page 2
	const story = [
		['Personality', character.background.personalityTraits],
		['Ideals', character.background.ideals],
		['Bonds', character.background.bonds],
		['Flaws', character.background.flaws],
		['', info.backstory],
	].filter(([, v]) => v).map(([k, v]) => (k ? `${k}: ${v}` : v)).join('\n');
	box('backstory', story);
	box('appearance', ['Age', 'Height', 'Weight', 'Eyes', 'Skin', 'Hair']
		.map((f) => (info[f.toLowerCase()] ? `${f}: ${info[f.toLowerCase()]}` : '')).filter(Boolean).join('   '));
	box('alignment', info.alignment);
	box('languages', getLanguages(character).join('; '));
	const gear = [];
	if (equipment.armor) gear.push(equipment.armor);
	if (equipment.shield) gear.push('Shield');
	gear.push(...equipment.weapons, ...equipment.gear);
	box('equipment', gear.join(', '));
	if (equipment.gold !== '') drawLine(p2, font, equipment.gold, { x: COINS.gp[0], y: COINS.gp[1], size: 9, align: 'center', maxWidth: 30 });

	const casting = getSpellcastingStats(character);
	if (casting) {
		const s = SPELLCASTING;
		drawLine(p2, font, casting.ability, { ...s.ability });
		drawLine(p2, font, formatSigned(mods[casting.abilityKey]), s.modifier);
		drawLine(p2, font, casting.saveDc, s.saveDc);
		drawLine(p2, font, formatSigned(casting.attackBonus), s.attackBonus);
		const slots = getSpellSlots(character);
		if (slots?.type === 'standard') {
			Object.entries(slots.slots).forEach(([lvl, n]) => {
				if (n) drawLine(p2, font, n, { x: SLOT_TOTALS[lvl][0], y: SLOT_TOTALS[lvl][1], size: 9, align: 'center', maxWidth: 14 });
			});
		} else if (slots?.type === 'pact' && SLOT_TOTALS[slots.level]) {
			drawLine(p2, font, slots.count, { x: SLOT_TOTALS[slots.level][0], y: SLOT_TOTALS[slots.level][1], size: 9, align: 'center', maxWidth: 14 });
		}
	}
	void ABILITY_NAMES;
}
