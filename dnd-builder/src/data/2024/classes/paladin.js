const paladin = {
	"name": "Paladin",
	"edition": "2024",
	"hitDie": 10,
	"primaryAbility": [
		"Strength",
		"Charisma"
	],
	"suggestedAbilities": "Strength and Charisma",
	"savingThrows": [
		"Wisdom",
		"Charisma"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"Athletics",
			"Insight",
			"Intimidation",
			"Medicine",
			"Persuasion",
			"Religion"
		],
		"raw": "Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion, or Religion"
	},
	"armorProficiencies": "Light, Medium, and Heavy armor and Shields",
	"weaponProficiencies": "Simple and Martial weapons",
	"toolProficiencies": "None",
	"startingEquipmentRaw": "Choose A or B: (A) Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest’s Pack, and 9 GP; or (B) 150 GP",
	"startingEquipment": [
		"(A) Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest’s Pack, and 9 GP",
		"(B) 150 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Paladin",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Channel Divinity",
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
				"Lay On Hands, Spellcasting, Weapon Mastery",
				"-",
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
				"Fighting Style, Paladin’s Smite",
				"-",
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
				"Channel Divinity, Paladin Subclass",
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
				"Extra Attack, Faithful Steed",
				"2",
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
				"Aura of Protection",
				"2",
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
				"2",
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
				"2",
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
				"Abjure Foes",
				"2",
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
				"Aura of Courage",
				"2",
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
				"Radiant Strikes",
				"3",
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
				"3",
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
				"-",
				"3",
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
				"Restoring Touch",
				"3",
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
				"3",
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
				"3",
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
				"-",
				"3",
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
				"Aura Expansion",
				"3",
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
				"3",
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
				"Subclass feature",
				"3",
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
			"name": "Lay On Hands",
			"level": 1,
			"headingLevel": 3,
			"description": "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long\nRest.\nWith that pool, you can restore a total number of Hit Points equal to five times your Paladin level.\nAs a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing\nto\nrestore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.\nYou can also expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the\ncreature;\nthose points don’t also restore Hit Points to the creature."
		},
		{
			"name": "Spellcasting",
			"level": 1,
			"headingLevel": 3,
			"description": "You have learned to cast spells through prayer and meditation. See \"Spells\" for the rules on spellcasting. The\ninformation below details how you use those rules with Paladin spells, which appear in the Paladin spell list\nlater in\nthe class’s description.\nSpell Slots. The Paladin Features table shows how many spell slots you have to cast\nyour\nlevel 1+ spells. You regain all expended slots when you finish a Long Rest.\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are\navailable for\nyou to cast with this feature. To start, choose two level 1 Paladin spells. Heroism and Searing\nSmite are recommended.\nThe number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column\nof the\nPaladin Features table. Whenever that number increases, choose additional Paladin spells until the number of\nspells on\nyour list matches the number in the Paladin Features table. The chosen spells must be of a level for which you\nhave\nspell slots. For example, if you’re a level 5 Paladin, your list of prepared spells can include six Paladin\nspells of\nlevel 1 or 2 in any combination.\nIf another Paladin feature gives you spells that you always have prepared, those spells don’t count against the\nnumber of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for\nyou.\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can replace one\nspell\non your list with another Paladin spell for which you have spell slots.\nSpellcasting Ability. Charisma is your spellcasting ability for your Paladin spells.\nSpellcasting Focus. You can use a Holy Symbol as a Spellcasting Focus for your\nPaladin\nspells."
		},
		{
			"name": "Weapon Mastery",
			"level": 1,
			"headingLevel": 3,
			"description": "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with\nwhich\nyou have proficiency, such as Longswords and Javelins.\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch\nto\nusing the mastery properties of Halberds and Flails."
		},
		{
			"name": "Fighting Style",
			"level": 2,
			"headingLevel": 3,
			"description": "You gain a Fighting Style feat of your choice (see \"Feats\"). Instead of choosing one of those feats, you can\nchoose\nthe option below.\nBlessed Warrior. You learn two Cleric cantrips of your choice (see the Cleric class’s\nsection for a list of Cleric spells). Guidance and Sacred Flame are recommended. The chosen cantrips count as\nPaladin\nspells for you, and Charisma is your spellcasting ability for them. Whenever you gain a Paladin level, you can\nreplace\none of these cantrips with another Cleric cantrip."
		},
		{
			"name": "Paladin’s Smite",
			"level": 2,
			"headingLevel": 3,
			"description": "You always have the Divine Smite spell prepared. In addition, you can cast it without expending a spell slot,\nbut you\nmust finish a Long Rest before you can cast it in this way again."
		},
		{
			"name": "Channel Divinity",
			"level": 3,
			"headingLevel": 3,
			"description": "You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with\none\nsuch effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity\neffect\noptions. Each time you use this class’s Channel Divinity, you choose which effect from this class to create.\nYou can use this class’s Channel Divinity twice. You regain one of its expended uses when you finish a Short\nRest,\nand you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin\nlevel\n11.\nIf a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class’s\nSpellcasting\nfeature.\nDivine Sense. As a Bonus Action, you can open your awareness to detect Celestials,\nFiends,\nand Undead. For the next 10 minutes or until you have the Incapacitated condition, you know the location of any\ncreature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you\nalso\ndetect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell."
		},
		{
			"name": "Paladin Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Paladin subclass of your choice. The Oath of Devotion subclass is detailed after this class’s description. A subclass is a specialization that grants you\nfeatures at certain Paladin levels. For the rest of your career, you gain each of your subclass’s features that\nare of\nyour Paladin level or lower."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this\nfeature again at Paladin levels 8, 12, and 16."
		},
		{
			"name": "Extra Attack",
			"level": 5,
			"headingLevel": 3,
			"description": "You can attack twice instead of once whenever you take the Attack action on your turn."
		},
		{
			"name": "Faithful Steed",
			"level": 5,
			"headingLevel": 3,
			"description": "You can call on the aid of an otherworldly steed. You always have the Find Steed spell prepared.\nYou can also cast the spell once without expending a spell slot, and you regain the ability to do so when you\nfinish\na Long Rest."
		},
		{
			"name": "Aura of Protection",
			"level": 6,
			"headingLevel": 3,
			"description": "You radiate a protective, unseeable aura in a 10-foot Emanation that originates from you. The aura is inactive\nwhile\nyou have the Incapacitated condition.\nYou and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of\n+1).\nIf another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature\nchooses which aura while in them."
		},
		{
			"name": "Abjure Foes",
			"level": 9,
			"headingLevel": 3,
			"description": "As a Magic action, you can expend one use of this class’s Channel Divinity to overwhelm foes with awe. As you\npresent\nyour Holy Symbol or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one\ncreature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have\nthe\nFrightened condition for 1 minute or until it takes any damage. While Frightened in this way, a target can do\nonly one\nof the following on its turns: move, take an action, or take a Bonus Action."
		},
		{
			"name": "Aura of Courage",
			"level": 10,
			"headingLevel": 3,
			"description": "You and your allies have Immunity to the Frightened condition while in your Aura of Protection. If a Frightened\nally\nenters the aura, that condition has no effect on that ally while there."
		},
		{
			"name": "Radiant Strikes",
			"level": 11,
			"headingLevel": 3,
			"description": "Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an\nUnarmed Strike, the target takes an extra 1d8 Radiant damage."
		},
		{
			"name": "Restoring Touch",
			"level": 14,
			"headingLevel": 3,
			"description": "When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the\ncreature: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned. You must expend 5 Hit Points from the\nhealing\npool of Lay On Hands for each of these conditions you remove; those points don’t also restore Hit Points to the\ncreature."
		},
		{
			"name": "Aura Expansion",
			"level": 18,
			"headingLevel": 3,
			"description": "Your Aura of Protection is now a 30-foot Emanation."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of\nTruesight is\nrecommended."
		}
	],
	"spellList": {
		"1": [
			{
				"name": "Bless",
				"school": "Enchantment",
				"special": "C, M"
			},
			{
				"name": "Command",
				"school": "Enchantment",
				"special": ""
			},
			{
				"name": "Cure Wounds",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Detect Evil and Good",
				"school": "Divination",
				"special": "C"
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
				"name": "Divine Favor",
				"school": "Transmutation",
				"special": ""
			},
			{
				"name": "Divine Smite",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Heroism",
				"school": "Enchantment",
				"special": "C"
			},
			{
				"name": "Protection from Evil and Good",
				"school": "Abjuration",
				"special": "C, M"
			},
			{
				"name": "Purify Food and Drink",
				"school": "Transmutation",
				"special": "R"
			},
			{
				"name": "Searing Smite",
				"school": "Evocation",
				"special": ""
			},
			{
				"name": "Shield of Faith",
				"school": "Abjuration",
				"special": "C"
			}
		],
		"2": [
			{
				"name": "Aid",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Find Steed",
				"school": "Conjuration",
				"special": ""
			},
			{
				"name": "Gentle Repose",
				"school": "Necromancy",
				"special": "R, M"
			},
			{
				"name": "Lesser Restoration",
				"school": "Abjuration",
				"special": ""
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
				"name": "Prayer of Healing",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Protection from Poison",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Shining Smite",
				"school": "Transmutation",
				"special": "C"
			},
			{
				"name": "Warding Bond",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Zone of Truth",
				"school": "Enchantment",
				"special": ""
			}
		],
		"3": [
			{
				"name": "Create Food and Water",
				"school": "Conjuration",
				"special": ""
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
				"name": "Magic Circle",
				"school": "Abjuration",
				"special": "M"
			},
			{
				"name": "Remove Curse",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Revivify",
				"school": "Necromancy",
				"special": "M"
			}
		],
		"4": [
			{
				"name": "Aura of Life",
				"school": "Abjuration",
				"special": "C"
			},
			{
				"name": "Banishment",
				"school": "Abjuration",
				"special": "C"
			},
			{
				"name": "Death Ward",
				"school": "Abjuration",
				"special": ""
			},
			{
				"name": "Locate Creature",
				"school": "Divination",
				"special": "C"
			}
		],
		"5": [
			{
				"name": "Dispel Evil and Good",
				"school": "Abjuration",
				"special": "C"
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
				"name": "Raise Dead",
				"school": "Necromancy",
				"special": "M"
			}
		]
	},
	"spellcastingAbility": "Charisma"
};

export default paladin;
