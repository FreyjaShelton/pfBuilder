const warlock = {
	"name": "Warlock",
	"edition": "2024",
	"hitDie": 8,
	"primaryAbility": [
		"Charisma"
	],
	"suggestedAbilities": "Charisma",
	"savingThrows": [
		"Wisdom",
		"Charisma"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"Arcana",
			"Deception",
			"History",
			"Intimidation",
			"Investigation",
			"Nature",
			"Religion"
		],
		"raw": "Choose 2: Arcana, Deception, History, Intimidation, Investigation, Nature, or Religion"
	},
	"armorProficiencies": "Light armor",
	"weaponProficiencies": "Simple weapons",
	"toolProficiencies": "None",
	"startingEquipmentRaw": "Choose A or B: (A) Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar’s Pack, and 15 GP; or (B) 100 GP",
	"startingEquipment": [
		"(A) Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar’s Pack, and 15 GP",
		"(B) 100 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Warlock",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Eldritch Invocations",
			"Cantrips",
			"Prepared Spells",
			"Spell Slots",
			"Slot Level"
		],
		"rows": [
			[
				"1",
				"+2",
				"Eldritch Invocations, Pact Magic",
				"1",
				"2",
				"2",
				"1",
				"1"
			],
			[
				"2",
				"+2",
				"Magical Cunning",
				"3",
				"2",
				"3",
				"2",
				"1"
			],
			[
				"3",
				"+2",
				"Warlock Subclass",
				"3",
				"2",
				"4",
				"2",
				"2"
			],
			[
				"4",
				"+2",
				"Ability Score Improvement",
				"3",
				"3",
				"5",
				"2",
				"2"
			],
			[
				"5",
				"+3",
				"—",
				"5",
				"3",
				"6",
				"2",
				"3"
			],
			[
				"6",
				"+3",
				"Subclass feature",
				"5",
				"3",
				"7",
				"2",
				"3"
			],
			[
				"7",
				"+3",
				"—",
				"6",
				"3",
				"8",
				"2",
				"4"
			],
			[
				"8",
				"+3",
				"Ability Score Improvement",
				"6",
				"3",
				"9",
				"2",
				"4"
			],
			[
				"9",
				"+4",
				"Contact Patron",
				"7",
				"3",
				"10",
				"2",
				"5"
			],
			[
				"10",
				"+4",
				"Subclass feature",
				"7",
				"4",
				"10",
				"2",
				"5"
			],
			[
				"11",
				"+4",
				"Mystic Arcanum (level 6 spell)",
				"7",
				"4",
				"11",
				"3",
				"5"
			],
			[
				"12",
				"+4",
				"Ability Score Improvement",
				"8",
				"4",
				"11",
				"3",
				"5"
			],
			[
				"13",
				"+5",
				"Mystic Arcanum (level 7 spell)",
				"8",
				"4",
				"12",
				"3",
				"5"
			],
			[
				"14",
				"+5",
				"Subclass feature",
				"8",
				"4",
				"12",
				"3",
				"5"
			],
			[
				"15",
				"+5",
				"Mystic Arcanum (level 8 spell)",
				"9",
				"4",
				"13",
				"3",
				"5"
			],
			[
				"16",
				"+5",
				"Ability Score Improvement",
				"9",
				"4",
				"13",
				"3",
				"5"
			],
			[
				"17",
				"+6",
				"Mystic Arcanum (level 9 spell)",
				"9",
				"4",
				"14",
				"4",
				"5"
			],
			[
				"18",
				"+6",
				"—",
				"10",
				"4",
				"14",
				"4",
				"5"
			],
			[
				"19",
				"+6",
				"Epic Boon",
				"10",
				"4",
				"15",
				"4",
				"5"
			],
			[
				"20",
				"+6",
				"Eldritch Master",
				"10",
				"4",
				"15",
				"4",
				"5"
			]
		]
	},
	"features": [
		{
			"name": "Eldritch Invocations",
			"level": 1,
			"headingLevel": 3,
			"description": "You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability\nor other lessons. You gain one invocation of your choice, such as Pact of the Tome. Invocations are described in the\n“Eldritch Invocation Options” section later in this class’s description.\nPrerequisites. If an invocation has a prerequisite, you must meet it to learn that\ninvocation. For example, if an invocation requires you to be a level 5+ Warlock, you can select the invocation once\nyou reach Warlock level 5.\nReplacing and Gaining Invocations. Whenever you gain a Warlock level, you can replace\none of your invocations with another one for which you qualify. You can’t replace an invocation if it’s a\nprerequisite for another invocation that you have.\nWhen you gain certain Warlock levels, you gain more invocations of your choice, as shown in the Invocations column of\nthe Warlock Features table.\nYou can’t pick the same invocation more than once unless its description says otherwise."
		},
		{
			"name": "Pact Magic",
			"level": 1,
			"headingLevel": 3,
			"description": "Through occult ceremony, you have formed a pact with a mysterious entity to gain magical powers. The entity is a\nvoice in the shadows—its identity unclear—but its boon to you is concrete: the ability to cast spells. See \"Spells\"\nfor the rules on spellcasting. The information below details how you use those rules with Warlock spells, which\nappear in the Warlock spell list later in the class’s description.\nCantrips. You know two Warlock cantrips of your choice. Eldritch Blast and Prestidigitation are\nrecommended. Whenever you gain a Warlock level, you can replace one of your cantrips from this feature with another\nWarlock cantrip of your choice.\nWhen you reach Warlock levels 4 and 10, you learn another Warlock cantrip of your choice, as shown in the Cantrips\ncolumn of the Warlock Features table.\nSpell Slots. The Warlock Features table shows how many spell slots you have to cast\nyour Warlock spells of levels 1–5. The table also shows the level of those slots, all of which are the same level.\nYou regain all expended Pact Magic spell slots when you finish a Short or Long Rest.\nFor example, when you’re a level 5 Warlock, you have two level 3 spell slots. To cast the level 1 spell Witch\nBolt, you must spend one of those slots, and you cast it as a level 3 spell.\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are\navailable for you to cast with this feature. To start, choose two level 1 Warlock spells. Charm Person and Hex are\nrecommended.\nThe number of spells on your list increases as you gain Warlock levels, as shown in the Prepared Spells column of the\nWarlock Features table. Whenever that number increases, choose additional Warlock spells until the number of spells\non your list matches the number in the table. The chosen spells must be of a level no higher than what’s shown in\nthe table’s Slot Level column for your level. When you reach level 6, for example, you learn a new Warlock spell,\nwhich can be of levels 1–3.\nIf another Warlock feature gives you spells that you always have prepared, those spells don’t count against the\nnumber of spells you can prepare with this feature, but those spells otherwise count as Warlock spells for you.\nChanging Your Prepared Spells. Whenever you gain a Warlock level, you can replace one\nspell on your list with another Warlock spell of an eligible level.\nSpellcasting Ability. Charisma is the spellcasting ability for your Warlock spells.\nSpellcasting Focus. You can use an Arcane Focus as a Spellcasting Focus for your\nWarlock spells."
		},
		{
			"name": "Magical Cunning",
			"level": 2,
			"headingLevel": 3,
			"description": "You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots but no\nmore than a number equal to half your maximum (round up). Once you use this feature, you can’t do so again until you\nfinish a Long Rest."
		},
		{
			"name": "Warlock Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Warlock subclass of your choice. The Fiend Patron subclass is detailed after this class’s description. A subclass is a specialization that grants you\nfeatures at certain Warlock levels. For the rest of your career, you gain each of your subclass’s features that are\nof your Warlock level or lower."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You\ngain this feature again at Warlock levels 8, 12, and 16."
		},
		{
			"name": "Contact Patron",
			"level": 9,
			"headingLevel": 3,
			"description": "In the past, you usually contacted your patron through intermediaries. Now you can communicate directly; you always\nhave the Contact Other Plane spell prepared. With this feature, you can cast the spell without\nexpending a spell slot to contact your patron, and you automatically succeed on the spell’s saving throw.\nOnce you cast the spell with this feature, you can’t do so in this way again until you finish a Long Rest."
		},
		{
			"name": "Mystic Arcanum",
			"level": 11,
			"headingLevel": 3,
			"description": "Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can\ncast it in this way again.\nAs shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way\nwhen you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of\nyour Mystic Arcanum when you finish a Long Rest.\nWhenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same\nlevel."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Fate is\nrecommended."
		},
		{
			"name": "Eldritch Master",
			"level": 20,
			"headingLevel": 3,
			"description": "When you use your Magical Cunning feature, you regain all your expended Pact Magic spell slots."
		}
	],
	"spellList": {
		"0": [
			{
				"name": "Chill Touch",
				"school": "Necromancy",
				"special": ""
			},
			{
				"name": "Eldritch Blast",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Mage Hand",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Minor Illusion",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Poison Spray",
				"school": "Necromancy",
				"special": ""
			},
			{
				"name": "Prestidigitation",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "True Strike",
				"school": "Divination",
				"special": ""
			}
		],
		"1": [
			{
				"name": "Bane",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Charm Person",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Comprehend Languages",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Detect Magic",
				"school": "Divination",
				"special": "C, R"
			},
			{
				"name": "Expeditious Retreat",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Hellish Rebuke",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Hex",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Hideous Laughter",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Illusory Script",
				"school": "Illusion",
				"special": "R, M"
			},
			{
				"name": "Protection from Evil and Good",
				"school": "Abjuration",
				"special": "C, M"
			},
			{
				"name": "Speak with Animals",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Unseen Servant",
				"school": "Conjuration",
				"special": "R"
			}
		],
		"2": [
			{
				"name": "Darkness",
				"school": "Evocation",
				"special": "C"
			},
			{
				"name": "Enthrall",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Hold Person",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Invisibility",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Mind Spike",
				"school": "Divination",
				"special": "C"
			},
			{
				"name": "Mirror Image",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Misty Step",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Ray of Enfeeblement",
				"school": "Necromancy",
				"special": "C"
			},
			{
				"name": "Spider Climb",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Suggestion",
				"school": "Enchantment",
				"special": "C"
			}
		],
		"3": [
			{
				"name": "Counterspell",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Dispel Magic",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Fear",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Fly",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Gaseous Form",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Hypnotic Pattern",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Magic Circle",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Major Image",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Remove Curse",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Tongues",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Vampiric Touch",
				"school": "Necromancy",
				"special": "C"
			}
		],
		"4": [
			{
				"name": "Banishment",
				"school": "Abjuration",
				"special": "C"
			},
			{
				"name": "Blight",
				"school": "Necromancy",
				"special": ""
			},
			{
				"name": "Charm Monster",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Dimension Door",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Hallucinatory Terrain",
				"school": "Illusion",
				"special": ""
			}
		],
		"5": [
			{
				"name": "Contact Other Plane",
				"school": "Divination",
				"special": "R"
			},
			{
				"name": "Dream",
				"school": "Illusion",
				"special": ""
			},
			{
				"name": "Hold Monster",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Mislead",
				"school": "Illusion",
				"special": "C"
			},
			{
				"name": "Planar Binding",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Scrying",
				"school": "Divination",
				"special": "C, M"
			},
			{
				"name": "Teleportation Circle",
				"school": "Conjuration",
				"special": "M"
			}
		],
		"6": [
			{
				"name": "Circle of Death",
				"school": "Necromancy",
				"special": "M"
			},
			{
				"name": "Create Undead",
				"school": "Necromancy",
				"special": "M"
			},
			{
				"name": "Eyebite",
				"school": "Necromancy",
				"special": "C"
			},
			{
				"name": "True Seeing",
				"school": "Divination",
				"special": "M"
			}
		],
		"7": [
			{
				"name": "Etherealness",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Finger of Death",
				"school": "Necromancy",
				"special": ""
			},
			{
				"name": "Forcecage",
				"school": "Evocation",
				"special": "C, M"
			},
			{
				"name": "Plane Shift",
				"school": "Conjuration",
				"special": "M"
			}
		],
		"8": [
			{
				"name": "Befuddlement",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Demiplane",
				"school": "Conjuration",
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
				"name": "Power Word Stun",
				"school": "Enchantment",
				"special": ""
			}
		],
		"9": [
			{
				"name": "Astral Projection",
				"school": "Necromancy",
				"special": "M"
			},
			{
				"name": "Foresight",
				"school": "Divination",
				"special": ""
			},
			{
				"name": "Gate",
				"school": "Conjuration",
				"special": "C, M"
			},
			{
				"name": "Imprisonment",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Power Word Kill",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "True Polymorph",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Weird",
				"school": "Illusion",
				"special": "C"
			}
		]
	},
	"spellcastingAbility": "Charisma"
};

export default warlock;
