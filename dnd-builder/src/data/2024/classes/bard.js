const bard = {
	"name": "Bard",
	"edition": "2024",
	"hitDie": 8,
	"primaryAbility": [
		"Charisma"
	],
	"suggestedAbilities": "Charisma",
	"savingThrows": [
		"Dexterity",
		"Charisma"
	],
	"skillChoices": {
		"count": 3,
		"from": "any",
		"raw": "Choose any 3 skills"
	},
	"armorProficiencies": "Light Armor",
	"weaponProficiencies": "Simple Weapons",
	"toolProficiencies": "Choose 3 Musical Instruments",
	"startingEquipmentRaw": "Choose A or B: (A) Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer’s Pack, and 19 GP; or (B) 90 GP",
	"startingEquipment": [
		"(A) Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer’s Pack, and 19 GP",
		"(B) 90 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Bard",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Bardic Die",
			"Cantrips",
			"Prepared Spells",
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
				"1",
				"+2",
				"Bardic Inspiration, Spellcasting",
				"D6",
				"2",
				"4",
				"2",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"2",
				"+2",
				"Expertise, Jack of All Trades",
				"D6",
				"2",
				"5",
				"3",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"3",
				"+2",
				"Bard Subclass",
				"D6",
				"2",
				"6",
				"4",
				"2",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"4",
				"+2",
				"Ability Score Improvement",
				"D6",
				"3",
				"7",
				"4",
				"3",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"5",
				"+3",
				"Font of Inspiration",
				"D8",
				"3",
				"9",
				"4",
				"3",
				"2",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"6",
				"+3",
				"Subclass feature",
				"D8",
				"3",
				"10",
				"4",
				"3",
				"3",
				"—",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"7",
				"+3",
				"Countercharm",
				"D8",
				"3",
				"11",
				"4",
				"3",
				"3",
				"1",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"8",
				"+3",
				"Ability Score Improvement",
				"D8",
				"3",
				"12",
				"4",
				"3",
				"3",
				"2",
				"—",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"9",
				"+4",
				"Expertise",
				"D8",
				"3",
				"14",
				"4",
				"3",
				"3",
				"3",
				"1",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"10",
				"+4",
				"Magical Secrets",
				"D10",
				"4",
				"15",
				"4",
				"3",
				"3",
				"3",
				"2",
				"—",
				"—",
				"—",
				"—"
			],
			[
				"11",
				"+4",
				"—",
				"D10",
				"4",
				"16",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"—",
				"—",
				"—"
			],
			[
				"12",
				"+4",
				"Ability Score Improvement",
				"D10",
				"4",
				"16",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"—",
				"—",
				"—"
			],
			[
				"13",
				"+5",
				"—",
				"D10",
				"4",
				"17",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"—",
				"—"
			],
			[
				"14",
				"+5",
				"Subclass feature",
				"D10",
				"4",
				"17",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"—",
				"—"
			],
			[
				"15",
				"+5",
				"—",
				"D12",
				"4",
				"18",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"1",
				"—"
			],
			[
				"16",
				"+5",
				"Ability Score Improvement",
				"D12",
				"4",
				"18",
				"4",
				"3",
				"3",
				"3",
				"2",
				"1",
				"1",
				"1",
				"—"
			],
			[
				"17",
				"+6",
				"—",
				"D12",
				"4",
				"19",
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
				"18",
				"+6",
				"Superior Inspiration",
				"D12",
				"4",
				"20",
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
				"19",
				"+6",
				"Epic Boon",
				"D12",
				"4",
				"21",
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
				"20",
				"+6",
				"Words of Creation",
				"D12",
				"4",
				"22",
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
			"name": "Bardic Inspiration",
			"level": 1,
			"headingLevel": 3,
			"description": "You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic\nInspiration die, which is a d6.\nUsing Bardic Inspiration. As a Bonus Action, you can inspire another creature within\n60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can\nhave only one Bardic Inspiration die at a time.\nOnce within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and\nadd the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is\nexpended when it’s rolled.\nNumber of Uses. You can confer a Bardic Inspiration die a number of times equal to\nyour Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\nAt Higher Levels. Your Bardic Inspiration die changes when you reach certain Bard\nlevels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at\nlevel 10, and a d12 at level 15."
		},
		{
			"name": "Spellcasting",
			"level": 1,
			"headingLevel": 3,
			"description": "You have learned to cast spells through your bardic arts. See \"Spells\" for the rules on spellcasting. The\ninformation below details how you use those rules with Bard spells, which appear in the Bard spell list later in the\nclass’s description.\nCantrips. You know two cantrips of your choice from the Bard spell list. Dancing\nLights and Vicious Mockery are recommended.\nWhenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the\nBard spell list.\nWhen you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in\nthe Cantrips column of the Bard Features table.\nSpell Slots. The Bard Features table shows how many spell slots you have to cast your\nlevel 1+ spells. You regain all expended slots when you finish a Long Rest.\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are\navailable for you to cast with this feature. To start, choose four level 1 spells from the Bard spell\nlist. Charm Person, Color Spray, Dissonant Whispers, and Healing\nWord are recommended.\nThe number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the\nBard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the\nnumber of spells on your list matches the number on the table. The chosen spells must be of a level for which you\nhave spell slots. For example, if you’re a level 3 Bard, your list of prepared spells can include six spells of\nlevels 1 and 2 in any combination.\nIf another Bard feature gives you spells that you always have prepared, those spells don’t count against the number\nof spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.\nChanging Your Prepared Spells. Whenever you gain a Bard level, you can replace one\nspell on your list with another Bard spell for which you have spell slots.\nSpellcasting Ability. Charisma is your spellcasting ability for your Bard spells.\nSpellcasting Focus. You can use a Musical Instrument as a Spellcasting Focus for your\nBard spells."
		},
		{
			"name": "Expertise",
			"level": 2,
			"headingLevel": 3,
			"description": "You gain Expertise (see the rules glossary) in two of your skill proficiencies of your choice. Performance and\nPersuasion are recommended if you have proficiency in them.\nAt Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice."
		},
		{
			"name": "Jack of All Trades",
			"level": 2,
			"headingLevel": 3,
			"description": "You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you\nlack and that doesn’t otherwise use your Proficiency Bonus.\nFor example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your\nProficiency Bonus to the check."
		},
		{
			"name": "Bard Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Bard subclass of your choice. The College of Lore subclass is detailed after this class’s description. A subclass is a specialization that grants you\nfeatures at certain Bard levels. For the rest of your career, you gain each of your subclass’s features that are of\nyour Bard level or lower."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You\ngain this feature again at Bard levels 8, 12, and 16."
		},
		{
			"name": "Font of Inspiration",
			"level": 5,
			"headingLevel": 3,
			"description": "You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.\nIn addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration."
		},
		{
			"name": "Countercharm",
			"level": 7,
			"headingLevel": 3,
			"description": "You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet\nof you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a\nReaction to cause the save to be rerolled, and the new roll has Advantage."
		},
		{
			"name": "Magical Secrets",
			"level": 10,
			"headingLevel": 3,
			"description": "You’ve learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and\nthe Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from\nthe Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class’s\nsection for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it\nwith a spell from those lists."
		},
		{
			"name": "Superior Inspiration",
			"level": 18,
			"headingLevel": 3,
			"description": "When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than\nthat."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Spell Recall\nis recommended."
		},
		{
			"name": "Words of Creation",
			"level": 20,
			"headingLevel": 3,
			"description": "You have mastered two of the Words of Creation: the words of life and death. You therefore always have the Power\nWord Heal and Power Word Kill spells prepared. When you cast either spell, you can\ntarget a second creature with it if that creature is within 10 feet of the first target."
		}
	],
	"spellList": {
		"0": [
			{
				"name": "Dancing Lights",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Light",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Mage Hand",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Mending",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Message",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Minor Illusion",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Prestidigitation",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Starry Wisp",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "True Strike",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Vicious Mockery",
				"school": "Enchantment",
				"special": ""
			}
		],
		"1": [
			{
				"name": "Animal Friendship",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Bane",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Charm\nPerson",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Color\nSpray",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Command",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Comprehend Languages",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Cure\nWounds",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Detect\nMagic",
				"school": "Divination",
				"special": "C, R"
			},
			{
				"name": "Disguise\nSelf",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Dissonant Whispers",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Faerie\nFire",
				"school": "Evocation",
				"special": "C"
			},
			{
				"name": "Feather\nFall",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Healing\nWord",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Heroism",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Hideous Laughter",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Identify",
				"school": "Divination",
				"special": "R, M"
			},
			{
				"name": "Illusory Script",
				"school": "Illusion",
				"special": "R, M"
			},
			{
				"name": "Longstrider",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Silent\nImage",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Sleep",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Speak with Animals",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Thunderwave",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Unseen Servant",
				"school": "Conjuration",
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
				"name": "Blindness/Deafness",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Calm\nEmotions",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Detect Thoughts",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Enhance Ability",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Enlarge/Reduce",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Enthrall",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Heat\nMetal",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Hold\nPerson",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Invisibility",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Knock",
				"school": "Transmutation",
				"special": ""
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
				"name": "Locate\nObject",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Magic\nMouth",
				"school": "Illusion",
				"special": "R, M"
			},
			{
				"name": "Mirror\nImage",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "See Invisibility",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Shatter",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Silence",
				"school": "Illusion",
				"special": "C, R"
			},
			{
				"name": "Suggestion",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Zone of Truth",
				"school": "Enchantment",
				"special": ""
			}
		],
		"3": [
			{
				"name": "Bestow\nCurse",
				"school": "Necromancy",
				"special": "C"
			},
			{
				"name": "Clairvoyance",
				"school": "Divination",
				"special": "C, M"
			},
			{
				"name": "Dispel\nMagic",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Fear",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Glyph of Warding",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Hypnotic Pattern",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Major\nImage",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Mass Healing Word",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Nondetection",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Plant\nGrowth",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Sending",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Slow",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Speak with Dead",
				"school": "Necromancy",
				"special": ""
			},
			{
				"name": "Speak with Plants",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Stinking Cloud",
				"school": "Conjuration",
				"special": "C"
			},
			{
				"name": "Tiny Hut",
				"school": "Evocation",
				"special": "R"
			},
			{
				"name": "Tongues",
				"school": "Divination",
				"special": ""
			}
		],
		"4": [
			{
				"name": "Charm\nMonster",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Compulsion",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Confusion",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Dimension Door",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Freedom of Movement",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Greater Invisibility",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Hallucinatory Terrain",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Locate Creature",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Phantasmal Killer",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Polymorph",
				"school": "Transmutation",
				"special": "C"
			}
		],
		"5": [
			{
				"name": "Animate Objects",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Awaken",
				"school": "Transmutation",
				"special": "M"
			},
			{
				"name": "Dominate Person",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Dream",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Geas",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Greater Restoration",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Hold\nMonster",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Legend\nLore",
				"school": "Divination",
				"special": "M"
			},
			{
				"name": "Mass Cure Wounds",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Mislead",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Modify\nMemory",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Planar Binding",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Raise\nDead",
				"school": "Necromancy",
				"special": "M"
			},
			{
				"name": "Scrying",
				"school": "Divination",
				"special": "C, M"
			},
			{
				"name": "Seeming",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Telepathic Bond",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Teleportation Circle",
				"school": "Conjuration",
				"special": "M"
			}
		],
		"6": [
			{
				"name": "Eyebite",
				"school": "Necromancy",
				"special": "C"
			},
			{
				"name": "Find the Path",
				"school": "Divination",
				"special": "C, M"
			},
			{
				"name": "Guards and Wards",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Heroes’\nFeast",
				"school": "Conjuration",
				"special": "M"
			},
			{
				"name": "Irresistible Dance",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Mass Suggestion",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Programmed Illusion",
				"school": "Illusion",
				"special": "M"
			},
			{
				"name": "True\nSeeing",
				"school": "Divination",
				"special": "M"
			}
		],
		"7": [
			{
				"name": "Arcane Sword",
				"school": "Evocation",
				"special": "C, M"
			},
			{
				"name": "Etherealness",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Forcecage",
				"school": "Evocation",
				"special": "C, M"
			},
			{
				"name": "Magnificent Mansion",
				"school": "Conjuration",
				"special": "M"
			},
			{
				"name": "Mirage\nArcane",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Prismatic Spray",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Project\nImage",
				"school": "Illusion",
				"special": "C, M"
			},
			{
				"name": "Regenerate",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Resurrection",
				"school": "Necromancy",
				"special": "M"
			},
			{
				"name": "Symbol",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Teleport",
				"school": "Conjuration",
				"special": ""
			}
		],
		"8": [
			{
				"name": "Antipathy/Sympathy",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Befuddlement",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Dominate Monster",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Glibness",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Mind\nBlank",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Power Word Stun",
				"school": "Enchantment",
				"special": ""
			}
		],
		"9": [
			{
				"name": "Foresight",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Power Word Heal",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Power Word Kill",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Prismatic Wall",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "True Polymorph",
				"school": "Transmutation",
				"special": "C"
			}
		]
	},
	"spellcastingAbility": "Charisma"
};

export default bard;
