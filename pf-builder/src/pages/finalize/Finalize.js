import { useEffect, useState } from "react";
import { Box, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { PDFDocument, StandardFonts } from "pdf-lib";
import characterSheet from './Pathfinder_en.pdf'
import { useCharacter } from '../../context/CharacterContext';
import raceInfo from '../../data/races';
import { formatModifier, getModifier } from '../../utils/abilityScore';
import { getRacialModifiers } from '../../utils/raceModifiers';
import { getBaseAttackBonus, getSaveBonuses, formatSigned } from '../../utils/classProgression';
import { getCMB, getCMD, getCombatManeuverSizeModifier } from '../../utils/combatStats';
import classesData from '../../data/classes';
import skillsList from '../../data/skills';
import equipmentData from '../../data/equipment';
import { parseCostToGold } from '../../utils/currency';
import { parseWeightToLbs } from '../../utils/weight';
import { wrapEntriesToLines } from '../../utils/pdfText';
import PageHeader from '../../components/PageHeader';
import { getStepEyebrow } from '../../data/wizardSteps';

const alignmentAbbreviations = {
	'Lawful Good': 'LG', 'Neutral Good': 'NG', 'Chaotic Good': 'CG',
	'Lawful Neutral': 'LN', 'True Neutral': 'N', 'Chaotic Neutral': 'CN',
	'Lawful Evil': 'LE', 'Neutral Evil': 'NE', 'Chaotic Evil': 'CE',
};

const PdfEditor = () => {
	const [pdfUrl, setPdfUrl] = useState(null);
	const { character } = useCharacter();

	const fillPdf = async () => {
		// Fetch the existing PDF
		const url = characterSheet
		const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

		// Load PDF
		const pdfDoc = await PDFDocument.load(existingPdfBytes);
		const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

		// Get form fields
		const form = pdfDoc.getForm();
		const pages = pdfDoc.getPages();
		const firstPage = pages[0];
		const secondPage = pages[1];
		const deity = character.info.deity || "";


		// #region Page 1

		// #region Character Info
		firstPage.drawText(character.info.name || "", {
			x: 240,
			y: 730,
			size: 14
		});

		firstPage.drawText(alignmentAbbreviations[character.info.alignment] || "", {
			x: 380,
			y: 730,
			size: 14
		});

		firstPage.drawText(character.info.player || "", {
			x: 425,
			y: 730,
			size: 14
		});

		// No dedicated "Class" field exists on this sheet, so Class + Level share the "Character Level" line.
		firstPage.drawText(`${character.classInfo.className} ${character.classInfo.level}`.trim(), {
			x: 240,
			y: 711,
			size: 10
		});

		firstPage.drawText(deity, {
			x: 425,
			y: 711,
			size: 10
		});

		firstPage.drawText(character.info.homeland || "", {
			x: 505,
			y: 711,
			size: 10
		});

		firstPage.drawText(character.race.name || "", {
			x: 240,
			y: 692,
			size: 10
		});

		firstPage.drawText(raceInfo[character.race.name]?.size || "", {
			x: 325,
			y: 692,
			size: 10
		});

		firstPage.drawText(character.info.gender || "", {
			x: 360,
			y: 692,
			size: 10
		});

		firstPage.drawText(character.info.age || "", {
			x: 395,
			y: 692,
			size: 10
		});

		firstPage.drawText(character.info.height || "", {
			x: 425,
			y: 692,
			size: 10
		});

		firstPage.drawText(character.info.weight || "", {
			x: 460,
			y: 692,
			size: 10
		});

		firstPage.drawText(character.info.hair || "", {
			x: 500,
			y: 692,
			size: 10
		});

		firstPage.drawText(character.info.eyes || "", {
			x: 530,
			y: 692,
			size: 10
		});

		// #endregion Character Info

		// #region Ability Scores

		const racialAbilityMods = getRacialModifiers(raceInfo[character.race.name], character.race.abilityChoice);
		const adjustedAbilities = {
			str: character.abilities.str === '' ? '' : Number(character.abilities.str) + racialAbilityMods.str,
			dex: character.abilities.dex === '' ? '' : Number(character.abilities.dex) + racialAbilityMods.dex,
			con: character.abilities.con === '' ? '' : Number(character.abilities.con) + racialAbilityMods.con,
			int: character.abilities.int === '' ? '' : Number(character.abilities.int) + racialAbilityMods.int,
			wis: character.abilities.wis === '' ? '' : Number(character.abilities.wis) + racialAbilityMods.wis,
			cha: character.abilities.cha === '' ? '' : Number(character.abilities.cha) + racialAbilityMods.cha,
		};

		// STR
		firstPage.drawText(String(adjustedAbilities.str ?? ""), {
			x: 73,
			y: 651,
			size: 12
		});
		firstPage.drawText(formatModifier(adjustedAbilities.str), {
			x: 100,
			y: 651,
			size: 12
		});
		// Temp Score / Temp Modifier columns intentionally left blank — no UI yet for temporary ability adjustments.
		firstPage.drawText("", {
			x: 127,
			y: 651,
			size: 12
		});
		firstPage.drawText("", {
			x: 155,
			y: 651,
			size: 12
		});

		// DEX
		firstPage.drawText(String(adjustedAbilities.dex ?? ""), {
			x: 73,
			y: 633,
			size: 12
		});
		firstPage.drawText(formatModifier(adjustedAbilities.dex), {
			x: 100,
			y: 633,
			size: 12
		});
		firstPage.drawText("", {
			x: 127,
			y: 633,
			size: 12
		});
		firstPage.drawText("", {
			x: 155,
			y: 633,
			size: 12
		});

		// CON
		firstPage.drawText(String(adjustedAbilities.con ?? ""), {
			x: 73,
			y: 617,
			size: 12
		});
		firstPage.drawText(formatModifier(adjustedAbilities.con), {
			x: 100,
			y: 617,
			size: 12
		});
		firstPage.drawText("", {
			x: 127,
			y: 617,
			size: 12
		});
		firstPage.drawText("", {
			x: 155,
			y: 617,
			size: 12
		});

		// INT
		firstPage.drawText(String(adjustedAbilities.int ?? ""), {
			x: 73,
			y: 600,
			size: 12
		});
		firstPage.drawText(formatModifier(adjustedAbilities.int), {
			x: 100,
			y: 600,
			size: 12
		});
		firstPage.drawText("", {
			x: 127,
			y: 600,
			size: 12
		});
		firstPage.drawText("", {
			x: 155,
			y: 600,
			size: 12
		});

		// WIS
		firstPage.drawText(String(adjustedAbilities.wis ?? ""), {
			x: 73,
			y: 581,
			size: 12
		});
		firstPage.drawText(formatModifier(adjustedAbilities.wis), {
			x: 100,
			y: 581,
			size: 12
		});
		firstPage.drawText("", {
			x: 127,
			y: 581,
			size: 12
		});
		firstPage.drawText("", {
			x: 155,
			y: 581,
			size: 12
		});

		// CHA
		firstPage.drawText(String(adjustedAbilities.cha ?? ""), {
			x: 73,
			y: 565,
			size: 12
		});
		firstPage.drawText(formatModifier(adjustedAbilities.cha), {
			x: 100,
			y: 565,
			size: 12
		});
		firstPage.drawText("", {
			x: 127,
			y: 565,
			size: 12
		});
		firstPage.drawText("", {
			x: 155,
			y: 565,
			size: 12
		});

		// #endregion Ability Scores

		// #region Character Stats

		firstPage.drawText("HP", {
			x: 242,
			y: 659,
			size: 12
		});
		firstPage.drawText("DR", {
			x: 288,
			y: 659,
			size: 12
		});

		// Move speed
		firstPage.drawText("Speed", {
			x: 365,
			y: 659,
			size: 12
		});
		firstPage.drawText("Armor Speed", {
			x: 447,
			y: 659,
			size: 12
		});
		firstPage.drawText("Fly", {
			x: 323,
			y: 635,
			size: 12
		});
		firstPage.drawText("Swim", {
			x: 400,
			y: 635,
			size: 12
		});
		firstPage.drawText("Climb", {
			x: 444,
			y: 635,
			size: 12
		});
		firstPage.drawText("Burrow", {
			x: 480,
			y: 635,
			size: 12
		});

		// #region Step 9: Saving Throws, Initiative, Attack Values (BAB/CMB/CMD)
		const combatClassData = classesData[character.classInfo.className];
		const combatLevel = Number(character.classInfo.level) || 1;
		const combatSize = raceInfo[character.race.name]?.size || 'Medium';
		const combatBab = combatClassData ? getBaseAttackBonus(combatClassData.bab, combatLevel) : 0;
		const strMod = getModifier(adjustedAbilities.str);
		const dexMod = getModifier(adjustedAbilities.dex);
		const conMod = getModifier(adjustedAbilities.con);
		const wisMod = getModifier(adjustedAbilities.wis);
		const saveBonuses = combatClassData ? getSaveBonuses(combatClassData.saves, combatLevel) : { fort: 0, ref: 0, will: 0 };
		const fortTotal = saveBonuses.fort + conMod;
		const refTotal = saveBonuses.ref + dexMod;
		const willTotal = saveBonuses.will + wisMod;
		const cmb = getCMB(combatBab, strMod, combatSize);
		const cmd = getCMD(combatBab, strMod, dexMod, combatSize);
		const cmbSizeMod = getCombatManeuverSizeModifier(combatSize);
		// #endregion Step 9: Saving Throws, Initiative, Attack Values (BAB/CMB/CMD)

		// Initiative
		firstPage.drawText(formatSigned(dexMod), {
			x: 241,
			y: 565,
			size: 12
		});
		firstPage.drawText(formatSigned(dexMod), {
			x: 265,
			y: 565,
			size: 12
		});

		firstPage.drawText("AC", {
			x: 73,
			y: 537,
			size: 12
		});

		// KNOWN BUG (pre-existing, out of scope for this phase): this draw duplicates the one
		// immediately above at the same x/y — likely meant to be a different field. Investigate
		// when the Character Stats region gets wired to real data.
		// AC
		firstPage.drawText("AC", {
			x: 73,
			y: 537,
			size: 12
		});
		firstPage.drawText("AB", {
			x: 120,
			y: 537,
			size: 12
		});
		firstPage.drawText("SB", {
			x: 147,
			y: 537,
			size: 12
		});
		firstPage.drawText("Dex", {
			x: 176,
			y: 537,
			size: 12
		});
		firstPage.drawText("Size", {
			x: 205,
			y: 537,
			size: 12
		});
		firstPage.drawText("NA", {
			x: 235,
			y: 537,
			size: 12
		});
		firstPage.drawText("DM", {
			x: 263,
			y: 537,
			size: 12
		});
		firstPage.drawText("Touch", {
			x: 72,
			y: 509,
			size: 12
		});
		firstPage.drawText("FF", {
			x: 156,
			y: 509,
			size: 12
		});

		// Fortitude saving throw
		firstPage.drawText(formatSigned(fortTotal), {
			x: 109,
			y: 476,
			size: 12
		});
		firstPage.drawText(formatSigned(saveBonuses.fort), {
			x: 135,
			y: 476,
			size: 12
		});
		firstPage.drawText(formatSigned(conMod), {
			x: 162,
			y: 476,
			size: 12
		});
		firstPage.drawText("", {
			x: 190,
			y: 476,
			size: 12
		});
		firstPage.drawText("", {
			x: 217,
			y: 476,
			size: 12
		});

		// Reflex saving throw
		firstPage.drawText(formatSigned(refTotal), {
			x: 109,
			y: 458,
			size: 12
		});
		firstPage.drawText(formatSigned(saveBonuses.ref), {
			x: 135,
			y: 458,
			size: 12
		});
		firstPage.drawText(formatSigned(dexMod), {
			x: 162,
			y: 458,
			size: 12
		});
		firstPage.drawText("", {
			x: 190,
			y: 458,
			size: 12
		});
		firstPage.drawText("", {
			x: 217,
			y: 458,
			size: 12
		});

		// Will Saving throw
		firstPage.drawText(formatSigned(willTotal), {
			x: 109,
			y: 442,
			size: 12
		});
		firstPage.drawText(formatSigned(saveBonuses.will), {
			x: 135,
			y: 442,
			size: 12
		});
		firstPage.drawText(formatSigned(wisMod), {
			x: 162,
			y: 442,
			size: 12
		});
		firstPage.drawText("", {
			x: 190,
			y: 442,
			size: 12
		});
		firstPage.drawText("", {
			x: 217,
			y: 442,
			size: 12
		});

		// Attack stuff
		firstPage.drawText(formatSigned(combatBab), {
			x: 175,
			y: 420,
			size: 12
		});
		firstPage.drawText("", {
			x: 282,
			y: 420,
			size: 12
		});
		firstPage.drawText(formatSigned(cmb), {
			x: 130,
			y: 400,
			size: 12
		});
		firstPage.drawText(formatSigned(combatBab), {
			x: 163,
			y: 400,
			size: 12
		});
		firstPage.drawText(formatSigned(strMod), {
			x: 193,
			y: 400,
			size: 12
		});
		firstPage.drawText(formatSigned(cmbSizeMod), {
			x: 223,
			y: 400,
			size: 12
		});
		firstPage.drawText(formatSigned(cmd), {
			x: 130,
			y: 372,
			size: 12
		});
		firstPage.drawText(formatSigned(combatBab), {
			x: 163,
			y: 372,
			size: 12
		});
		firstPage.drawText(formatSigned(strMod), {
			x: 193,
			y: 372,
			size: 12
		});
		firstPage.drawText(formatSigned(dexMod), {
			x: 223,
			y: 372,
			size: 12
		});
		firstPage.drawText(formatSigned(cmbSizeMod), {
			x: 254,
			y: 372,
			size: 12
		});

		// #endregion Character Stats

		// #region Weapons

		// Weapon 1
		firstPage.drawText("Weapon 1", {
			x: 31,
			y: 331,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 331,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 331,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 305,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 305,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 305,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 305,
			size: 12
		});

		// Weapon 2
		firstPage.drawText("Weapon 2", {
			x: 31,
			y: 268,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 268,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 268,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 242,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 242,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 242,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 242,
			size: 12
		});

		// Weapon 3
		firstPage.drawText("Weapon 3", {
			x: 31,
			y: 204,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 204,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 204,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 180,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 180,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 180,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 180,
			size: 12
		});

		// Weapon 4
		firstPage.drawText("Weapon 4", {
			x: 31,
			y: 142,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 142,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 142,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 116,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 116,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 116,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 116,
			size: 12
		});

		// Weapon 5
		firstPage.drawText("Weapon 5", {
			x: 31,
			y: 80,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 80,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 80,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 54,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 54,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 54,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 54,
			size: 12
		});

		// #endregion Weapons

		// #region Skills

		// #region Skill Row Computation
		const selectedClassData = classesData[character.classInfo.className];
		const classSkillNames = selectedClassData ? selectedClassData.classSkills : [];
		const skillRows = skillsList.map((skillDef) => {
			const entry = character.skills[skillDef.key] || { ranks: 0 };
			const ranks = Number(entry.ranks) || 0;
			const abilityMod = getModifier(adjustedAbilities[skillDef.ability]);
			const isClassSkill = classSkillNames.includes(skillDef.name);
			const classBonus = isClassSkill && ranks > 0 ? 3 : 0;
			return { ranks, abilityMod, isClassSkill, total: ranks + abilityMod + classBonus };
		});
		// #endregion Skill Row Computation



		// Acrobatics
		firstPage.drawText(skillRows[0].isClassSkill ? "X" : "", {
			x: 319,
			y: 577,
			size: 6
		});
		firstPage.drawText(String(skillRows[0].total), {
			x: 443,
			y: 579,
			size: 10
		});
		firstPage.drawText(String(skillRows[0].ranks), {
			x: 490,
			y: 579,
			size: 10
		});
		firstPage.drawText(String(skillRows[0].abilityMod), {
			x: 522,
			y: 579,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 579,
			size: 10
		});

		// Appraise
		firstPage.drawText(skillRows[1].isClassSkill ? "X" : "", {
			x: 319,
			y: 566,
			size: 6
		});
		firstPage.drawText(String(skillRows[1].total), {
			x: 443,
			y: 568,
			size: 10
		});
		firstPage.drawText(String(skillRows[1].ranks), {
			x: 490,
			y: 568,
			size: 10
		});
		firstPage.drawText(String(skillRows[1].abilityMod), {
			x: 522,
			y: 568,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 568,
			size: 10
		});

		// Bluff
		firstPage.drawText(skillRows[2].isClassSkill ? "X" : "", {
			x: 319,
			y: 554,
			size: 6
		});
		firstPage.drawText(String(skillRows[2].total), {
			x: 443,
			y: 556,
			size: 10
		});
		firstPage.drawText(String(skillRows[2].ranks), {
			x: 490,
			y: 556,
			size: 10
		});
		firstPage.drawText(String(skillRows[2].abilityMod), {
			x: 522,
			y: 556,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 556,
			size: 10
		});

		// Climb
		firstPage.drawText(skillRows[3].isClassSkill ? "X" : "", {
			x: 319,
			y: 543,
			size: 6
		});
		firstPage.drawText(String(skillRows[3].total), {
			x: 443,
			y: 545,
			size: 10
		});
		firstPage.drawText(String(skillRows[3].ranks), {
			x: 490,
			y: 545,
			size: 10
		});
		firstPage.drawText(String(skillRows[3].abilityMod), {
			x: 522,
			y: 545,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 545,
			size: 10
		});

		// Craft 1
		firstPage.drawText(skillRows[4].isClassSkill ? "X" : "", {
			x: 319,
			y: 532,
			size: 6
		});
		firstPage.drawText(String(skillRows[4].total), {
			x: 443,
			y: 534,
			size: 10
		});
		firstPage.drawText(String(skillRows[4].ranks), {
			x: 490,
			y: 534,
			size: 10
		});
		firstPage.drawText(String(skillRows[4].abilityMod), {
			x: 522,
			y: 534,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 534,
			size: 10
		});

		// Craft 2
		firstPage.drawText(skillRows[5].isClassSkill ? "X" : "", {
			x: 319,
			y: 521,
			size: 6
		});
		firstPage.drawText(String(skillRows[5].total), {
			x: 443,
			y: 523,
			size: 10
		});
		firstPage.drawText(String(skillRows[5].ranks), {
			x: 490,
			y: 523,
			size: 10
		});
		firstPage.drawText(String(skillRows[5].abilityMod), {
			x: 522,
			y: 523,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 523,
			size: 10
		});

		// Craft 3
		firstPage.drawText(skillRows[6].isClassSkill ? "X" : "", {
			x: 319,
			y: 509,
			size: 6
		});
		firstPage.drawText(String(skillRows[6].total), {
			x: 443,
			y: 511,
			size: 10
		});
		firstPage.drawText(String(skillRows[6].ranks), {
			x: 490,
			y: 511,
			size: 10
		});
		firstPage.drawText(String(skillRows[6].abilityMod), {
			x: 522,
			y: 511,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 511,
			size: 10
		});

		// Diplomacy
		firstPage.drawText(skillRows[7].isClassSkill ? "X" : "", {
			x: 319,
			y: 498,
			size: 6
		});
		firstPage.drawText(String(skillRows[7].total), {
			x: 443,
			y: 500,
			size: 10
		});
		firstPage.drawText(String(skillRows[7].ranks), {
			x: 490,
			y: 500,
			size: 10
		});
		firstPage.drawText(String(skillRows[7].abilityMod), {
			x: 522,
			y: 500,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 500,
			size: 10
		});

		// Disable Device
		firstPage.drawText(skillRows[8].isClassSkill ? "X" : "", {
			x: 319,
			y: 486,
			size: 6
		});
		firstPage.drawText(String(skillRows[8].total), {
			x: 443,
			y: 488,
			size: 10
		});
		firstPage.drawText(String(skillRows[8].ranks), {
			x: 490,
			y: 488,
			size: 10
		});
		firstPage.drawText(String(skillRows[8].abilityMod), {
			x: 522,
			y: 488,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 488,
			size: 10
		});

		// Disguise
		firstPage.drawText(skillRows[9].isClassSkill ? "X" : "", {
			x: 319,
			y: 475,
			size: 6
		});
		firstPage.drawText(String(skillRows[9].total), {
			x: 443,
			y: 477,
			size: 10
		});
		firstPage.drawText(String(skillRows[9].ranks), {
			x: 490,
			y: 477,
			size: 10
		});
		firstPage.drawText(String(skillRows[9].abilityMod), {
			x: 522,
			y: 477,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 477,
			size: 10
		});

		// Escape Artist
		firstPage.drawText(skillRows[10].isClassSkill ? "X" : "", {
			x: 319,
			y: 464,
			size: 6
		});
		firstPage.drawText(String(skillRows[10].total), {
			x: 443,
			y: 466,
			size: 10
		});
		firstPage.drawText(String(skillRows[10].ranks), {
			x: 490,
			y: 466,
			size: 10
		});
		firstPage.drawText(String(skillRows[10].abilityMod), {
			x: 522,
			y: 466,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 466,
			size: 10
		});

		// Fly
		firstPage.drawText(skillRows[11].isClassSkill ? "X" : "", {
			x: 319,
			y: 453,
			size: 6
		});
		firstPage.drawText(String(skillRows[11].total), {
			x: 443,
			y: 455,
			size: 10
		});
		firstPage.drawText(String(skillRows[11].ranks), {
			x: 490,
			y: 455,
			size: 10
		});
		firstPage.drawText(String(skillRows[11].abilityMod), {
			x: 522,
			y: 455,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 455,
			size: 10
		});

		// Handle Animal
		firstPage.drawText(skillRows[12].isClassSkill ? "X" : "", {
			x: 319,
			y: 442,
			size: 6
		});
		firstPage.drawText(String(skillRows[12].total), {
			x: 443,
			y: 443,
			size: 10
		});
		firstPage.drawText(String(skillRows[12].ranks), {
			x: 490,
			y: 443,
			size: 10
		});
		firstPage.drawText(String(skillRows[12].abilityMod), {
			x: 522,
			y: 443,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 443,
			size: 10
		});

		// Heal
		firstPage.drawText(skillRows[13].isClassSkill ? "X" : "", {
			x: 319,
			y: 430,
			size: 6
		});
		firstPage.drawText(String(skillRows[13].total), {
			x: 443,
			y: 431,
			size: 10
		});
		firstPage.drawText(String(skillRows[13].ranks), {
			x: 490,
			y: 431,
			size: 10
		});
		firstPage.drawText(String(skillRows[13].abilityMod), {
			x: 522,
			y: 431,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 431,
			size: 10
		});

		// Intimidate
		firstPage.drawText(skillRows[14].isClassSkill ? "X" : "", {
			x: 319,
			y: 419,
			size: 6
		});
		firstPage.drawText(String(skillRows[14].total), {
			x: 443,
			y: 420,
			size: 10
		});
		firstPage.drawText(String(skillRows[14].ranks), {
			x: 490,
			y: 420,
			size: 10
		});
		firstPage.drawText(String(skillRows[14].abilityMod), {
			x: 522,
			y: 420,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 420,
			size: 10
		});

		// Knowledge Arcana
		firstPage.drawText(skillRows[15].isClassSkill ? "X" : "", {
			x: 319,
			y: 408,
			size: 6
		});
		firstPage.drawText(String(skillRows[15].total), {
			x: 443,
			y: 409,
			size: 10
		});
		firstPage.drawText(String(skillRows[15].ranks), {
			x: 490,
			y: 409,
			size: 10
		});
		firstPage.drawText(String(skillRows[15].abilityMod), {
			x: 522,
			y: 409,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 409,
			size: 10
		});

		// Knowledge Dungeoneering
		firstPage.drawText(skillRows[16].isClassSkill ? "X" : "", {
			x: 319,
			y: 397,
			size: 6
		});
		firstPage.drawText(String(skillRows[16].total), {
			x: 443,
			y: 397,
			size: 10
		});
		firstPage.drawText(String(skillRows[16].ranks), {
			x: 490,
			y: 397,
			size: 10
		});
		firstPage.drawText(String(skillRows[16].abilityMod), {
			x: 522,
			y: 397,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 397,
			size: 10
		});

		// Knowledge Engineering
		firstPage.drawText(skillRows[17].isClassSkill ? "X" : "", {
			x: 319,
			y: 386,
			size: 6
		});
		firstPage.drawText(String(skillRows[17].total), {
			x: 443,
			y: 386,
			size: 10
		});
		firstPage.drawText(String(skillRows[17].ranks), {
			x: 490,
			y: 386,
			size: 10
		});
		firstPage.drawText(String(skillRows[17].abilityMod), {
			x: 522,
			y: 386,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 386,
			size: 10
		});

		// Knowledge Geography
		firstPage.drawText(skillRows[18].isClassSkill ? "X" : "", {
			x: 319,
			y: 374,
			size: 6
		});
		firstPage.drawText(String(skillRows[18].total), {
			x: 443,
			y: 374,
			size: 10
		});
		firstPage.drawText(String(skillRows[18].ranks), {
			x: 490,
			y: 374,
			size: 10
		});
		firstPage.drawText(String(skillRows[18].abilityMod), {
			x: 522,
			y: 374,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 374,
			size: 10
		});

		// Knowledge History
		firstPage.drawText(skillRows[19].isClassSkill ? "X" : "", {
			x: 319,
			y: 362,
			size: 6
		});
		firstPage.drawText(String(skillRows[19].total), {
			x: 443,
			y: 362,
			size: 10
		});
		firstPage.drawText(String(skillRows[19].ranks), {
			x: 490,
			y: 362,
			size: 10
		});
		firstPage.drawText(String(skillRows[19].abilityMod), {
			x: 522,
			y: 362,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 362,
			size: 10
		});

		// Knowledge Local
		firstPage.drawText(skillRows[20].isClassSkill ? "X" : "", {
			x: 319,
			y: 351,
			size: 6
		});
		firstPage.drawText(String(skillRows[20].total), {
			x: 443,
			y: 351,
			size: 10
		});
		firstPage.drawText(String(skillRows[20].ranks), {
			x: 490,
			y: 351,
			size: 10
		});
		firstPage.drawText(String(skillRows[20].abilityMod), {
			x: 522,
			y: 351,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 351,
			size: 10
		});

		// Knowledge Nature
		firstPage.drawText(skillRows[21].isClassSkill ? "X" : "", {
			x: 319,
			y: 340,
			size: 6
		});
		firstPage.drawText(String(skillRows[21].total), {
			x: 443,
			y: 340,
			size: 10
		});
		firstPage.drawText(String(skillRows[21].ranks), {
			x: 490,
			y: 340,
			size: 10
		});
		firstPage.drawText(String(skillRows[21].abilityMod), {
			x: 522,
			y: 340,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 340,
			size: 10
		});

		// Knowledge Nobility
		firstPage.drawText(skillRows[22].isClassSkill ? "X" : "", {
			x: 319,
			y: 329,
			size: 6
		});
		firstPage.drawText(String(skillRows[22].total), {
			x: 443,
			y: 329,
			size: 10
		});
		firstPage.drawText(String(skillRows[22].ranks), {
			x: 490,
			y: 329,
			size: 10
		});
		firstPage.drawText(String(skillRows[22].abilityMod), {
			x: 522,
			y: 329,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 329,
			size: 10
		});

		// Knowledge Planes
		firstPage.drawText(skillRows[23].isClassSkill ? "X" : "", {
			x: 319,
			y: 317,
			size: 6
		});
		firstPage.drawText(String(skillRows[23].total), {
			x: 443,
			y: 317,
			size: 10
		});
		firstPage.drawText(String(skillRows[23].ranks), {
			x: 490,
			y: 317,
			size: 10
		});
		firstPage.drawText(String(skillRows[23].abilityMod), {
			x: 522,
			y: 317,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 317,
			size: 10
		});

		// Knowledge Religion
		firstPage.drawText(skillRows[24].isClassSkill ? "X" : "", {
			x: 319,
			y: 306,
			size: 6
		});
		firstPage.drawText(String(skillRows[24].total), {
			x: 443,
			y: 306,
			size: 10
		});
		firstPage.drawText(String(skillRows[24].ranks), {
			x: 490,
			y: 306,
			size: 10
		});
		firstPage.drawText(String(skillRows[24].abilityMod), {
			x: 522,
			y: 306,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 306,
			size: 10
		});

		// Linguistics
		firstPage.drawText(skillRows[25].isClassSkill ? "X" : "", {
			x: 319,
			y: 294,
			size: 6
		});
		firstPage.drawText(String(skillRows[25].total), {
			x: 443,
			y: 294,
			size: 10
		});
		firstPage.drawText(String(skillRows[25].ranks), {
			x: 490,
			y: 294,
			size: 10
		});
		firstPage.drawText(String(skillRows[25].abilityMod), {
			x: 522,
			y: 294,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 294,
			size: 10
		});

		// Perception
		firstPage.drawText(skillRows[26].isClassSkill ? "X" : "", {
			x: 319,
			y: 283,
			size: 6
		});
		firstPage.drawText(String(skillRows[26].total), {
			x: 443,
			y: 283,
			size: 10
		});
		firstPage.drawText(String(skillRows[26].ranks), {
			x: 490,
			y: 283,
			size: 10
		});
		firstPage.drawText(String(skillRows[26].abilityMod), {
			x: 522,
			y: 283,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 283,
			size: 10
		});

		// Perform 1
		firstPage.drawText(skillRows[27].isClassSkill ? "X" : "", {
			x: 319,
			y: 272,
			size: 6
		});
		firstPage.drawText(String(skillRows[27].total), {
			x: 443,
			y: 272,
			size: 10
		});
		firstPage.drawText(String(skillRows[27].ranks), {
			x: 490,
			y: 272,
			size: 10
		});
		firstPage.drawText(String(skillRows[27].abilityMod), {
			x: 522,
			y: 272,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 272,
			size: 10
		});

		// Perform 2
		firstPage.drawText(skillRows[28].isClassSkill ? "X" : "", {
			x: 319,
			y: 260,
			size: 6
		});
		firstPage.drawText(String(skillRows[28].total), {
			x: 443,
			y: 260,
			size: 10
		});
		firstPage.drawText(String(skillRows[28].ranks), {
			x: 490,
			y: 260,
			size: 10
		});
		firstPage.drawText(String(skillRows[28].abilityMod), {
			x: 522,
			y: 260,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 260,
			size: 10
		});

		// Profession 1
		firstPage.drawText(skillRows[29].isClassSkill ? "X" : "", {
			x: 319,
			y: 249,
			size: 6
		});
		firstPage.drawText(String(skillRows[29].total), {
			x: 443,
			y: 249,
			size: 10
		});
		firstPage.drawText(String(skillRows[29].ranks), {
			x: 490,
			y: 249,
			size: 10
		});
		firstPage.drawText(String(skillRows[29].abilityMod), {
			x: 522,
			y: 249,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 249,
			size: 10
		});

		// Profession 2
		firstPage.drawText(skillRows[30].isClassSkill ? "X" : "", {
			x: 319,
			y: 238,
			size: 6
		});
		firstPage.drawText(String(skillRows[30].total), {
			x: 443,
			y: 238,
			size: 10
		});
		firstPage.drawText(String(skillRows[30].ranks), {
			x: 490,
			y: 238,
			size: 10
		});
		firstPage.drawText(String(skillRows[30].abilityMod), {
			x: 522,
			y: 238,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 238,
			size: 10
		});

		// Ride
		firstPage.drawText(skillRows[31].isClassSkill ? "X" : "", {
			x: 319,
			y: 226,
			size: 6
		});
		firstPage.drawText(String(skillRows[31].total), {
			x: 443,
			y: 226,
			size: 10
		});
		firstPage.drawText(String(skillRows[31].ranks), {
			x: 490,
			y: 226,
			size: 10
		});
		firstPage.drawText(String(skillRows[31].abilityMod), {
			x: 522,
			y: 226,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 226,
			size: 10
		});

		// Sense Motive
		firstPage.drawText(skillRows[32].isClassSkill ? "X" : "", {
			x: 319,
			y: 215,
			size: 6
		});
		firstPage.drawText(String(skillRows[32].total), {
			x: 443,
			y: 215,
			size: 10
		});
		firstPage.drawText(String(skillRows[32].ranks), {
			x: 490,
			y: 215,
			size: 10
		});
		firstPage.drawText(String(skillRows[32].abilityMod), {
			x: 522,
			y: 215,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 215,
			size: 10
		});

		// Sleight of Hand
		firstPage.drawText(skillRows[33].isClassSkill ? "X" : "", {
			x: 319,
			y: 204,
			size: 6
		});
		firstPage.drawText(String(skillRows[33].total), {
			x: 443,
			y: 204,
			size: 10
		});
		firstPage.drawText(String(skillRows[33].ranks), {
			x: 490,
			y: 204,
			size: 10
		});
		firstPage.drawText(String(skillRows[33].abilityMod), {
			x: 522,
			y: 204,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 204,
			size: 10
		});

		// Spellcraft
		firstPage.drawText(skillRows[34].isClassSkill ? "X" : "", {
			x: 319,
			y: 192,
			size: 6
		});
		firstPage.drawText(String(skillRows[34].total), {
			x: 443,
			y: 192,
			size: 10
		});
		firstPage.drawText(String(skillRows[34].ranks), {
			x: 490,
			y: 192,
			size: 10
		});
		firstPage.drawText(String(skillRows[34].abilityMod), {
			x: 522,
			y: 192,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 192,
			size: 10
		});

		// Stealth 
		firstPage.drawText(skillRows[35].isClassSkill ? "X" : "", {
			x: 319,
			y: 180,
			size: 6
		});
		firstPage.drawText(String(skillRows[35].total), {
			x: 443,
			y: 180,
			size: 10
		});
		firstPage.drawText(String(skillRows[35].ranks), {
			x: 490,
			y: 180,
			size: 10
		});
		firstPage.drawText(String(skillRows[35].abilityMod), {
			x: 522,
			y: 180,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 180,
			size: 10
		});

		// Survival 
		firstPage.drawText(skillRows[36].isClassSkill ? "X" : "", {
			x: 319,
			y: 169,
			size: 6
		});
		firstPage.drawText(String(skillRows[36].total), {
			x: 443,
			y: 169,
			size: 10
		});
		firstPage.drawText(String(skillRows[36].ranks), {
			x: 490,
			y: 169,
			size: 10
		});
		firstPage.drawText(String(skillRows[36].abilityMod), {
			x: 522,
			y: 169,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 169,
			size: 10
		});

		// Swim 
		firstPage.drawText(skillRows[37].isClassSkill ? "X" : "", {
			x: 319,
			y: 158,
			size: 6
		});
		firstPage.drawText(String(skillRows[37].total), {
			x: 443,
			y: 157,
			size: 10
		});
		firstPage.drawText(String(skillRows[37].ranks), {
			x: 490,
			y: 157,
			size: 10
		});
		firstPage.drawText(String(skillRows[37].abilityMod), {
			x: 522,
			y: 157,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 157,
			size: 10
		});

		// Use Magic Device 
		firstPage.drawText(skillRows[38].isClassSkill ? "X" : "", {
			x: 319,
			y: 147,
			size: 6
		});
		firstPage.drawText(String(skillRows[38].total), {
			x: 443,
			y: 146,
			size: 10
		});
		firstPage.drawText(String(skillRows[38].ranks), {
			x: 490,
			y: 146,
			size: 10
		});
		firstPage.drawText(String(skillRows[38].abilityMod), {
			x: 522,
			y: 146,
			size: 10
		});
		firstPage.drawText("", {
			x: 552,
			y: 146,
			size: 10
		});


		// #endregion Skills

		// Languages
		firstPage.drawText("Common", {
			x: 322,
			y: 75,
			size: 10
		});

		// #endregion Page 1

		// #region Page 2

		// #region AC Items
		secondPage.drawText("Item 1", {
			x: 40,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 710,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 710,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 710,
			size: 14
		});

		secondPage.drawText("Item 2", {
			x: 40,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 690,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 690,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 690,
			size: 14
		});

		secondPage.drawText("Item 3", {
			x: 40,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 672,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 672,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 672,
			size: 14
		});

		secondPage.drawText("Item 4", {
			x: 40,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 654,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 654,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 654,
			size: 14
		});

		secondPage.drawText("Item 5", {
			x: 40,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 636,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 636,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 636,
			size: 14
		});

		// KNOWN BUG (pre-existing, out of scope for this phase): this 6th row is missing its
		// "Item N" name draw (present on all 5 rows above) — fix when this region gets real data.
		secondPage.drawText("0", {
			x: 160,
			y: 618,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 618,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 618,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 618,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 618,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 618,
			size: 14
		});

		// #endregion AC Items

		// #region Gear
		const gearItems = character.equipment.selected.map((item) => {
			const equipmentItem = equipmentData.find((e) => e.name === item.name);
			const itemWeight = parseWeightToLbs(equipmentItem?.weight) * item.quantity;
			return {
				name: item.quantity > 1 ? `${item.name} (x${item.quantity})` : item.name,
				weight: itemWeight,
			};
		});
		const gearRowPositions = [
			570, 556, 542, 526, 510, 497, 482, 468, 454, 440, 426, 410, 396, 380, 366,
			352, 338, 324, 310, 294, 278, 264, 250, 236, 222, 208,
		];
		gearRowPositions.forEach((nameY, index) => {
			const gearItem = gearItems[index];
			secondPage.drawText(gearItem?.name || "", {
				x: 40,
				y: nameY,
				size: 12
			});
			secondPage.drawText(gearItem ? `${Math.round(gearItem.weight * 100) / 100}` : "", {
				x: 152,
				y: nameY + 2,
				size: 8
			});
		});

		// Total Weight
		const totalGearWeight = gearItems.reduce((sum, item) => sum + item.weight, 0);
		secondPage.drawText(`${Math.round(totalGearWeight * 100) / 100}`, {
			x: 152,
			y: 196,
			size: 8
		});

		// Move amounts
		secondPage.drawText("Light", {
			x: 73,
			y: 174,
			size: 8
		});
		secondPage.drawText("Head", {
			x: 144,
			y: 174,
			size: 8
		});
		secondPage.drawText("Med", {
			x: 73,
			y: 155,
			size: 8
		});
		secondPage.drawText("Ground", {
			x: 144,
			y: 155,
			size: 8
		});
		secondPage.drawText("Heavy", {
			x: 73,
			y: 137,
			size: 8
		});
		secondPage.drawText("Drag", {
			x: 144,
			y: 137,
			size: 8
		});

		// Money
		secondPage.drawText("Copper", {
			x: 60,
			y: 101,
			size: 8
		});
		secondPage.drawText("Silver", {
			x: 60,
			y: 87,
			size: 8
		});
		const totalSpentGold = character.equipment.selected.reduce((sum, item) => {
			const equipmentItem = equipmentData.find((e) => e.name === item.name);
			return sum + parseCostToGold(equipmentItem?.cost) * item.quantity;
		}, 0);
		const remainingGold = character.equipment.gold === '' ? '' : character.equipment.gold - totalSpentGold;
		secondPage.drawText(remainingGold === '' ? '' : `${Math.round(remainingGold * 100) / 100}`, {
			x: 60,
			y: 73,
			size: 8
		});
		secondPage.drawText("Platinum", {
			x: 60,
			y: 58,
			size: 8
		});

		// #endregion Gear

		// #region Feats

		const featPositions = [575, 560, 545, 530, 515, 500, 486, 472, 457, 442, 428, 413];

		featPositions.forEach((y, index) => {
			secondPage.drawText(character.feats.selected[index] || "", {
				x: 190,
				y,
				size: 12
			});
		});

		// #endregion Feats

		// #region Special Abilities

		const currentClassData = classesData[character.classInfo.className];
		const currentLevel = Number(character.classInfo.level) || 1;
		const specialAbilityNames = currentClassData
			? currentClassData.specialByLevel.slice(0, currentLevel)
			: [];

		const specialAbilityPositions = [
			370, 355, 341, 326, 311, 297, 282, 268, 253, 238,
			224, 210, 195, 180, 165, 150, 136, 121, 107, 92,
		];

		// Long entries (e.g. a level-1 Cleric's "Aura, channel energy 1d6, domains, orisons,
		// spontaneous casting") would otherwise run past the column and bleed into the Spells
		// section, so wrap by real rendered width and let overflow push later rows down a line.
		const specialAbilityMaxWidth = 220;
		const specialAbilityLines = wrapEntriesToLines(
			helveticaFont, specialAbilityNames, 12, specialAbilityMaxWidth
		);

		specialAbilityPositions.forEach((y, index) => {
			secondPage.drawText(specialAbilityLines[index] || "", {
				x: 190,
				y,
				size: 12
			});
		});

		// #endregion Special Abilities

		// #region Spells

		// #region Spell stats

		// level 0
		secondPage.drawText("0", {
			x: 436,
			y: 689,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 689,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 689,
			size: 12
		});

		// level 1
		secondPage.drawText("0", {
			x: 436,
			y: 673,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 673,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 673,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 673,
			size: 12
		});

		// level 2
		secondPage.drawText("0", {
			x: 436,
			y: 654,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 654,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 654,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 654,
			size: 12
		});

		// level 3
		secondPage.drawText("0", {
			x: 436,
			y: 638,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 638,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 638,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 638,
			size: 12
		});

		// level 4
		secondPage.drawText("0", {
			x: 436,
			y: 620,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 620,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 620,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 620,
			size: 12
		});

		// level 5
		secondPage.drawText("0", {
			x: 436,
			y: 603,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 603,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 603,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 603,
			size: 12
		});

		// level 6
		secondPage.drawText("0", {
			x: 436,
			y: 585,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 585,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 585,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 585,
			size: 12
		});

		// level 7
		secondPage.drawText("0", {
			x: 436,
			y: 568,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 568,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 568,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 568,
			size: 12
		});

		// level 8
		secondPage.drawText("0", {
			x: 436,
			y: 550,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 550,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 550,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 550,
			size: 12
		});

		// level 9
		secondPage.drawText("0", {
			x: 436,
			y: 534,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 534,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 534,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 534,
			size: 12
		});

		// #endregion Spell stats

		// #region Spell list

		// Level 0
		secondPage.drawText("Spell", {
			x: 436,
			y: 456,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 449,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 442,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 435,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 428,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 421,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 414,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 407,
			size: 8
		});

		// Level 1
		secondPage.drawText("Spell", {
			x: 436,
			y: 393,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 386,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 380,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 373,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 366,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 359,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 352,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 345,
			size: 8
		});

		// Level 2
		secondPage.drawText("Spell", {
			x: 436,
			y: 330,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 323,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 316,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 309,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 303,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 296,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 289,
			size: 8
		});

		// Level 3
		secondPage.drawText("Spell", {
			x: 436,
			y: 275,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 268,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 261,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 255,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 248,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 241,
			size: 8
		});

		// Level 4
		secondPage.drawText("Spell", {
			x: 436,
			y: 227,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 220,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 213,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 206,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 199,
			size: 8
		});

		// Level 5
		secondPage.drawText("Spell", {
			x: 436,
			y: 186,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 179,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 172,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 165,
			size: 8
		});

		// Level 6
		secondPage.drawText("Spell", {
			x: 436,
			y: 152,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 145,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 138,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 131,
			size: 8
		});

		// Level 7
		secondPage.drawText("Spell", {
			x: 436,
			y: 117,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 110,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 103,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 97,
			size: 8
		});

		// Level 8
		secondPage.drawText("Spell", {
			x: 436,
			y: 83,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 76,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 69,
			size: 8
		});

		// Level 9
		secondPage.drawText("Spell", {
			x: 436,
			y: 55,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 47,
			size: 8
		});

		// #endregion Spell list

		// #endregion Spells

		// #endregion Page 2

		// Flatten the form to prevent further edits
		form.flatten();

		// Serialize PDF
		const pdfBytes = await pdfDoc.save();

		// Convert to Blob and create a URL
		const blob = new Blob([pdfBytes], { type: "application/pdf" });
		const pdfUrl = URL.createObjectURL(blob);
		setPdfUrl(pdfUrl);
	};

	useEffect(() => {
		fillPdf();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Finalize')}
				title="Finalize"
				subtitle="Your character sheet, filled out automatically from everything you've entered."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3 }}>
					{pdfUrl ? (
						<Box sx={{ border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 2, overflow: 'hidden' }}>
							<iframe
								src={pdfUrl}
								width="100%"
								height="700px"
								style={{ border: 'none', display: 'block' }}
								title="Filled PDF"
							/>
						</Box>
					) : (
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: 6 }}>
							<CircularProgress size={32} />
							<Typography variant="body2" sx={{ color: 'text.secondary' }}>
								Generating character sheet...
							</Typography>
						</Box>
					)}
				</CardContent>
			</Card>
		</>
	);
};

export default PdfEditor;
