import { useEffect, useState } from "react";
import { Box, Card, CardContent, CircularProgress, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { PDFDocument, StandardFonts } from "pdf-lib";
import characterSheet from './5E_CharacterSheet_Fillable.pdf';
import characterSheet2024 from './DnD_2024_Character_Sheet.pdf';
import { fillSheet2024 } from './fillSheet2024';
import { useCharacter } from '../../context/CharacterContext';
import PageHeader from '../../components/PageHeader';
import { getStepEyebrow } from '../../data/wizardSteps';
import { ABILITY_KEYS, formatSigned, getModifier } from '../../utils/abilityScore';
import {
	getArmorClass, getAttacks, getBackground, getClass, getClassFeatureNames,
	getFinalAbilities, getHitPoints, getLanguages, getLevel, getProficiencyBonus, getRace,
	getSavingThrows, getSkillBonuses, getSpeed, getSpellSlots, getSpellcastingStats, getSubrace,
	getAbilityMods, getCarriedGold, getOriginFeats,
} from '../../utils/characterCalc';

const SHEET_ABILITY_FIELDS = {
	str: ['STR', 'STRmod'], dex: ['DEX', 'DEXmod '], con: ['CON', 'CONmod'],
	int: ['INT', 'INTmod'], wis: ['WIS', 'WISmod'], cha: ['CHA', 'CHamod'],
};
const SHEET_SAVE_FIELDS = {
	str: ['ST Strength', 'Check Box 11'], dex: ['ST Dexterity', 'Check Box 18'],
	con: ['ST Constitution', 'Check Box 19'], int: ['ST Intelligence', 'Check Box 20'],
	wis: ['ST Wisdom', 'Check Box 21'], cha: ['ST Charisma', 'Check Box 22'],
};
const WEAPON_FIELDS = [
	['Wpn Name', 'Wpn1 AtkBonus', 'Wpn1 Damage'],
	['Wpn Name 2', 'Wpn2 AtkBonus ', 'Wpn2 Damage '],
	['Wpn Name 3', 'Wpn3 AtkBonus  ', 'Wpn3 Damage '],
];
// Spell slot total fields on page 3, in spell-level order (1st through 9th).
const SLOT_TOTAL_FIELDS = [19, 20, 21, 22, 23, 24, 25, 26, 27].map((n) => `SlotsTotal ${n}`);

const PdfEditor = () => {
	const [pdfUrl, setPdfUrl] = useState(null);
	// The 2014 sheet is the default for both editions; either sheet can be filled from any character.
	const [sheet, setSheet] = useState('2014');
	const { character } = useCharacter();

	const fillPdf = async () => {
		if (sheet === '2024') {
			const sheetBytes = await fetch(characterSheet2024).then((res) => res.arrayBuffer());
			const doc = await PDFDocument.load(sheetBytes);
			fillSheet2024(doc, character, await doc.embedFont(StandardFonts.Helvetica));
			const bytes = await doc.save();
			return URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
		}
		const existingPdfBytes = await fetch(characterSheet).then((res) => res.arrayBuffer());
		const pdfDoc = await PDFDocument.load(existingPdfBytes);
		const form = pdfDoc.getForm();

		const setText = (name, value, fontSize) => {
			let field;
			try {
				field = form.getTextField(name);
			} catch (e) {
				console.warn(`Missing PDF field "${name}"`);
				return;
			}
			if (fontSize) {
				// Some sheet fields have no default-appearance string, which setFontSize requires.
				try {
					field.setFontSize(fontSize);
				} catch (e) {
					field.acroField.setDefaultAppearance(`/Helv ${fontSize} Tf 0 g`);
					field.setFontSize(fontSize);
				}
			}
			field.setText(value === undefined || value === null ? '' : String(value));
		};
		const setChecked = (name, checked) => {
			try {
				const box = form.getCheckBox(name);
				if (checked) box.check(); else box.uncheck();
			} catch (e) {
				console.warn(`Missing PDF checkbox "${name}"`);
			}
		};

		const { info, equipment } = character;
		const cls = getClass(character);
		const race = getRace(character);
		const subrace = getSubrace(character);
		const bg = getBackground(character);
		const level = getLevel(character);
		const finals = getFinalAbilities(character);
		const mods = getAbilityMods(character);
		const profBonus = getProficiencyBonus(level);
		const classPicked = !!cls;

		// #region Identity
		setText('CharacterName', info.name);
		setText('CharacterName 2', info.name);
		setText('PlayerName', info.player);
		setText('Alignment', info.alignment);
		setText('ClassLevel', classPicked ? `${cls.name} ${level}` : '');
		setText('Race ', race ? (subrace ? subrace.name : race.name) : '');
		setText('Background', bg ? (bg.name === 'Custom' ? character.background.customName : bg.name) : '');
		setText('PersonalityTraits ', character.background.personalityTraits, 9);
		setText('Ideals', character.background.ideals, 9);
		setText('Bonds', character.background.bonds, 9);
		setText('Flaws', character.background.flaws, 9);
		setText('Age', info.age);
		setText('Height', info.height);
		setText('Weight', info.weight);
		setText('Eyes', info.eyes);
		setText('Skin', info.skin);
		setText('Hair', info.hair);
		setText('Backstory', info.backstory, 9);
		// #endregion Identity

		// #region Abilities, saves and skills
		ABILITY_KEYS.forEach((k) => {
			const [scoreField, modField] = SHEET_ABILITY_FIELDS[k];
			setText(scoreField, finals[k]);
			setText(modField, finals[k] === '' ? '' : formatSigned(getModifier(finals[k])));
		});
		setText('ProfBonus', classPicked ? formatSigned(profBonus) : '');
		getSavingThrows(character).forEach((s) => {
			const [field, box] = SHEET_SAVE_FIELDS[s.key];
			setText(field, finals[s.key] === '' ? '' : formatSigned(s.bonus));
			setChecked(box, classPicked && s.proficient);
		});
		const skillBonuses = getSkillBonuses(character);
		skillBonuses.forEach((s) => {
			setText(s.field, finals[s.ability] === '' ? '' : formatSigned(s.bonus));
			setChecked(s.box, s.proficient);
		});
		const perception = skillBonuses.find((s) => s.key === 'perception');
		setText('Passive', finals.wis === '' ? '' : 10 + perception.bonus);
		// #endregion Abilities, saves and skills

		// #region Combat
		setText('AC', getArmorClass(character));
		setText('Initiative', finals.dex === '' ? '' : formatSigned(mods.dex));
		setText('Speed', getSpeed(character));
		const hp = classPicked ? getHitPoints(character) : '';
		setText('HPMax', hp);
		setText('HPCurrent', hp);
		setText('HDTotal', classPicked ? `${level}d${cls.hitDie}` : '');
		setText('HD', classPicked ? `d${cls.hitDie}` : '');
		getAttacks(character).slice(0, 3).forEach((atk, i) => {
			const [nameField, bonusField, dmgField] = WEAPON_FIELDS[i];
			setText(nameField, atk.name);
			setText(bonusField, atk.attackBonus);
			setText(dmgField, atk.damage, 8);
		});
		// #endregion Combat

		// #region Proficiencies, features and equipment
		const proficiencyLines = [];
		if (cls) {
			proficiencyLines.push(`Armor: ${cls.armorProficiencies}`);
			proficiencyLines.push(`Weapons: ${cls.weaponProficiencies}`);
			proficiencyLines.push(`Tools: ${cls.toolProficiencies}`);
		}
		if (bg?.name === 'Custom' && character.background.customProficiency) {
			proficiencyLines.push(`Background: ${character.background.customProficiency}`);
		}
		proficiencyLines.push(...getLanguages(character).map((l) => `Languages: ${l}`));
		setText('ProficienciesLang', proficiencyLines.join('\n'), 7);

		const featureLines = [];
		if (race) {
			[...race.traits, ...(subrace?.traits || [])].forEach((t) => featureLines.push(`${t.name} (${race.name})`));
		}
		if (cls) {
			getClassFeatureNames(cls, level).forEach((n) => featureLines.push(n));
		}
		if (race?.lineage && character.race.lineage) {
			featureLines.push(`${race.lineage.label}: ${character.race.lineage}`);
		}
		getOriginFeats(character).forEach((f) => featureLines.push(`${f} (feat)`));
		if (bg?.feature?.name) featureLines.push(`${bg.feature.name} (${bg.name})`);
		setText('Features and Traits', featureLines.join(', '), 8);

		const equipmentLines = [];
		if (equipment.armor) equipmentLines.push(equipment.armor);
		if (equipment.shield) equipmentLines.push('Shield');
		equipmentLines.push(...equipment.weapons, ...equipment.gear);
		setText('Equipment', equipmentLines.join(', '), 8);
		setText('GP', getCarriedGold(character));
		// #endregion Proficiencies, features and equipment

		// #region Spellcasting
		const casting = getSpellcastingStats(character);
		if (casting) {
			setText('Spellcasting Class 2', casting.className);
			setText('SpellcastingAbility 2', casting.ability.slice(0, 3).toUpperCase());
			setText('SpellSaveDC  2', casting.saveDc);
			setText('SpellAtkBonus 2', formatSigned(casting.attackBonus));
			const slots = getSpellSlots(character);
			if (slots?.type === 'standard') {
				SLOT_TOTAL_FIELDS.forEach((field, i) => setText(field, slots.slots[i + 1] || ''));
			} else if (slots?.type === 'pact') {
				// Warlock pact slots are all one level; show them on that level's row.
				SLOT_TOTAL_FIELDS.forEach((field, i) => setText(field, i + 1 === slots.level ? slots.count : ''));
			}
		}
		// #endregion Spellcasting

		const pdfBytes = await pdfDoc.save();
		const blob = new Blob([pdfBytes], { type: "application/pdf" });
		return URL.createObjectURL(blob);
	};

	useEffect(() => {
		let cancelled = false;
		let url = null;
		setPdfUrl(null);
		fillPdf().then((result) => {
			url = result;
			if (cancelled) URL.revokeObjectURL(result);
			else setPdfUrl(result);
		});
		return () => {
			cancelled = true;
			if (url) URL.revokeObjectURL(url);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sheet]);

	return (
		<>
			<PageHeader
				eyebrow={getStepEyebrow('Finalize')}
				title="Finalize"
				subtitle="Your character sheet, filled out automatically from everything you've entered."
			/>
			<Card sx={{ backgroundColor: 'background.paper' }}>
				<CardContent sx={{ padding: 3 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', marginBottom: 2 }}>
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>Character sheet</Typography>
						<ToggleButtonGroup
							exclusive
							size="small"
							value={sheet}
							onChange={(_, next) => { if (next) setSheet(next); }}
						>
							<ToggleButton value="2014">2014 sheet</ToggleButton>
							<ToggleButton value="2024">2024 sheet</ToggleButton>
						</ToggleButtonGroup>
					</Box>
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
