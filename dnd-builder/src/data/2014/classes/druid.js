const druid = {
	"name": "Druid",
	"hitDie": 8,
	"startingGold": "2d4 x 10",
	"subclassName": "Druid Circle",
	"suggestedAbilities": "Wisdom, Constitution",
	"primaryAbility": [
		"Wisdom"
	],
	"armorProficiencies": "light armor, medium armor, shields (druids will not wear armor or use shields made of metal)",
	"weaponProficiencies": "clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
	"toolProficiencies": "herbalism kit",
	"savingThrows": [
		"Intelligence",
		"Wisdom"
	],
	"skillChoices": {
		"count": 2,
		"from": [
			"Arcana",
			"Animal Handling",
			"Insight",
			"Medicine",
			"Nature",
			"Perception",
			"Religion",
			"Survival"
		],
		"raw": "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival"
	},
	"startingEquipment": [
		"(a) a wooden shield or (b) any simple weapon",
		"(a) a scimitar or (b) any simple melee weapon",
		"Leather Armor, an explorer's pack, and a druidic focus"
	],
	"table": {
		"caption": "Table: The Druid",
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
				"Druidic, Spellcasting",
				"2",
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
				"Wild Shape, Druid Circle",
				"2",
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
				"2",
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
				"Wild Shape improvement, Ability Score Improvement",
				"3",
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
				"-",
				"3",
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
				"Druid Circle feature",
				"3",
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
				"3",
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
				"Wild Shape improvement, Ability Score Improvement",
				"3",
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
				"3",
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
				"Druid Circle feature",
				"4",
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
				"-",
				"4",
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
				"4",
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
				"4",
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
				"Druid Circle feature",
				"4",
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
				"4",
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
				"4",
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
				"-",
				"4",
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
				"Timeless Body, Beast Spells",
				"4",
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
				"4",
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
				"Archdruid",
				"4",
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
			"name": "Druidic",
			"headingLevel": 2,
			"description": "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
		},
		{
			"name": "Spellcasting",
			"headingLevel": 2,
			"description": "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.\nCantrips\nAt 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.\nPreparing and Casting Spells\nThe Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level ar 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\nYou can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nWisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Wisdom modifier\nSpell attack modifier = your proficiency bonus + your Wisdom modifier\nRitual Casting\nYou can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.\nSpellcasting Focus\nYou can use a druidic focus (see \"Equipment\") as a spellcasting focus for your druid spells."
		},
		{
			"name": "Wild Shape",
			"headingLevel": 2,
			"description": "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\nWhile you are transformed, the following rules apply:\n• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.\n• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\n• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.\n• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.\n• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
		},
		{
			"name": "Druid Circle",
			"headingLevel": 2,
			"description": "At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
		},
		{
			"name": "Ability Score Improvement",
			"headingLevel": 2,
			"description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
		},
		{
			"name": "Timeless Body",
			"headingLevel": 2,
			"description": "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
		},
		{
			"name": "Beast Spells",
			"headingLevel": 2,
			"description": "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
		},
		{
			"name": "Archdruid",
			"headingLevel": 2,
			"description": "At 20th level, you can use your Wild Shape an unlimited number of times.\nAdditionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
		},
		{
			"name": "Circle of the Land",
			"headingLevel": 2,
			"description": "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
		},
		{
			"name": "Bonus Cantrip",
			"headingLevel": 3,
			"description": "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
		},
		{
			"name": "Natural Recovery",
			"headingLevel": 3,
			"description": "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.\nFor example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
		},
		{
			"name": "Circle Spells",
			"headingLevel": 3,
			"description": "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.\nChoose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.\nOnce you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
		},
		{
			"name": "Land’s Stride",
			"headingLevel": 3,
			"description": "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
		},
		{
			"name": "Nature’s Ward",
			"headingLevel": 3,
			"description": "When you reach 10th level, you can’t be charmed or frightened by elementals or fey, and you are immune to poison and disease."
		},
		{
			"name": "Nature’s Sanctuary",
			"headingLevel": 3,
			"description": "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.\nThe creature is aware of this effect before it makes its attack against you."
		},
		{
			"name": "Sacred Plants and Wood",
			"headingLevel": 2,
			"description": "A druid holds certain plants to be sacred, particularly alder, ash, birch, elder, hazel, holly, juniper, mistletoe, oak, rowan, willow, and yew. Druids often use such plants as part of a spellcasting focus, incorporating lengths of oak or yew or sprigs of mistletoe.\nSimilarly, a druid uses such woods to make other objects, such as weapons and shields. Yew is associated with death and rebirth, so weapon handles for scimitars or sickles might be fashioned from it. Ash is associated with life and oak with strength. These woods make excellent hafts or whole weapons, such as clubs or quarterstaffs, as well as shields. Alder is associated with air, and it might be used for thrown weapons, such as darts or javelins.\nDruids from regions that lack the plants described here have chosen other plants to take on similar uses. For instance, a druid of a desert region might value the yucca tree and cactus plants."
		},
		{
			"name": "Druids and the Gods",
			"headingLevel": 2,
			"description": "Some druids venerate the forces of nature themselves, but most druids are devoted to one of the many nature deities worshiped in the multiverse (the lists of gods in Pantheons include many such deities). The worship of these deities is often considered a more ancient tradition than the faiths of clerics and urbanized peoples."
		},
		{
			"name": "Attributes",
			"headingLevel": 1,
			"description": "Caster Progression\nfull\nHit Die\nd8\nSpellcasting Ability\nWisdom\nStarting Gold\n2d4 x 10\nSubclass Name\nDruid Circle\nSuggested Abilities\nWisdom, Constitution\nfilter-Armor Proficiency\nLight, Medium, Shields\nfilter-Caster Progression\nFull\nfilter-Hit Die\nd8\nfilter-Primary Ability\nWisdom\nfilter-Spell Type\nPrimal\nfilter-Weapon Proficiency\nClub, Dagger, Dart, Javelin, Mace, Quarterstaff, Scimitar, Sickle, Sling, Spear\nconst colorMode = \"light\"\nif(colorMode === \"dark\"){\n$(\"#pagecontent\").addClass(\"dark\")\n}\nif ( window.location !== window.parent.location ) {\n// The page is in an iframe\ndocument.getElementById(\"characters-cta\").style.display = \"none\";\n}\nif (!document.body.classList.contains(\"charmancer\")) {\n// Remove the margin-bottom from the page title in web compendium and iframe compendium popout\nconst pageTitle = document.getElementsByClassName(\"page-title\")[0];\nif (pageTitle) {\npageTitle.style.marginBottom = \"0\";\n}\n}\nView All Classes &raquo;"
		}
	],
	"spellcastingAbility": "Wisdom"
};

export default druid;
