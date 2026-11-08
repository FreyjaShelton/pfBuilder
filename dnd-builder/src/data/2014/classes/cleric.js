const cleric = {
	"name": "Cleric",
	"hitDie": 8,
	"startingGold": "5d4 x 10",
	"subclassName": "Divine Domain",
	"suggestedAbilities": "Wisdom, Strength or Constitution",
	"primaryAbility": [
		"Wisdom"
	],
	"armorProficiencies": "Light armor, medium armor, shields",
	"weaponProficiencies": "Simple weapons",
	"toolProficiencies": "none",
	"savingThrows": [
		"Wisdom",
		"Charisma"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"History",
			"Insight",
			"Medicine",
			"Persuasion",
			"Religion"
		],
		"raw": "Choose two from History, Insight, Medicine, Persuasion, and Religion"
	},
	"startingEquipment": [
		"(a) a mace or (b) a warhammer (if proficient)",
		"(a) Scale Mail, (b) Leather Armor, or (c) Chain Mail (if proficient)",
		"(a) a light crossbow and 20 bolts or (b) any simple weapon",
		"(a) a priest's pack or (b) an explorer's pack",
		"A shield and a holy symbol"
	],
	"table": {
		"caption": "Table: The Cleric",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Cantrips Known",
			"Spell Slots per Spell Level 1st",
			"Spell Slots per Spell Level 2nd",
			"Spell Slots per Spell Level 3rd",
			"Spell Slots per Spell Level 4th",
			"Spell Slots per Spell Level 5th",
			"Spell Slots per Spell Level 6th",
			"Spell Slots per Spell Level 7th",
			"Spell Slots per Spell Level 8th",
			"Spell Slots per Spell Level 9th"
		],
		"rows": [
			[
				"1st",
				"+2",
				"Spellcasting, Divine Domain",
				"3",
				"2",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"2nd",
				"+2",
				"Channel Divinity (1/rest), Divine Domain feature",
				"3",
				"3",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"3rd",
				"+2",
				"-",
				"3",
				"4",
				"2",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"4th",
				"+2",
				"Ability Score Improvement",
				"4",
				"4",
				"3",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"5th",
				"+3",
				"Destroy Undead (CR 1/2)",
				"4",
				"4",
				"3",
				"2",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"6th",
				"+3",
				"Channel Divinity (2/rest), Divine Domain feature",
				"4",
				"4",
				"3",
				"3",
				"-",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"7th",
				"+3",
				"-",
				"4",
				"4",
				"3",
				"3",
				"1",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"8th",
				"+3",
				"Ability Score Improvement, Destroy Undead (CR 1), Divine Domain feature",
				"4",
				"4",
				"3",
				"3",
				"2",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"9th",
				"+4",
				"-",
				"4",
				"4",
				"3",
				"3",
				"3",
				"1",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"10th",
				"+4",
				"Divine Intervention",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"11th",
				"+4",
				"Destroy Undead (CR 2)",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"-",
				"-",
				"-"
			],
			[
				"12th",
				"+4",
				"Ability Score Improvement",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"-",
				"-",
				"-"
			],
			[
				"13th",
				"+5",
				"-",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"-",
				"-"
			],
			[
				"14th",
				"+5",
				"Destroy Undead (CR 3)",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"-",
				"-"
			],
			[
				"15th",
				"+5",
				"-",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"1",
				"-"
			],
			[
				"16th",
				"+5",
				"Ability Score Improvement",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"1",
				"-"
			],
			[
				"17th",
				"+6",
				"Destroy Undead (CR 4), Divine Domain feature",
				"5",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"1",
				"1"
			],
			[
				"18th",
				"+6",
				"Channel Divinity (3/rest)",
				"5",
				"4",
				"3",
				"3",
				"3",
				"3",
				"1",
				"1",
				"1",
				"1"
			],
			[
				"19th",
				"+6",
				"Ability Score Improvement",
				"5",
				"4",
				"3",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"1"
			],
			[
				"20th",
				"+6",
				"Divine Intervention improvement",
				"5",
				"4",
				"3",
				"3",
				"3",
				"3",
				"2",
				"2",
				"1",
				"1"
			]
		]
	},
	"features": [
		{
			"name": "Spellcasting",
			"headingLevel": 2,
			"description": "As a conduit for divine power, you can cast cleric spells.\nCantrips\nAt 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.\nPreparing and Casting Spells\nThe Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nWisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Wisdom modifier\nSpell attack modifier = your proficiency bonus + your Wisdom modifier\nRitual Casting\nYou can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.\nSpellcasting Focus\nYou can use a holy symbol (see \"Equipment\") as a spellcasting focus for your cleric spells."
		},
		{
			"name": "Divine DomainDp",
			"headingLevel": 2,
			"description": "Choose one domain related to your deity, such as Life. The Life domain is detailed at the end of the class description, and provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.\nDomain Spells\nEach domain has a list of spells-its domain spells-that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.\nIf you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
		},
		{
			"name": "Channel Divinity",
			"headingLevel": 2,
			"description": "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
		},
		{
			"name": "Channel Divinity: Turn UndeadDp",
			"headingLevel": 3,
			"description": "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
		},
		{
			"name": "Ability Score Improvement",
			"headingLevel": 2,
			"description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
		},
		{
			"name": "Destroy UndeadA",
			"headingLevel": 2,
			"description": "Starting at 5th level, when an undead of CR 1/2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
		},
		{
			"name": "Divine InterventionA",
			"headingLevel": 2,
			"description": "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\nImploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.\nAt 20th level, your call for intervention succeeds automatically, no roll required."
		},
		{
			"name": "Life Domain",
			"headingLevel": 2,
			"description": "The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei)."
		},
		{
			"name": "Bonus Proficiency",
			"headingLevel": 3,
			"description": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
		},
		{
			"name": "Disciple of Life",
			"headingLevel": 3,
			"description": "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level."
		},
		{
			"name": "Channel Divinity: Preserve Life",
			"headingLevel": 3,
			"description": "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.\nAs an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level.\nChoose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct."
		},
		{
			"name": "Blessed Healer",
			"headingLevel": 3,
			"description": "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell’s level."
		},
		{
			"name": "Divine Strike",
			"headingLevel": 3,
			"description": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
		},
		{
			"name": "Supreme Healing",
			"headingLevel": 3,
			"description": "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
		},
		{
			"name": "Attributes",
			"headingLevel": 1,
			"description": "Caster Progression\nfull\nHit Die\nd8\nSpellcasting Ability\nWisdom\nStarting Gold\n5d4 x 10\nSubclass Name\nDivine Domain\nSuggested Abilities\nWisdom, Strength or Constitution\nfilter-Armor Proficiency\nLight, Medium, Shields\nfilter-Caster Progression\nFull\nfilter-Hit Die\nd8\nfilter-Primary Ability\nWisdom\nfilter-Spell Type\nDivine\nfilter-Weapon Proficiency\nSimple Weapons\nconst colorMode = \"light\"\nif(colorMode === \"dark\"){\n$(\"#pagecontent\").addClass(\"dark\")\n}\nif ( window.location !== window.parent.location ) {\n// The page is in an iframe\ndocument.getElementById(\"characters-cta\").style.display = \"none\";\n}\nif (!document.body.classList.contains(\"charmancer\")) {\n// Remove the margin-bottom from the page title in web compendium and iframe compendium popout\nconst pageTitle = document.getElementsByClassName(\"page-title\")[0];\nif (pageTitle) {\npageTitle.style.marginBottom = \"0\";\n}\n}\nView All Classes &raquo;"
		}
	],
	"spellcastingAbility": "Wisdom"
};

export default cleric;
