const fighter = {
	"name": "Fighter",
	"edition": "2024",
	"hitDie": 10,
	"primaryAbility": [
		"Strength",
		"Dexterity"
	],
	"suggestedAbilities": "Strength or Dexterity",
	"savingThrows": [
		"Strength",
		"Constitution"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"Acrobatics",
			"Animal Handling",
			"Athletics",
			"History",
			"Insight",
			"Intimidation",
			"Persuasion",
			"Perception",
			"Survival"
		],
		"raw": "Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, or Survival"
	},
	"armorProficiencies": "Light, Medium, and Heavy armor and Shields",
	"weaponProficiencies": "Simple and Martial weapons",
	"toolProficiencies": "None",
	"startingEquipmentRaw": "Choose A, B, or C: (A) Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer’s Pack, and 4 GP; (B) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer’s Pack, and 11 GP; or (C) 155 GP",
	"startingEquipment": [
		"(A) Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer’s Pack, and 4 GP",
		"(B) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer’s Pack, and 11 GP",
		"(C) 155 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Fighter",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Second Wind",
			"Weapon Mastery"
		],
		"rows": [
			[
				"1",
				"+2",
				"Fighting Style, Second Wind, Weapon Mastery",
				"2",
				"3"
			],
			[
				"2",
				"+2",
				"Action Surge (one use), Tactical Mind",
				"2",
				"3"
			],
			[
				"3",
				"+2",
				"Fighter Subclass",
				"2",
				"3"
			],
			[
				"4",
				"+2",
				"Ability Score Improvement",
				"3",
				"4"
			],
			[
				"5",
				"+3",
				"Extra Attack, Tactical Shift",
				"3",
				"4"
			],
			[
				"6",
				"+3",
				"Ability Score Improvement",
				"3",
				"4"
			],
			[
				"7",
				"+3",
				"Subclass feature",
				"3",
				"4"
			],
			[
				"8",
				"+3",
				"Ability Score Improvement",
				"3",
				"4"
			],
			[
				"9",
				"+4",
				"Indomitable (one use), Tactical Master",
				"3",
				"4"
			],
			[
				"10",
				"+4",
				"Subclass feature",
				"4",
				"5"
			],
			[
				"11",
				"+4",
				"Two Extra Attacks",
				"4",
				"5"
			],
			[
				"12",
				"+4",
				"Ability Score Improvement",
				"4",
				"5"
			],
			[
				"13",
				"+5",
				"Indomitable (two uses), Studied Attacks",
				"4",
				"5"
			],
			[
				"14",
				"+5",
				"Ability Score Improvement",
				"4",
				"5"
			],
			[
				"15",
				"+5",
				"Subclass feature",
				"4",
				"5"
			],
			[
				"16",
				"+5",
				"Ability Score Improvement",
				"4",
				"6"
			],
			[
				"17",
				"+6",
				"Action Surge (two uses), Indomitable (three uses)",
				"4",
				"6"
			],
			[
				"18",
				"+6",
				"Subclass feature",
				"4",
				"6"
			],
			[
				"19",
				"+6",
				"Epic Boon",
				"4",
				"6"
			],
			[
				"20",
				"+6",
				"Three Extra Attacks",
				"4",
				"6"
			]
		]
	},
	"features": [
		{
			"name": "Fighting Style",
			"level": 1,
			"headingLevel": 3,
			"description": "You have honed your martial prowess and gain a Fighting Style feat of your choice (see \"Feats\"). Defense is\nrecommended.\nWhenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat."
		},
		{
			"name": "Second Wind",
			"level": 1,
			"headingLevel": 3,
			"description": "You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to\nregain Hit Points equal to 1d10 plus your Fighter level.\nYou can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended\nuses when you finish a Long Rest.\nWhen you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the\nFighter Features table."
		},
		{
			"name": "Weapon Mastery",
			"level": 1,
			"headingLevel": 3,
			"description": "Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of\nyour choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon\nchoices.\nWhen you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons,\nas shown in the Weapon Mastery column of the Fighter Features table."
		},
		{
			"name": "Action Surge",
			"level": 2,
			"headingLevel": 3,
			"description": "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action,\nexcept the Magic action.\nOnce you use this feature, you can’t do so again until you finish a Short or Long Rest. Starting at level 17, you can\nuse it twice before a rest but only once on a turn."
		},
		{
			"name": "Tactical Mind",
			"level": 2,
			"headingLevel": 3,
			"description": "You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your\nSecond Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled\nto the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn’t\nexpended."
		},
		{
			"name": "Fighter Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Fighter subclass of your choice. The Champion subclass is detailed after this class’s description. A subclass is a specialization that grants you features at certain\nFighter levels. For the rest of your career, you gain each of your subclass’s features that are of your Fighter level\nor lower."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You\ngain this feature again at Fighter levels 6, 8, 12, 14, and 16."
		},
		{
			"name": "Extra Attack",
			"level": 5,
			"headingLevel": 3,
			"description": "You can attack twice instead of once whenever you take the Attack action on your turn."
		},
		{
			"name": "Tactical Shift",
			"level": 5,
			"headingLevel": 3,
			"description": "Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking\nOpportunity Attacks."
		},
		{
			"name": "Indomitable",
			"level": 9,
			"headingLevel": 3,
			"description": "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll,\nand you can’t use this feature again until you finish a Long Rest.\nYou can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at\nlevel 17."
		},
		{
			"name": "Tactical Master",
			"level": 9,
			"headingLevel": 3,
			"description": "When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap,\nor Slow property for that attack."
		},
		{
			"name": "Two Extra Attacks",
			"level": 11,
			"headingLevel": 3,
			"description": "You can attack three times instead of once whenever you take the Attack action on your turn."
		},
		{
			"name": "Studied Attacks",
			"level": 13,
			"headingLevel": 3,
			"description": "You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss,\nyou have Advantage on your next attack roll against that creature before the end of your next turn."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Combat\nProwess is recommended."
		},
		{
			"name": "Three Extra Attacks",
			"level": 20,
			"headingLevel": 3,
			"description": "You can attack four times instead of once whenever you take the Attack action on your turn."
		}
	],
	"spellList": {},
	"spellcastingAbility": ""
};

export default fighter;
