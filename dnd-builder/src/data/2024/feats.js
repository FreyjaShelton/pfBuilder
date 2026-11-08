const feats = [
	{
		"name": "Ability Score Improvement",
		"category": "General Feat",
		"prerequisite": "",
		"description": "Increase one ability score of your choice by 2, or increase two ability scores of your choice by 1. This feat can’t increase an ability score above 20.\nRepeatable. You can take this feat more than once."
	},
	{
		"name": "Alert",
		"category": "Origin Feat",
		"prerequisite": "",
		"description": "You gain the following benefits.\nInitiative Proficiency. When you roll Initiative, you can add your Proficiency Bonus to the roll.\nInitiative Swap. Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can’t make this swap if you or the ally has the Incapacitated condition."
	},
	{
		"name": "Archery",
		"category": "Fighting Style Feat",
		"prerequisite": "Fighting Style Feature",
		"description": "You gain a +2 bonus to attack rolls you make with Ranged weapons."
	},
	{
		"name": "Boon of Combat Prowess",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.\nPeerless Aim. When you miss with an attack roll, you can hit instead. Once you use this benefit, you can’t use it again until the start of your next turn."
	},
	{
		"name": "Boon of Dimensional Travel",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.\nBlink Steps. Immediately after you take the Attack action or the Magic action, you can teleport up to 30 feet to an unoccupied space you can see."
	},
	{
		"name": "Boon of Fate",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.\nImprove Fate. When you or another creature within 60 feet of you succeeds on or fails a D20 Test, you can roll 2d4 and apply the total rolled as a bonus or penalty to the d20 roll. Once you use this benefit, you can’t use it again until you roll Initiative or finish a Short or Long Rest."
	},
	{
		"name": "Boon of Irresistible Offense",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 30.\nOvercome Defenses. The Bludgeoning, Piercing, and Slashing damage you deal always ignores Resistance.\nOverwhelming Strike. When you roll a 20 on the d20 for an attack roll, you can deal extra damage to the target equal to the ability score increased by this feat. The extra damage’s type is the same as the attack’s type."
	},
	{
		"name": "Boon of Spell Recall",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+, Spellcasting Feature",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30.\nFree Casting. Whenever you cast a spell with a level 1–4 spell slot, roll 1d4. If the number you roll is the same as the slot’s level, the slot isn’t expended."
	},
	{
		"name": "Boon of the Night Spirit",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.\nMerge with Shadows. While within Dim Light or Darkness, you can give yourself the Invisible condition as a Bonus Action. The condition ends on you immediately after you take an action, a Bonus Action, or a Reaction.\nShadowy Form. While within Dim Light or Darkness, you have Resistance to all damage except Psychic and Radiant."
	},
	{
		"name": "Boon of Truesight",
		"category": "Epic Boon Feat",
		"prerequisite": "Level 19+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.\nTruesight. You have Truesight with a range of 60 feet."
	},
	{
		"name": "Defense",
		"category": "Fighting Style Feat",
		"prerequisite": "Fighting Style Feature",
		"description": "While you’re wearing Light, Medium, or Heavy armor, you gain a +1 bonus to Armor Class."
	},
	{
		"name": "Grappler",
		"category": "General Feat",
		"prerequisite": "Level 4+, Strength or Dexterity 13+",
		"description": "You gain the following benefits.\nAbility Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20.\nPunch and Grab. When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can use both the Damage and the Grapple option. You can use this benefit only once per turn.\nAttack Advantage. You have Advantage on attack rolls against a creature Grappled by you.\nFast Wrestler. You don't have to spend extra movement to move a creature Grappled by you if the creature is your size or smaller."
	},
	{
		"name": "Great Weapon Fighting",
		"category": "Fighting Style Feat",
		"prerequisite": "Fighting Style Feature",
		"description": "When you roll damage for an attack you make with a Melee weapon that you are holding with two hands, you can treat any 1 or 2 on a damage die as a 3. The weapon must have the Two-Handed or Versatile property to gain this benefit."
	},
	{
		"name": "Magic Initiate",
		"category": "Origin Feat",
		"prerequisite": "",
		"description": "You gain the following benefits.\nTwo Cantrips. You learn two cantrips of your choice from the Cleric, Druid, or Wizard spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat’s spells (choose when you select this feat).\nLevel 1 Spell. Choose a level 1 spell from the same list you selected for this feat’s cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\nSpell Change. Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list.\nRepeatable. You can take this feat more than once, but you must choose a different spell list each time."
	},
	{
		"name": "Savage Attacker",
		"category": "Origin Feat",
		"prerequisite": "",
		"description": "You’ve trained to deal particularly damaging strikes. Once per turn when you hit a target with a weapon, you can roll the weapon’s damage dice twice and use either roll against the target."
	},
	{
		"name": "Skilled",
		"category": "Origin Feat",
		"prerequisite": "",
		"description": "You gain proficiency in any combination of three skills or tools of your choice.\nRepeatable. You can take this feat more than once."
	},
	{
		"name": "Two-Weapon Fighting",
		"category": "Fighting Style Feat",
		"prerequisite": "Fighting Style Feature",
		"description": "When you make an extra attack as a result of using a weapon that has the Light property, you can add your ability modifier to the damage of that attack if you aren’t already adding it to the damage."
	}
];

export default feats;
