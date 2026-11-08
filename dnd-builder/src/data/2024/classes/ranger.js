const ranger = {
	"name": "Ranger",
	"edition": "2024",
	"hitDie": 10,
	"primaryAbility": [
		"Dexterity",
		"Wisdom"
	],
	"suggestedAbilities": "Dexterity and Wisdom",
	"savingThrows": [
		"Strength",
		"Dexterity"
	],
	"skillChoices": {
		"count": 3,
		"from": [
			"Animal Handling",
			"Athletics",
			"Insight",
			"Investigation",
			"Nature",
			"Perception",
			"Stealth",
			"Survival"
		],
		"raw": "Choose 3: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, or Survival"
	},
	"armorProficiencies": "Light and Medium armor and Shields",
	"weaponProficiencies": "Simple and Martial weapons",
	"toolProficiencies": "None",
	"startingEquipmentRaw": "Choose A or B: (A) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer’s Pack, and 7 GP; or (B) 150 GP",
	"startingEquipment": [
		"(A) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer’s Pack, and 7 GP",
		"(B) 150 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Ranger",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Favored Enemy",
			"Prepared Spells",
			"Spell Slots per Spell Level 1st",
			"Spell Slots per Spell Level 2nd",
			"Spell Slots per Spell Level 3rd",
			"Spell Slots per Spell Level 4th",
			"Spell Slots per Spell Level 5th"
		],
		"rows": [
			[
				"1",
				"+2",
				"Spellcasting, Favored Enemy, Weapon Mastery",
				"2",
				"2",
				"2",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"2",
				"+2",
				"Deft Explorer, Fighting Style",
				"2",
				"3",
				"2",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"3",
				"+2",
				"Ranger Subclass",
				"2",
				"4",
				"3",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"4",
				"+2",
				"Ability Score Improvement",
				"2",
				"5",
				"3",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"5",
				"+3",
				"Extra Attack",
				"3",
				"6",
				"4",
				"2",
				"—",
				"—",
				"—"
			],
			[
				"6",
				"+3",
				"Roving",
				"3",
				"6",
				"4",
				"2",
				"—",
				"—",
				"—"
			],
			[
				"7",
				"+3",
				"Subclass feature",
				"3",
				"7",
				"4",
				"3",
				"—",
				"—",
				"—"
			],
			[
				"8",
				"+3",
				"Ability Score Improvement",
				"3",
				"7",
				"4",
				"3",
				"—",
				"—",
				"—"
			],
			[
				"9",
				"+4",
				"Expertise",
				"4",
				"9",
				"4",
				"3",
				"2",
				"—",
				"—"
			],
			[
				"10",
				"+4",
				"Tireless",
				"4",
				"9",
				"4",
				"3",
				"2",
				"—",
				"—"
			],
			[
				"11",
				"+4",
				"Subclass feature",
				"4",
				"10",
				"4",
				"3",
				"3",
				"—",
				"—"
			],
			[
				"12",
				"+4",
				"Ability Score Improvement",
				"4",
				"10",
				"4",
				"3",
				"3",
				"—",
				"—"
			],
			[
				"13",
				"+5",
				"Relentless Hunter",
				"5",
				"11",
				"4",
				"3",
				"3",
				"1",
				"—"
			],
			[
				"14",
				"+5",
				"Nature’s Veil",
				"5",
				"11",
				"4",
				"3",
				"3",
				"1",
				"—"
			],
			[
				"15",
				"+5",
				"Subclass feature",
				"5",
				"12",
				"4",
				"3",
				"3",
				"2",
				"—"
			],
			[
				"16",
				"+5",
				"Ability Score Improvement",
				"5",
				"12",
				"4",
				"3",
				"3",
				"2",
				"—"
			],
			[
				"17",
				"+6",
				"Precise Hunter",
				"6",
				"14",
				"4",
				"3",
				"3",
				"3",
				"1"
			],
			[
				"18",
				"+6",
				"Feral Senses",
				"6",
				"14",
				"4",
				"3",
				"3",
				"3",
				"1"
			],
			[
				"19",
				"+6",
				"Epic Boon",
				"6",
				"15",
				"4",
				"3",
				"3",
				"3",
				"2"
			],
			[
				"20",
				"+6",
				"Foe Slayer",
				"6",
				"15",
				"4",
				"3",
				"3",
				"3",
				"2"
			]
		]
	},
	"features": [
		{
			"name": "Spellcasting",
			"level": 1,
			"headingLevel": 3,
			"description": "You have learned to channel the magical essence of nature to cast spells. See \"Spells\"\nfor the rules on\nspellcasting. The information below details how you use those rules with Ranger spells, which appear in the Ranger\nspell list later in the class’s description.\nSpell Slots. The Ranger Features table shows how many spell slots you have to cast\nyour level 1+ spells. You regain all expended slots when you finish a Long Rest.\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for\nyou to cast with this feature. To start, choose two level 1 Ranger spells. Cure\nWounds and Ensnaring Strike are recommended.\nThe number of spells on your list increases as you gain Ranger levels, as shown in the Prepared Spells column of the\nRanger Features table. Whenever that number increases, choose additional Ranger spells until the number of spells on\nyour list matches the number in the Ranger Features table. The chosen spells must be of a level for which you have\nspell slots. For example, if you’re a level 5 Ranger, your list of prepared spells can include six Ranger spells of\nlevel 1 or 2 in any combination.\nIf another Ranger feature gives you spells that you always have prepared, those spells don’t count against the number\nof spells you can prepare with this feature, but those spells otherwise count as Ranger spells for you.\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can replace one\nspell on your list with another Ranger spell for which you have spell slots.\nSpellcasting Ability. Wisdom is your spellcasting ability for your Ranger spells.\nSpellcasting Focus. You can use a Druidic Focus as a Spellcasting Focus for your\nRanger spells."
		},
		{
			"name": "Favored Enemy",
			"level": 1,
			"headingLevel": 3,
			"description": "You always have the Hunter’s Mark spell prepared. You can cast it twice without expending a spell\nslot, and you regain all expended uses of this ability when you finish a Long Rest.\nThe number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels, as\nshown in the Favored Enemy column of the Ranger Features table."
		},
		{
			"name": "Weapon Mastery",
			"level": 1,
			"headingLevel": 3,
			"description": "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which\nyou have proficiency, such as Longbows and Shortswords.\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to\nusing the mastery properties of Scimitars and Longswords."
		},
		{
			"name": "Deft Explorer",
			"level": 2,
			"headingLevel": 3,
			"description": "Thanks to your travels, you gain the following benefits.\nExpertise. Choose one of your skill proficiencies with which you lack Expertise. You\ngain Expertise in that skill.\nLanguages. You know two languages of your choice from the language tables in \"Character Creation\"."
		},
		{
			"name": "Fighting Style",
			"level": 2,
			"headingLevel": 3,
			"description": "You gain a Fighting Style feat of your choice (see \"Feats\"). Instead of choosing one of those feats, you can choose\nthe option below.\nDruidic Warrior. You learn two Druid cantrips of your choice (see the Druid class’s\nsection for a list of Druid spells). Guidance and Starry Wisp are recommended.\nThe chosen cantrips count as Ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you\ngain a Ranger level, you can replace one of these cantrips with another Druid cantrip."
		},
		{
			"name": "Ranger Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Ranger subclass of your choice. The Hunter subclass is\ndetailed after this class’s description. A subclass is a specialization that grants you features at certain Ranger\nlevels. For the rest of your career, you gain each of your subclass’s features that are of your Ranger level or\nlower."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You\ngain this feature again at Ranger levels 8, 12, and 16."
		},
		{
			"name": "Extra Attack",
			"level": 5,
			"headingLevel": 3,
			"description": "You can attack twice instead of once whenever you take the Attack action on your turn."
		},
		{
			"name": "Roving",
			"level": 6,
			"headingLevel": 3,
			"description": "Your Speed increases by 10 feet while you aren’t wearing Heavy armor. You also have a Climb Speed and a Swim Speed\nequal to your Speed."
		},
		{
			"name": "Expertise",
			"level": 9,
			"headingLevel": 3,
			"description": "Choose two of your skill proficiencies with which you lack Expertise. You gain Expertise in those skills."
		},
		{
			"name": "Tireless",
			"level": 10,
			"headingLevel": 3,
			"description": "Primal forces now help fuel you on your journeys, granting you the following benefits.\nTemporary Hit Points. As a Magic action, you can give yourself a number of Temporary\nHit Points equal to 1d8 plus your Wisdom modifier (minimum of 1). You can use this action a number of times equal to\nyour Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\nDecrease Exhaustion.Whenever you finish a Short Rest, your Exhaustion level, if any,\ndecreases by 1."
		},
		{
			"name": "Relentless Hunter",
			"level": 13,
			"headingLevel": 3,
			"description": "Taking damage can’t break your Concentration on Hunter’s Mark."
		},
		{
			"name": "Nature’s Veil",
			"level": 14,
			"headingLevel": 3,
			"description": "You invoke spirits of nature to magically hide yourself. As a Bonus Action, you can give yourself the Invisible\ncondition until the end of your next turn.\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all\nexpended uses when you finish a Long Rest."
		},
		{
			"name": "Precise Hunter",
			"level": 17,
			"headingLevel": 3,
			"description": "You have Advantage on attack rolls against the creature currently marked by your Hunter’s Mark."
		},
		{
			"name": "Feral Senses",
			"level": 18,
			"headingLevel": 3,
			"description": "Your connection to the forces of nature grants you Blindsight with a range of 30 feet."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Dimensional\nTravel is recommended."
		},
		{
			"name": "Foe Slayer",
			"level": 20,
			"headingLevel": 3,
			"description": "The damage die of your Hunter’s Mark is a d10 rather than a d6."
		}
	],
	"spellList": {
		"1": [
			{
				"name": "Alarm",
				"school": "Abjuration",
				"special": "R"
			},
			{
				"name": "Animal Friendship",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Cure Wounds",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Detect Magic",
				"school": "Divination",
				"special": "C, R"
			},
			{
				"name": "Detect Poison and Disease",
				"school": "Divination",
				"special": "C, R"
			},
			{
				"name": "Ensnaring Strike",
				"school": "Conjuration",
				"special": "C"
			},
			{
				"name": "Entangle",
				"school": "Conjuration",
				"special": "C"
			},
			{
				"name": "Fog Cloud",
				"school": "Conjuration",
				"special": "C"
			},
			{
				"name": "Goodberry",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Hunter’s Mark",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Jump",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Longstrider",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Speak with Animals",
				"school": "Divination",
				"special": "R"
			}
		],
		"2": [
			{
				"name": "Aid",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Animal Messenger",
				"school": "Enchantment",
				"special": "R"
			},
			{
				"name": "Barkskin",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Darkvision",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Enhance Ability",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Find Traps",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Gust of Wind",
				"school": "Evocation",
				"special": "C"
			},
			{
				"name": "Lesser Restoration",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Locate Animals or Plants",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Locate Object",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Magic Weapon",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Pass without Trace",
				"school": "Abjuration",
				"special": "C"
			},
			{
				"name": "Protection from Poison",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Silence",
				"school": "Illusion",
				"special": "C, R"
			},
			{
				"name": "Spike Growth",
				"school": "Transmutation",
				"special": "C"
			}
		],
		"3": [
			{
				"name": "Conjure Animals",
				"school": "Conjuration",
				"special": "C"
			},
			{
				"name": "Daylight",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Dispel Magic",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Meld into Stone",
				"school": "Transmutation",
				"special": "R"
			},
			{
				"name": "Nondetection",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Plant Growth",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Protection from Energy",
				"school": "Abjuration",
				"special": "C"
			},
			{
				"name": "Revivify",
				"school": "Necromancy",
				"special": "M"
			},
			{
				"name": "Speak with Plants",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Water Breathing",
				"school": "Transmutation",
				"special": "R"
			},
			{
				"name": "Water Walk",
				"school": "Transmutation",
				"special": "R"
			},
			{
				"name": "Wind Wall",
				"school": "Evocation",
				"special": "C"
			}
		],
		"4": [
			{
				"name": "Conjure Woodland Beings",
				"school": "Conjuration",
				"special": "C"
			},
			{
				"name": "Dominate Beast",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Freedom of Movement",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Locate Creature",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Stoneskin",
				"school": "Transmutation",
				"special": "C, M"
			}
		],
		"5": [
			{
				"name": "Commune with Nature",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Greater Restoration",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Tree Stride",
				"school": "Conjuration",
				"special": "C"
			}
		]
	},
	"spellcastingAbility": "Wisdom"
};

export default ranger;
