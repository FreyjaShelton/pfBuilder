const fighter = {
	"name": "Fighter",
	"hitDie": 10,
	"startingGold": "5d4 x 10",
	"subclassName": "Martial Archetype",
	"suggestedAbilities": "Strength or Dexterity, Constitution or Intelligence",
	"primaryAbility": [
		"Strength",
		"Dexterity"
	],
	"armorProficiencies": "light armor, medium armor, heavy armor, shields",
	"weaponProficiencies": "simple weapons, martial weapons",
	"toolProficiencies": "none",
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
			"Perception",
			"Survival"
		],
		"raw": "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival"
	},
	"startingEquipment": [
		"(a) Chain Mail or (b) leather armor, longbow, and 20 arrows",
		"(a) a martial weapon and a shield or (b) two martial weapons",
		"(a) a light crossbow and 20 bolts or (b) two handaxes",
		"(a) a dungeoneer's pack or (b) an explorer's pack"
	],
	"table": {
		"caption": "Table: The Fighter",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Bonus Features"
		],
		"rows": [
			[
				"1st",
				"+2",
				"Fighting Style, Second Wind"
			],
			[
				"2nd",
				"+2",
				"Action Surge (one use)"
			],
			[
				"3rd",
				"+2",
				"Martial Archetype"
			],
			[
				"4th",
				"+2",
				"Ability Score Improvement"
			],
			[
				"5th",
				"+3",
				"Extra Attack"
			],
			[
				"6th",
				"+3",
				"Ability Score Improvement"
			],
			[
				"7th",
				"+3",
				"Martial Archetype feature"
			],
			[
				"8th",
				"+3",
				"Ability Score Improvement"
			],
			[
				"9th",
				"+4",
				"Indomitable (one use)"
			],
			[
				"10th",
				"+4",
				"Martial Archetype feature"
			],
			[
				"11th",
				"+4",
				"Extra Attack (2)"
			],
			[
				"12th",
				"+4",
				"Ability Score Improvement"
			],
			[
				"13th",
				"+5",
				"Indomitable (two uses)"
			],
			[
				"14th",
				"+5",
				"Ability Score Improvement"
			],
			[
				"15th",
				"+5",
				"Martial Archetype feature"
			],
			[
				"16th",
				"+5",
				"Ability Score Improvement"
			],
			[
				"17th",
				"+6",
				"Action Surge (two uses), Indomitable (three uses)"
			],
			[
				"18th",
				"+6",
				"Martial Archetype feature"
			],
			[
				"19th",
				"+6",
				"Ability Score Improvement"
			],
			[
				"20th",
				"+6",
				"Extra Attack (3)"
			]
		]
	},
	"features": [
		{
			"name": "Fighting Style",
			"headingLevel": 2,
			"description": "You adopt a particular style of fighting as your specialty. Choose a fighting style from the list of optional features. You can't take the same Fighting Style option more than once, even if you get to choose again."
		},
		{
			"name": "Archery",
			"headingLevel": 3,
			"description": "You gain a +2 bonus to attack rolls you make with ranged weapons."
		},
		{
			"name": "Defense",
			"headingLevel": 3,
			"description": "While you are wearing armor, you gain a +1 bonus to AC."
		},
		{
			"name": "Dueling",
			"headingLevel": 3,
			"description": "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
		},
		{
			"name": "Great Weapon Fighting",
			"headingLevel": 3,
			"description": "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
		},
		{
			"name": "Protection",
			"headingLevel": 3,
			"description": "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
		},
		{
			"name": "Two-Weapon Fighting",
			"headingLevel": 3,
			"description": "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
		},
		{
			"name": "Second Wind",
			"headingLevel": 2,
			"description": "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.\nOnce you use this feature, you must finish a short or long rest before you can use it again."
		},
		{
			"name": "Action Surge",
			"headingLevel": 2,
			"description": "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
		},
		{
			"name": "Martial Archetype",
			"headingLevel": 2,
			"description": "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
		},
		{
			"name": "Ability Score Improvement",
			"headingLevel": 2,
			"description": "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
		},
		{
			"name": "Extra Attack",
			"headingLevel": 2,
			"description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.\nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
		},
		{
			"name": "Indomitable",
			"headingLevel": 2,
			"description": "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
		},
		{
			"name": "Martial Archetypes",
			"headingLevel": 2,
			"description": "Different fighters choose different approaches to perfecting their fighting prowess. The martial archetype you choose to emulate reflects your approach."
		},
		{
			"name": "Champion",
			"headingLevel": 3,
			"description": "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows."
		},
		{
			"name": "Improved Critical",
			"headingLevel": 4,
			"description": "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
		},
		{
			"name": "Remarkable Athlete",
			"headingLevel": 4,
			"description": "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus.\nIn addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
		},
		{
			"name": "Additional Fighting Style",
			"headingLevel": 4,
			"description": "At 10th level, you can choose a second option from the Fighting Style class feature."
		},
		{
			"name": "Superior Critical",
			"headingLevel": 4,
			"description": "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18–20."
		},
		{
			"name": "Survivor",
			"headingLevel": 4,
			"description": "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left.\nYou don’t gain this benefit if you have 0 hit points."
		},
		{
			"name": "Attributes",
			"headingLevel": 1,
			"description": "Hit Die\nd10\nStarting Gold\n5d4 x 10\nSubclass Name\nMartial Archetype\nSuggested Abilities\nStrength or Dexterity, Constitution or Intelligence\nfilter-Armor Proficiency\nLight, Medium, Heavy, Shields\nfilter-Hit Die\nd10\nfilter-Primary Ability\nStrength, Dexterity\nfilter-Weapon Proficiency\nSimple Weapons, Martial Weapons\nconst colorMode = \"light\"\nif(colorMode === \"dark\"){\n$(\"#pagecontent\").addClass(\"dark\")\n}\nif ( window.location !== window.parent.location ) {\n// The page is in an iframe\ndocument.getElementById(\"characters-cta\").style.display = \"none\";\n}\nif (!document.body.classList.contains(\"charmancer\")) {\n// Remove the margin-bottom from the page title in web compendium and iframe compendium popout\nconst pageTitle = document.getElementsByClassName(\"page-title\")[0];\nif (pageTitle) {\npageTitle.style.marginBottom = \"0\";\n}\n}\nView All Classes &raquo;"
		}
	],
	"spellcastingAbility": ""
};

export default fighter;
