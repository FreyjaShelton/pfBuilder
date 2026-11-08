const paladin = {
	"name": "Paladin",
	"hitDie": 10,
	"startingGold": "5d4 x 10",
	"subclassName": "Sacred Oath",
	"suggestedAbilities": "Strength, Charisma",
	"primaryAbility": [
		"Strength",
		"Charisma"
	],
	"armorProficiencies": "light armor, medium armor, heavy armor, shields",
	"weaponProficiencies": "simple weapons, martial weapons",
	"toolProficiencies": "none",
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
		"raw": "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion"
	},
	"startingEquipment": [
		"(a) a martial weapon and a shield or (b) two martial weapons",
		"(a) five javelins or (b) any simple melee weapon",
		"(a) a priest's pack or (b) an explorer's pack",
		"Chain Mail and a holy symbol"
	],
	"table": {
		"caption": "Table: The Paladin",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Spell Slots per Spell Level 1st",
			"Spell Slots per Spell Level 2nd",
			"Spell Slots per Spell Level 3rd",
			"Spell Slots per Spell Level 4th",
			"Spell Slots per Spell Level 5th"
		],
		"rows": [
			[
				"1st",
				"+2",
				"Divine Sense, Lay on Hands",
				"-",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"2nd",
				"+2",
				"Fighting Style, Spellcasting, Divine Smite",
				"2",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"3rd",
				"+2",
				"Divine Health, Sacred Oath",
				"3",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"4th",
				"+2",
				"Ability Score Improvement",
				"3",
				"-",
				"-",
				"-",
				"-"
			],
			[
				"5th",
				"+3",
				"Extra Attack",
				"4",
				"2",
				"-",
				"-",
				"-"
			],
			[
				"6th",
				"+3",
				"Aura of Protection",
				"4",
				"2",
				"-",
				"-",
				"-"
			],
			[
				"7th",
				"+3",
				"Sacred Oath feature",
				"4",
				"3",
				"-",
				"-",
				"-"
			],
			[
				"8th",
				"+3",
				"Ability Score Improvement",
				"4",
				"3",
				"-",
				"-",
				"-"
			],
			[
				"9th",
				"+4",
				"-",
				"4",
				"3",
				"2",
				"-",
				"-"
			],
			[
				"10th",
				"+4",
				"Aura of Courage",
				"4",
				"3",
				"2",
				"-",
				"-"
			],
			[
				"11th",
				"+4",
				"Improved Divine Smite",
				"4",
				"3",
				"3",
				"-",
				"-"
			],
			[
				"12th",
				"+4",
				"Ability Score Improvement",
				"4",
				"3",
				"3",
				"-",
				"-"
			],
			[
				"13th",
				"+5",
				"-",
				"4",
				"3",
				"3",
				"1",
				"-"
			],
			[
				"14th",
				"+5",
				"Cleansing Touch",
				"4",
				"3",
				"3",
				"1",
				"-"
			],
			[
				"15th",
				"+5",
				"Sacred Oath feature",
				"4",
				"3",
				"3",
				"2",
				"-"
			],
			[
				"16th",
				"+5",
				"Ability Score Improvement",
				"4",
				"3",
				"3",
				"2",
				"-"
			],
			[
				"17th",
				"+6",
				"-",
				"4",
				"3",
				"3",
				"3",
				"1"
			],
			[
				"18th",
				"+6",
				"Aura improvements",
				"4",
				"3",
				"3",
				"3",
				"1"
			],
			[
				"19th",
				"+6",
				"Ability Score Improvement",
				"4",
				"3",
				"3",
				"3",
				"2"
			],
			[
				"20th",
				"+6",
				"Sacred Oath feature",
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
			"name": "Divine Sense",
			"headingLevel": 2,
			"description": "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.\nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
		},
		{
			"name": "Lay on Hands",
			"headingLevel": 2,
			"description": "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\nThis feature has no effect on undead and constructs."
		},
		{
			"name": "Fighting Style",
			"headingLevel": 2,
			"description": "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
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
			"description": "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit."
		},
		{
			"name": "Protection",
			"headingLevel": 3,
			"description": "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
		},
		{
			"name": "Divine Smite",
			"headingLevel": 2,
			"description": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
		},
		{
			"name": "Spellcasting",
			"headingLevel": 2,
			"description": "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.\nPreparing and Casting Spells\nThe Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nCharisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\nYou can use a holy symbol as a spellcasting focus for your paladin spells."
		},
		{
			"name": "Divine Health",
			"headingLevel": 2,
			"description": "By 3rd level, the divine magic flowing through you makes you immune to disease."
		},
		{
			"name": "Sacred Oath",
			"headingLevel": 2,
			"description": "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.\nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
		},
		{
			"name": "Oath Spells",
			"headingLevel": 3,
			"description": "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.\nIf you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
		},
		{
			"name": "Channel Divinity",
			"headingLevel": 3,
			"description": "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.\nWhen you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
		},
		{
			"name": "Ability Score Improvement",
			"headingLevel": 2,
			"description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
		},
		{
			"name": "Extra Attack",
			"headingLevel": 2,
			"description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
		},
		{
			"name": "Aura of Protection",
			"headingLevel": 2,
			"description": "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\nAt 18th level, the range of this aura increases to 30 feet."
		},
		{
			"name": "Aura of Courage",
			"headingLevel": 2,
			"description": "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.\nAt 18th level, the range of this aura increases to 30 feet."
		},
		{
			"name": "Improved Divine Smite",
			"headingLevel": 2,
			"description": "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
		},
		{
			"name": "Cleansing Touch",
			"headingLevel": 2,
			"description": "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
		},
		{
			"name": "Sacred Oaths",
			"headingLevel": 2,
			"description": "Becoming a paladin involves taking vows that commit the paladin to the cause of righteousness, an active path of fighting wickedness. The final oath, taken when he or she reaches 3rd level, is the culmination of all the paladin’s training. Some characters with this class don’t consider themselves true paladins until they have reached 3rd level and made this oath. For others, the actual swearing of the oath is a formality, an official stamp on what has always been true in the paladin’s heart."
		},
		{
			"name": "Oath of Devotion",
			"headingLevel": 3,
			"description": "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards.\nMany who swear this oath are devoted to gods of law and good and use their gods’ tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms."
		},
		{
			"name": "Tenets of Devotion",
			"headingLevel": 4,
			"description": "Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.\n•\nHonesty: Don’t lie or cheat. Let your word be your promise.\n•\nCourage: Never fear to act, though caution is wise.\n•\nCompassion: Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.\n•\nHonor: Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.\n•\nDuty: Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you."
		},
		{
			"name": "Oath Spells",
			"headingLevel": 4,
			"description": "You gain oath spells at the paladin levels listed."
		},
		{
			"name": "Channel Divinity",
			"headingLevel": 4,
			"description": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\nSacred Weapon: As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.\nYou can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.\nTurn the Unholy. As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.\nA turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
		},
		{
			"name": "Aura of Devotion",
			"headingLevel": 4,
			"description": "Starting at 7th level, you and friendly creatures within 10 feet of you can’t be charmed while you are conscious.\nAt 18th level, the range of this aura increases to 30 feet."
		},
		{
			"name": "Purity of Spirit",
			"headingLevel": 4,
			"description": "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
		},
		{
			"name": "Holy Nimbus",
			"headingLevel": 4,
			"description": "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.\nWhenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.\nIn addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.\nOnce you use this feature, you can’t use it again until you finish a long rest."
		},
		{
			"name": "Breaking Your Oath",
			"headingLevel": 2,
			"description": "A paladin tries to hold to the highest standards of conduct, but even the most virtuous paladin is fallible. Sometimes the right path proves too demanding, sometimes a situation calls for the lesser of two evils, and sometimes the heat of emotion causes a paladin to transgress his or her oath.\nA paladin who has broken a vow typically seeks absolution from a cleric who shares his or her faith or from another paladin of the same order. The paladin might spend an all-­night vigil in prayer as a sign of penitence, or undertake a fast or similar act of self-­denial. After a rite of confession and forgiveness, the paladin starts fresh.\nIf a paladin willfully violates his or her oath and shows no sign of repentance, the consequences can be more serious. At the GM’s discretion, an impenitent paladin might be forced to abandon this class and adopt another."
		},
		{
			"name": "Attributes",
			"headingLevel": 1,
			"description": "Caster Progression\nhalf\nHit Die\nd10\nSpellcasting Ability\nCharisma\nStarting Gold\n5d4 x 10\nSubclass Name\nSacred Oath\nSuggested Abilities\nStrength, Charisma\nfilter-Armor Proficiency\nLight, Medium, Heavy, Shields\nfilter-Caster Progression\nHalf\nfilter-Hit Die\nd10\nfilter-Primary Ability\nStrength, Charisma\nfilter-Spell Type\nDivine\nfilter-Weapon Proficiency\nSimple Weapons, Martial Weapons\nconst colorMode = \"light\"\nif(colorMode === \"dark\"){\n$(\"#pagecontent\").addClass(\"dark\")\n}\nif ( window.location !== window.parent.location ) {\n// The page is in an iframe\ndocument.getElementById(\"characters-cta\").style.display = \"none\";\n}\nif (!document.body.classList.contains(\"charmancer\")) {\n// Remove the margin-bottom from the page title in web compendium and iframe compendium popout\nconst pageTitle = document.getElementsByClassName(\"page-title\")[0];\nif (pageTitle) {\npageTitle.style.marginBottom = \"0\";\n}\n}\nView All Classes &raquo;"
		}
	],
	"spellcastingAbility": "Charisma"
};

export default paladin;
