const barbarian = {
	"name": "Barbarian",
	"edition": "2024",
	"hitDie": 12,
	"primaryAbility": [
		"Strength"
	],
	"suggestedAbilities": "Strength",
	"savingThrows": [
		"Strength",
		"Constitution"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"Animal Handling",
			"Athletics",
			"Intimidation",
			"Nature",
			"Perception",
			"Survival"
		],
		"raw": "Choose 2: Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival"
	},
	"armorProficiencies": "Light and Medium armor and Shields",
	"weaponProficiencies": "Simple and Martial weapons",
	"toolProficiencies": "None",
	"startingEquipmentRaw": "Choose A or B: (A) Greataxe, 4 Handaxes, Explorer’s Pack, and 15 GP; or (B) 75 GP",
	"startingEquipment": [
		"(A) Greataxe, 4 Handaxes, Explorer’s Pack, and 15 GP",
		"(B) 75 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Barbarian",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Rages",
			"Rage Damage",
			"Weapon Mastery"
		],
		"rows": [
			[
				"1",
				"+2",
				"Rage, Unarmored Defense, Weapon Mastery",
				"2",
				"+2",
				"2"
			],
			[
				"2",
				"+2",
				"Danger Sense, Reckless Attack",
				"2",
				"+2",
				"2"
			],
			[
				"3",
				"+2",
				"Barbarian Subclass, Primal Knowledge",
				"3",
				"+2",
				"2"
			],
			[
				"4",
				"+2",
				"Ability Score Improvement",
				"3",
				"+2",
				"3"
			],
			[
				"5",
				"+3",
				"Extra Attack, Fast Movement",
				"3",
				"+2",
				"3"
			],
			[
				"6",
				"+3",
				"Subclass feature",
				"4",
				"+2",
				"3"
			],
			[
				"7",
				"+3",
				"Feral Instinct, Instinctive Pounce",
				"4",
				"+2",
				"3"
			],
			[
				"8",
				"+3",
				"Ability Score Improvement",
				"4",
				"+2",
				"3"
			],
			[
				"9",
				"+4",
				"Brutal Strike",
				"4",
				"+3",
				"3"
			],
			[
				"10",
				"+4",
				"Subclass feature",
				"4",
				"+3",
				"4"
			],
			[
				"11",
				"+4",
				"Relentless Rage",
				"4",
				"+3",
				"4"
			],
			[
				"12",
				"+4",
				"Ability Score Improvement",
				"5",
				"+3",
				"4"
			],
			[
				"13",
				"+5",
				"Improved Brutal Strike",
				"5",
				"+3",
				"4"
			],
			[
				"14",
				"+5",
				"Subclass feature",
				"5",
				"+3",
				"4"
			],
			[
				"15",
				"+5",
				"Persistent Rage",
				"5",
				"+3",
				"4"
			],
			[
				"16",
				"+5",
				"Ability Score Improvement",
				"5",
				"+4",
				"4"
			],
			[
				"17",
				"+6",
				"Improved Brutal Strike",
				"6",
				"+4",
				"4"
			],
			[
				"18",
				"+6",
				"Indomitable Might",
				"6",
				"+4",
				"4"
			],
			[
				"19",
				"+6",
				"Epic Boon",
				"6",
				"+4",
				"4"
			],
			[
				"20",
				"+6",
				"Primal Champion",
				"6",
				"+4",
				"4"
			]
		]
	},
	"features": [
		{
			"name": "Rage",
			"level": 1,
			"headingLevel": 3,
			"description": "You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and\nresilience. You can enter it as a Bonus Action if you aren’t wearing Heavy armor.\nYou can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian\nFeatures table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you\nfinish a Long Rest.\nWhile active, your Rage follows the rules below.\nDamage Resistance. You have Resistance to Bludgeoning, Piercing, and Slashing damage.\nRage Damage. When you make an attack using Strength—with either a weapon or an Unarmed\nStrike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a\nBarbarian, as shown in the Rage Damage column of the Barbarian Features table.\nStrength Advantage. You have Advantage on Strength checks and Strength saving throws.\nNo Concentration or Spells. You can’t maintain Concentration, and you can’t cast\nspells.\nDuration. The Rage lasts until the end of your next turn, and it ends early if you don\nHeavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the\nRage for another round by doing one of the following:\n• Make an attack roll against an enemy.\n• Force an enemy to make a saving throw.\n• Take a Bonus Action to extend your Rage.\nEach time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10\nminutes."
		},
		{
			"name": "Unarmored Defense",
			"level": 1,
			"headingLevel": 3,
			"description": "While you aren’t wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers.\nYou can use a Shield and still gain this benefit."
		},
		{
			"name": "Weapon Mastery",
			"level": 1,
			"headingLevel": 3,
			"description": "Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons\nof your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and\nchange one of those weapon choices.\nWhen you reach certain Barbarian levels, you gain the ability to use the mastery properties of more kinds of weapons,\nas shown in the Weapon Mastery column of the Barbarian Features table."
		},
		{
			"name": "Danger Sense",
			"level": 2,
			"headingLevel": 3,
			"description": "You gain an uncanny sense of when things aren’t as they should be, giving you an edge when you dodge perils. You have\nAdvantage on Dexterity saving throws unless you have the Incapacitated condition."
		},
		{
			"name": "Reckless Attack",
			"level": 2,
			"headingLevel": 3,
			"description": "You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll\non your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until\nthe start of your next turn, but attack rolls against you have Advantage during that time."
		},
		{
			"name": "Barbarian Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Barbarian subclass of your choice. The Path of the Berserker is detailed after this class’s description. A subclass is a specialization\nthat grants you features at certain Barbarian levels. For the rest of your career, you gain each of your subclass’s\nfeatures that are of your Barbarian level or lower."
		},
		{
			"name": "Primal Knowledge",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1.\nIn addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you\nmake an ability check using one of the following skills, you can make it as a Strength check even if it normally\nuses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability,\nyour Strength represents primal power coursing through you, honing your agility, bearing, and senses."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You\ngain this feature again at Barbarian levels 8, 12, and 16."
		},
		{
			"name": "Extra Attack",
			"level": 5,
			"headingLevel": 3,
			"description": "You can attack twice instead of once whenever you take the Attack action on your turn."
		},
		{
			"name": "Fast Movement",
			"level": 5,
			"headingLevel": 3,
			"description": "Your speed increases by 10 feet while you aren’t wearing Heavy armor."
		},
		{
			"name": "Feral Instinct",
			"level": 7,
			"headingLevel": 3,
			"description": "Your instincts are so honed that you have Advantage on Initiative rolls."
		},
		{
			"name": "Instinctive Pounce",
			"level": 7,
			"headingLevel": 3,
			"description": "As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed."
		},
		{
			"name": "Brutal Strike",
			"level": 9,
			"headingLevel": 3,
			"description": "If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your\nturn. The chosen attack roll mustn’t have Disadvantage. If the chosen attack roll hits, the target takes an extra\n1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of\nyour choice. You have the following effect options.\nForceful Blow. The target is pushed 15 feet straight away from you. You can then move\nup to half your Speed straight toward the target without provoking Opportunity Attacks.\nHamstring Blow. The target’s Speed is reduced by 15 feet until the start of your next\nturn. A target can be affected by only one Hamstring Blow at a time—the most recent one."
		},
		{
			"name": "Relentless Rage",
			"level": 11,
			"headingLevel": 3,
			"description": "Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and\ndon’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, your Hit Points instead change\nto a number equal to twice your Barbarian level.\nEach time you use this feature after the first, the DC increases by 5. When you finish a Short or Long Rest, the DC\nresets to 10."
		},
		{
			"name": "Improved Brutal Strike",
			"level": 13,
			"headingLevel": 3,
			"description": "You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options.\nStaggering Blow. The target has Disadvantage on the next saving throw it makes, and it\ncan’t make Opportunity Attacks until the start of your next turn.\nSundering Blow. Before the start of your next turn, the next attack roll made by\nanother creature against the target gains a +5 bonus to the roll. An attack roll can gain only one Sundering Blow\nbonus."
		},
		{
			"name": "Persistent Rage",
			"level": 15,
			"headingLevel": 3,
			"description": "When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you\ncan’t do so again until you finish a Long Rest.\nIn addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it\nfrom round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated\ncondition) or don Heavy armor."
		},
		{
			"name": "Improved Brutal Strike",
			"level": 17,
			"headingLevel": 3,
			"description": "The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike\neffects whenever you use your Brutal Strike feature."
		},
		{
			"name": "Indomitable Might",
			"level": 18,
			"headingLevel": 3,
			"description": "If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score\nin place of the total."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Irresistible\nOffense is recommended."
		},
		{
			"name": "Primal Champion",
			"level": 20,
			"headingLevel": 3,
			"description": "You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25."
		}
	],
	"spellList": {},
	"spellcastingAbility": ""
};

export default barbarian;
