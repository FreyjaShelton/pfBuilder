const barbarian = {
	name: 'Barbarian',
	role: 'A barbarian is a front-line melee combatant who trades defense and finesse for raw offensive power. Fueled by rage, she deals heavy damage, shrugs off punishment, and excels at charging into the thick of battle rather than relying on tactics or magic.',
	alignment: 'Any Non-Lawful',
	hitDie: 'd12',
	startingWealth: '3d6 × 10 gp (average 105 gp)',
	bab: 'Full',
	specialByLevel: [
		'Fast movement, rage', // 1
		'Rage power, uncanny dodge', // 2
		'Trap sense +1', // 3
		'Rage power', // 4
		'Improved uncanny dodge', // 5
		'Rage power, trap sense +2', // 6
		'Damage reduction 1/—', // 7
		'Rage power', // 8
		'Trap sense +3', // 9
		'Damage reduction 2/—, rage power', // 10
		'Greater rage', // 11
		'Rage power, trap sense +4', // 12
		'Damage reduction 3/—', // 13
		'Indomitable will, rage power', // 14
		'Trap sense +5', // 15
		'Damage reduction 4/—, rage power', // 16
		'Tireless rage', // 17
		'Rage power, trap sense +6', // 18
		'Damage reduction 5/—', // 19
		'Mighty rage, rage power', // 20
	],
	saves: { fort: 'Good', ref: 'Poor', will: 'Poor' },
	classSkills: ['Acrobatics', 'Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Knowledge (Nature)', 'Perception', 'Ride', 'Survival', 'Swim'],
	skillRanksPerLevel: 4,
	keyAbility: 'Strength',
	description: 'Battle-possessed and driven by inner fury rather than training or discipline, barbarians are savage warriors who hail from uncivilized lands or tribal societies. They excel in combat, channeling primal rage to overcome foes far superior to themselves in skill or size.',
	spellcasting: null,
	features: [
		{ level: 1, name: 'Fast Movement', description: 'A barbarian\'s land speed is faster than the norm for her race by +10 feet, as long as she is not wearing heavy armor or carrying a heavy load.' },
		{ level: 1, name: 'Rage', description: 'A barbarian can call upon inner reserves of strength and ferocity for a limited number of rounds per day (4 + Con modifier), gaining +4 Strength, +4 Constitution, and +2 morale bonus on Will saves, but taking a -2 penalty to AC.' },
		{ level: 2, name: 'Rage Power', description: 'At 2nd level and every two levels thereafter, a barbarian gains a rage power, a special ability usable only while raging (such as Superstition, Beast Totem, or Roused Anger).' },
		{ level: 2, name: 'Uncanny Dodge', description: 'A barbarian can never be caught flat-footed, nor does she lose her Dex bonus to AC when the attacker is invisible.' },
		{ level: 3, name: 'Trap Sense +1', description: 'A barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. This bonus increases every three levels thereafter.' },
		{ level: 5, name: 'Improved Uncanny Dodge', description: 'A barbarian can no longer be flanked, except by a rogue of a level four levels higher than her own.' },
		{ level: 6, name: 'Trap Sense +2', description: 'The barbarian\'s trap sense bonus increases to +2.' },
		{ level: 7, name: 'Damage Reduction 1/—', description: 'A barbarian gains the ability to shrug off some amount of injury from any attack, reducing damage taken by 1 per hit. This amount increases by 1 every three levels thereafter.' },
		{ level: 9, name: 'Trap Sense +3', description: 'The barbarian\'s trap sense bonus increases to +3.' },
		{ level: 10, name: 'Damage Reduction 2/—', description: 'The barbarian\'s damage reduction increases to 2/—.' },
		{ level: 11, name: 'Greater Rage', description: 'The barbarian\'s bonuses while raging increase to +6 Strength, +6 Constitution, and +3 morale bonus on Will saves.' },
		{ level: 12, name: 'Trap Sense +4', description: 'The barbarian\'s trap sense bonus increases to +4.' },
		{ level: 13, name: 'Damage Reduction 3/—', description: 'The barbarian\'s damage reduction increases to 3/—.' },
		{ level: 14, name: 'Indomitable Will', description: 'While raging, a barbarian gains a +4 bonus on Will saves to resist enchantment spells and effects.' },
		{ level: 15, name: 'Trap Sense +5', description: 'The barbarian\'s trap sense bonus increases to +5.' },
		{ level: 16, name: 'Damage Reduction 4/—', description: 'The barbarian\'s damage reduction increases to 4/—.' },
		{ level: 17, name: 'Tireless Rage', description: 'A barbarian no longer becomes fatigued at the end of her rage.' },
		{ level: 18, name: 'Trap Sense +6', description: 'The barbarian\'s trap sense bonus increases to +6.' },
		{ level: 19, name: 'Damage Reduction 5/—', description: 'The barbarian\'s damage reduction increases to 5/—.' },
		{ level: 20, name: 'Mighty Rage', description: 'The barbarian\'s bonuses while raging increase to +8 Strength, +8 Constitution, and +4 morale bonus on Will saves.' },
	],
};

export default barbarian;
