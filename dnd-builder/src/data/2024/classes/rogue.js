const rogue = {
	"name": "Rogue",
	"edition": "2024",
	"hitDie": 8,
	"primaryAbility": [
		"Dexterity"
	],
	"suggestedAbilities": "Dexterity",
	"savingThrows": [
		"Dexterity",
		"Intelligence"
	],
	"skillChoices": {
		"count": 4,
		"from": [
			"Acrobatics",
			"Athletics",
			"Deception",
			"Insight",
			"Intimidation",
			"Investigation",
			"Perception",
			"Persuasion",
			"Sleight of Hand",
			"Stealth"
		],
		"raw": "Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, or Stealth"
	},
	"armorProficiencies": "Light Armor",
	"weaponProficiencies": "Simple weapons and Martial weapons that have the Finesse or Light property",
	"toolProficiencies": "Thieves’ Tools",
	"startingEquipmentRaw": "Choose A or B: (A) Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves’ Tools, Burglar’s Pack, and 8 GP; or (B) 100 GP",
	"startingEquipment": [
		"(A) Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves’ Tools, Burglar’s Pack, and 8 GP",
		"(B) 100 GP"
	],
	"startingGold": "",
	"table": {
		"caption": "The Rogue",
		"columns": [
			"Level",
			"Proficiency Bonus",
			"Features",
			"Sneak Attack"
		],
		"rows": [
			[
				"1",
				"+2",
				"Expertise, Sneak Attack, Thieves’ Cant, Weapon Mastery",
				"1d6"
			],
			[
				"2",
				"+2",
				"Cunning Action",
				"1d6"
			],
			[
				"3",
				"+2",
				"Rogue Subclass, Steady Aim",
				"2d6"
			],
			[
				"4",
				"+2",
				"Ability Score Improvement",
				"2d6"
			],
			[
				"5",
				"+3",
				"Cunning Strike, Uncanny Dodge",
				"3d6"
			],
			[
				"6",
				"+3",
				"Expertise",
				"3d6"
			],
			[
				"7",
				"+3",
				"Evasion, Reliable Talent",
				"4d6"
			],
			[
				"8",
				"+3",
				"Ability Score Improvement",
				"4d6"
			],
			[
				"9",
				"+4",
				"Subclass feature",
				"5d6"
			],
			[
				"10",
				"+4",
				"Ability Score Improvement",
				"5d6"
			],
			[
				"11",
				"+4",
				"Improved Cunning Strike",
				"6d6"
			],
			[
				"12",
				"+4",
				"Ability Score Improvement",
				"6d6"
			],
			[
				"13",
				"+5",
				"Subclass feature",
				"7d6"
			],
			[
				"14",
				"+5",
				"Devious Strikes",
				"7d6"
			],
			[
				"15",
				"+5",
				"Slippery Mind",
				"8d6"
			],
			[
				"16",
				"+5",
				"Ability Score Improvement",
				"8d6"
			],
			[
				"17",
				"+6",
				"Subclass feature",
				"9d6"
			],
			[
				"18",
				"+6",
				"Elusive",
				"9d6"
			],
			[
				"19",
				"+6",
				"Epic Boon",
				"10d6"
			],
			[
				"20",
				"+6",
				"Stroke of Luck",
				"10d6"
			]
		]
	},
	"features": [
		{
			"name": "Expertise",
			"level": 1,
			"headingLevel": 3,
			"description": "You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if\nyou have proficiency in them.\nAt Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice."
		},
		{
			"name": "Sneak Attack",
			"level": 1,
			"headingLevel": 3,
			"description": "You know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one\ncreature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged\nweapon. The extra damage’s type is the same as the weapon’s type.\nYou don’t need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally\ndoesn’t have the Incapacitated condition, and you don’t have Disadvantage on the attack roll.\nThe extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features\ntable."
		},
		{
			"name": "Thieves’ Cant",
			"level": 1,
			"headingLevel": 3,
			"description": "You picked up various languages in the communities where you plied your roguish talents. You know Thieves’ Cant and\none other language of your choice, which you choose from the language tables in \"Character Creation\"."
		},
		{
			"name": "Weapon Mastery",
			"level": 1,
			"headingLevel": 3,
			"description": "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which\nyou have proficiency, such as Daggers and Shortbows.\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to\nusing the mastery properties of Scimitars and Shortswords."
		},
		{
			"name": "Cunning Action",
			"level": 2,
			"headingLevel": 3,
			"description": "Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following\nactions as a Bonus Action: Dash, Disengage, or Hide."
		},
		{
			"name": "Rogue Subclass",
			"level": 3,
			"headingLevel": 3,
			"description": "You gain a Rogue subclass of your choice. The Thief subclass is\ndetailed after this class’s description. A subclass is a specialization that grants you features at certain Rogue\nlevels. For the rest of your career, you gain each of your subclass’s features that are of your Rogue level or\nlower."
		},
		{
			"name": "Steady Aim",
			"level": 3,
			"headingLevel": 3,
			"description": "As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature\nonly if you haven’t moved during this turn, and after you use it, your Speed is 0 until the end of the current\nturn."
		},
		{
			"name": "Ability Score Improvement",
			"level": 4,
			"headingLevel": 3,
			"description": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You\ngain this feature again at Rogue levels 8, 10, 12, and 16."
		},
		{
			"name": "Cunning Strike",
			"level": 5,
			"headingLevel": 3,
			"description": "You’ve developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the\nfollowing Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you\nmust forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the\nattack’s damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack’s damage\nbefore rolling.\nIf a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency\nBonus.\nPoison (Cost: 1d6). You add a toxin to your strike, forcing the target to make a\nConstitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each\nof its turns, the Poisoned target repeats the save, ending the effect on itself on a success.\nTo use this effect, you must have a Poisoner’s Kit on your person.\nTrip (Cost: 1d6). If the target is Large or smaller, it must succeed on a Dexterity\nsaving throw or have the Prone condition.\nWithdraw (Cost: 1d6). Immediately after the attack, you move up to half your Speed\nwithout provoking Opportunity Attacks."
		},
		{
			"name": "Uncanny Dodge",
			"level": 5,
			"headingLevel": 3,
			"description": "When an attacker that you can see hits you with an attack roll, you can take a Reaction to halve the attack’s damage\nagainst you (round down)."
		},
		{
			"name": "Evasion",
			"level": 7,
			"headingLevel": 3,
			"description": "You can nimbly dodge out of the way of certain dangers. When you’re subjected to an effect that allows you to make a\nDexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and\nonly half damage if you fail. You can’t use this feature if you have the Incapacitated condition."
		},
		{
			"name": "Reliable Talent",
			"level": 7,
			"headingLevel": 3,
			"description": "Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9\nor lower as a 10."
		},
		{
			"name": "Improved Cunning Strike",
			"level": 11,
			"headingLevel": 3,
			"description": "You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each\neffect."
		},
		{
			"name": "Devious Strikes",
			"level": 14,
			"headingLevel": 3,
			"description": "You’ve practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike\noptions.\nDaze (Cost: 2d6). The target must succeed on a Constitution saving throw, or on its\nnext turn, it can do only one of the following: move or take an action or a Bonus Action.\nKnock Out (Cost: 6d6). The target must succeed on a Constitution saving throw, or it\nhas the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target repeats the save at\nthe end of each of its turns, ending the effect on itself on a success.\nObscure (Cost: 3d6). The target must succeed on a Dexterity saving throw, or it has\nthe Blinded condition until the end of its next turn."
		},
		{
			"name": "Slippery Mind",
			"level": 15,
			"headingLevel": 3,
			"description": "Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving\nthrows."
		},
		{
			"name": "Elusive",
			"level": 18,
			"headingLevel": 3,
			"description": "You’re so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against\nyou unless you have the Incapacitated condition."
		},
		{
			"name": "Epic Boon",
			"level": 19,
			"headingLevel": 3,
			"description": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of the Night\nSpirit is recommended."
		},
		{
			"name": "Stroke of Luck",
			"level": 20,
			"headingLevel": 3,
			"description": "You have a marvelous knack for succeeding when you need to. If you fail a D20 Test, you can turn the roll into a\n20.\nOnce you use this feature, you can’t use it again until you finish a Short or Long Rest."
		}
	],
	"spellList": {},
	"spellcastingAbility": ""
};

export default rogue;
