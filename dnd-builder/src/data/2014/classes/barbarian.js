const barbarian = {
	"name": "Barbarian",
	"hitDie": 12,
	"startingGold": "2d4 x 10",
	"subclassName": "Primal Path",
	"suggestedAbilities": "Strength, Constitution",
	"primaryAbility": [
		"Strength",
		"Constitution"
	],
	"armorProficiencies": "Light armor, medium armor, shields",
	"weaponProficiencies": "Simple weapons, martial weapons",
	"toolProficiencies": "None",
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
		"raw": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival"
	},
	"startingEquipment": [
		"(a) a greataxe or (b) any martial melee weapon",
		"(a) two handaxes or (b) any simple weapon",
		"An explorer’s pack and four javelins"
	],
	"table": {
		"caption": "The Barbarian",
		"columns": [
			"Level",
			"Proficiency\nBonus",
			"Features",
			"Rages",
			"Rage Damage"
		],
		"rows": [
			[
				"1st",
				"+2",
				"Rage, Unarmored Defense",
				"2",
				"+2"
			],
			[
				"2nd",
				"+2",
				"Reckless Attack, Danger Sense",
				"2",
				"+2"
			],
			[
				"3rd",
				"+2",
				"Primal Path",
				"3",
				"+2"
			],
			[
				"4th",
				"+2",
				"Ability Score Improvement",
				"3",
				"+2"
			],
			[
				"5th",
				"+3",
				"Extra Attack, Fast Movement⁠",
				"3",
				"+2"
			],
			[
				"6th",
				"+3",
				"Path feature",
				"4",
				"+2"
			],
			[
				"7th",
				"+3",
				"Feral Instinct",
				"4",
				"+2"
			],
			[
				"8th",
				"+3",
				"Ability Score Improvement",
				"4",
				"+2"
			],
			[
				"9th",
				"+4",
				"Brutal Critical (1 die)",
				"4",
				"+3"
			],
			[
				"10th",
				"+4",
				"Path feature",
				"4",
				"+3"
			],
			[
				"11th",
				"+4",
				"Relentless⁠ Rage",
				"4",
				"+3"
			],
			[
				"12th",
				"+4",
				"Ability Score Improvement",
				"5",
				"+3"
			],
			[
				"13th",
				"+5",
				"Brutal Critical (2 dice)",
				"5",
				"+3"
			],
			[
				"14th",
				"+5",
				"Path feature",
				"5",
				"+3"
			],
			[
				"15th",
				"+5",
				"Persistent Rage",
				"5",
				"+3"
			],
			[
				"16th",
				"+5",
				"Ability Score Improvement",
				"5",
				"+4"
			],
			[
				"17th",
				"+6",
				"Brutal Critical (3 dice)",
				"6",
				"+4"
			],
			[
				"18th",
				"+6",
				"Indomitable Might",
				"6",
				"+4"
			],
			[
				"19th",
				"+6",
				"Ability Score Improvement",
				"6",
				"+4"
			],
			[
				"20th",
				"+6",
				"Primal Champion⁠",
				"Unlimited",
				"+4"
			]
		]
	},
	"features": [
		{
			"name": "Rage",
			"headingLevel": 2,
			"description": "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\nWhile raging, you gain the following benefits if you aren't wearing heavy armor:\n• You have advantage on Strength checks and Strength saving throws.\n• When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.\n• You have resistance to bludgeoning, piercing, and slashing damage.\nIf you are able to cast spells, you can't cast them or concentrate on them while raging.\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\nOnce you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
		},
		{
			"name": "Unarmored Defense",
			"headingLevel": 2,
			"description": "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
		},
		{
			"name": "Danger Sense",
			"headingLevel": 2,
			"description": "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
		},
		{
			"name": "Reckless Attack",
			"headingLevel": 2,
			"description": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
		},
		{
			"name": "Primal Path",
			"headingLevel": 2,
			"description": "At 3rd level, you choose a path that shapes the nature of your rage, such as the Path of the Berserker. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
		},
		{
			"name": "Ability Score Improvement",
			"headingLevel": 2,
			"description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
		},
		{
			"name": "Extra Attack",
			"headingLevel": 2,
			"description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
		},
		{
			"name": "Fast Movement",
			"headingLevel": 2,
			"description": "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
		},
		{
			"name": "Feral Instinct",
			"headingLevel": 2,
			"description": "By 7th level, your instincts are so honed that you have advantage on initiative rolls.\nAdditionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
		},
		{
			"name": "Brutal Critical",
			"headingLevel": 2,
			"description": "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\nThis increases to two additional dice at 13th level and three additional dice at 17th level."
		},
		{
			"name": "Relentless Rage",
			"headingLevel": 2,
			"description": "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.\nEach time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
		},
		{
			"name": "Persistent Rage",
			"headingLevel": 2,
			"description": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
		},
		{
			"name": "Indomitable Might",
			"headingLevel": 2,
			"description": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
		},
		{
			"name": "Primal Champion",
			"headingLevel": 2,
			"description": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
		},
		{
			"name": "Primal Paths",
			"headingLevel": 2,
			"description": ""
		},
		{
			"name": "Path of the Berserker",
			"headingLevel": 3,
			"description": "For some barbarians, rage is a means to an end— that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being."
		},
		{
			"name": "Frenzy",
			"headingLevel": 4,
			"description": "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in Conditions)."
		},
		{
			"name": "Mindless Rage",
			"headingLevel": 4,
			"description": "Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
		},
		{
			"name": "Intimidating Presence",
			"headingLevel": 4,
			"description": "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.\nIf the creature succeeds on its saving throw, you can’t use this feature on that creature again for 24 hours."
		},
		{
			"name": "Retaliation",
			"headingLevel": 4,
			"description": "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
		},
		{
			"name": "Attributes",
			"headingLevel": 1,
			"description": "Hit Die\nd12\nStarting Gold\n2d4 x 10\nSubclass Name\nPrimal Path\nSuggested Abilities\nStrength, Constitution\nfilter-Armor Proficiency\nLight, Medium, Shields\nfilter-Hit Die\nd12\nfilter-Primary Ability\nStrength, Constitution\nfilter-Weapon Proficiency\nSimple Weapons, Martial Weapons\nconst colorMode = \"light\"\nif(colorMode === \"dark\"){\n$(\"#pagecontent\").addClass(\"dark\")\n}\nif ( window.location !== window.parent.location ) {\n// The page is in an iframe\ndocument.getElementById(\"characters-cta\").style.display = \"none\";\n}\nif (!document.body.classList.contains(\"charmancer\")) {\n// Remove the margin-bottom from the page title in web compendium and iframe compendium popout\nconst pageTitle = document.getElementsByClassName(\"page-title\")[0];\nif (pageTitle) {\npageTitle.style.marginBottom = \"0\";\n}\n}\nView All Classes &raquo;"
		}
	],
	"spellcastingAbility": ""
};

export default barbarian;
