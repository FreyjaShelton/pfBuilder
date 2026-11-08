const monk = {
	"name": "Monk",
	"hitDie": 8,
	"startingGold": "5d4",
	"subclassName": "Monastic Tradition",
	"suggestedAbilities": "Dexterity, Wisdom",
	"primaryAbility": [
		"Dexterity",
		"Wisdom"
	],
	"armorProficiencies": "none",
	"weaponProficiencies": "simple weapons, shortswords",
	"toolProficiencies": "any one type of artisan's tools or any one musical instrument of your choice",
	"savingThrows": [
		"Strength",
		"Dexterity"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"Acrobatics",
			"Athletics",
			"History",
			"Insight",
			"Religion",
			"Stealth"
		],
		"raw": "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth"
	},
	"startingEquipment": [
		"(a) a shortsword or (b) any simple weapon",
		"(a) a dungeoneer's pack or (b) an explorer's pack",
		"10 darts"
	],
	"table": {
		"caption": "Table: The Monk",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Martial Arts",
			"Ki Points",
			"Unarmored Movement",
			"Features"
		],
		"rows": [
			[
				"1st",
				"+2",
				"1d4",
				"—",
				"—",
				"Unarmored Defense, Martial Arts"
			],
			[
				"2nd",
				"+2",
				"1d4",
				"2",
				"+10 ft.",
				"Ki, Unarmored Movement"
			],
			[
				"3rd",
				"+2",
				"1d4",
				"3",
				"+10 ft.",
				"Monastic Tradition, Deflect Missiles"
			],
			[
				"4th",
				"+2",
				"1d4",
				"4",
				"+10 ft.",
				"Ability Score Improvement, Slow Fall"
			],
			[
				"5th",
				"+3",
				"1d6",
				"5",
				"+10 ft.",
				"Extra Attack, Stunning Strike"
			],
			[
				"6th",
				"+3",
				"1d6",
				"6",
				"+15 ft.",
				"Ki-­Empowered Strikes, Monastic Tradition feature"
			],
			[
				"7th",
				"+3",
				"1d6",
				"7",
				"+15 ft.",
				"Evasion, Stillness of Mind"
			],
			[
				"8th",
				"+3",
				"1d6",
				"8",
				"+15 ft.",
				"Ability Score Improvement"
			],
			[
				"9th",
				"+4",
				"1d6",
				"9",
				"+15 ft.",
				"Unarmored Movement improvement"
			],
			[
				"10th",
				"+4",
				"1d6",
				"10",
				"+20 ft.",
				"Purity of Body"
			],
			[
				"11th",
				"+4",
				"1d8",
				"11",
				"+20 ft.",
				"Monastic Tradition feature"
			],
			[
				"12th",
				"+4",
				"1d8",
				"12",
				"+20 ft.",
				"Ability Score Improvement"
			],
			[
				"13th",
				"+5",
				"1d8",
				"13",
				"+20 ft.",
				"Tongue of the Sun and Moon"
			],
			[
				"14th",
				"+5",
				"1d8",
				"14",
				"+25 ft.",
				"Diamond Soul"
			],
			[
				"15th",
				"+5",
				"1d8",
				"15",
				"+25 ft.",
				"Timeless Body"
			],
			[
				"16th",
				"+5",
				"1d8",
				"16",
				"+25 ft.",
				"Ability Score Improvement"
			],
			[
				"17th",
				"+6",
				"1d10",
				"17",
				"+25 ft.",
				"Monastic Tradition feature"
			],
			[
				"18th",
				"+6",
				"1d10",
				"18",
				"+30 ft.",
				"Empty Body"
			],
			[
				"19th",
				"+6",
				"1d10",
				"19",
				"+30 ft.",
				"Ability Score Improvement"
			],
			[
				"20th",
				"+6",
				"1d10",
				"20",
				"+30 ft.",
				"Perfect Self"
			]
		]
	},
	"features": [
		{
			"name": "Unarmored Defense",
			"headingLevel": 2,
			"description": "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
		},
		{
			"name": "Martial Arts",
			"headingLevel": 2,
			"description": "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield.\n• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\n• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die\nchanges as you gain monk levels, as shown in the\nMartial Arts column of the Monk table.\n• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.\nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
		},
		{
			"name": "Ki",
			"headingLevel": 2,
			"description": "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.\nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\nSome of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:\nKi save DC = 8 + your proficiency bonus + your Wisdom modifier"
		},
		{
			"name": "Flurry of Blows",
			"headingLevel": 3,
			"description": "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
		},
		{
			"name": "Patient Defense",
			"headingLevel": 3,
			"description": "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
		},
		{
			"name": "Step of the Wind",
			"headingLevel": 3,
			"description": "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
		},
		{
			"name": "Unarmored Movement",
			"headingLevel": 2,
			"description": "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
		},
		{
			"name": "Monastic Tradition",
			"headingLevel": 2,
			"description": "When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
		},
		{
			"name": "Deflect Missiles",
			"headingLevel": 2,
			"description": "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d 10 + your Dexterity modifier + your monk level.\nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20 feet/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
		},
		{
			"name": "Ability Score Improvement",
			"headingLevel": 2,
			"description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
		},
		{
			"name": "Slow Fall",
			"headingLevel": 2,
			"description": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
		},
		{
			"name": "Extra Attack",
			"headingLevel": 2,
			"description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
		},
		{
			"name": "Stunning Strike",
			"headingLevel": 2,
			"description": "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
		},
		{
			"name": "Ki-Empowered Strikes",
			"headingLevel": 2,
			"description": "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
		},
		{
			"name": "Stillness of Mind",
			"headingLevel": 2,
			"description": "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
		},
		{
			"name": "Evasion",
			"headingLevel": 2,
			"description": "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
		},
		{
			"name": "Purity of Body",
			"headingLevel": 2,
			"description": "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
		},
		{
			"name": "Tongue of the Sun and Moon",
			"headingLevel": 2,
			"description": "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
		},
		{
			"name": "Diamond Soul",
			"headingLevel": 2,
			"description": "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.\nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
		},
		{
			"name": "Timeless Body",
			"headingLevel": 2,
			"description": "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
		},
		{
			"name": "Empty Body",
			"headingLevel": 2,
			"description": "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\nAdditionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material components. When you do so, you can't take any other creatures with you."
		},
		{
			"name": "Perfect Soul",
			"headingLevel": 2,
			"description": "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
		},
		{
			"name": "Monastic Traditions",
			"headingLevel": 2,
			"description": "Three traditions of monastic pursuit are common in the monasteries scattered across the multiverse.\nMost monasteries practice one tradition exclusively, but a few honor the three traditions and instruct each monk according to his or her aptitude and interest. All three traditions rely on the same basic techniques, diverging as the student grows more adept. Thus, a monk need choose a tradition only upon reaching 3rd level."
		},
		{
			"name": "Way of the Open Hand",
			"headingLevel": 3,
			"description": "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm."
		},
		{
			"name": "Open Hand Technique",
			"headingLevel": 4,
			"description": "Starting when you choose this tradition at 3rd level, you can manipulate your enemy’s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:\n• It must succeed on a Dexterity saving throw or be knocked prone.\n• It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.\n• It can’t take reactions until the end of your next turn."
		},
		{
			"name": "Wholeness of Body",
			"headingLevel": 4,
			"description": "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
		},
		{
			"name": "Tranquility",
			"headingLevel": 4,
			"description": "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
		},
		{
			"name": "Quivering Palm",
			"headingLevel": 4,
			"description": "At 17th level, you gain the ability to set up lethal vibrations in someone’s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.\nYou can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
		},
		{
			"name": "Attributes",
			"headingLevel": 1,
			"description": "Hit Die\nd8\nStarting Gold\n5d4\nSubclass Name\nMonastic Tradition\nSuggested Abilities\nDexterity, Wisdom\nfilter-Armor Proficiency\nNone\nfilter-Hit Die\nd8\nfilter-Primary Ability\nDexterity, Wisdom\nfilter-Weapon Proficiency\nSimple Weapons, Shortsword\nconst colorMode = \"light\"\nif(colorMode === \"dark\"){\n$(\"#pagecontent\").addClass(\"dark\")\n}\nif ( window.location !== window.parent.location ) {\n// The page is in an iframe\ndocument.getElementById(\"characters-cta\").style.display = \"none\";\n}\nif (!document.body.classList.contains(\"charmancer\")) {\n// Remove the margin-bottom from the page title in web compendium and iframe compendium popout\nconst pageTitle = document.getElementsByClassName(\"page-title\")[0];\nif (pageTitle) {\npageTitle.style.marginBottom = \"0\";\n}\n}\nView All Classes &raquo;"
		}
	],
	"spellcastingAbility": ""
};

export default monk;
