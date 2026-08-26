const ranger = {
	name: 'Ranger',
	role: 'A versatile hunter and skirmisher who excels at tracking, wilderness survival, and fighting specific types of foes. Rangers can build toward ranged or two-weapon melee combat styles and eventually gain limited divine spellcasting and an animal companion or hunting bond, making them flexible damage-dealers and scouts.',
	alignment: 'Any',
	hitDie: 'd10',
	startingWealth: '5d6 × 10 gp (average 175 gp)',
	bab: 'Full',
	specialByLevel: [
		'1st favored enemy, track, wild empathy', // 1
		'Combat style feat', // 2
		'Endurance, 1st favored terrain', // 3
		"Hunter's bond", // 4
		'2nd favored enemy', // 5
		'Combat style feat', // 6
		'Woodland stride', // 7
		'Swift tracker, 2nd favored terrain', // 8
		'Evasion', // 9
		'3rd favored enemy, combat style feat', // 10
		'Quarry', // 11
		'Camouflage', // 12
		'3rd favored terrain', // 13
		'Combat style feat', // 14
		'4th favored enemy', // 15
		'Improved evasion', // 16
		'Hide in plain sight', // 17
		'4th favored terrain, combat style feat', // 18
		'Improved quarry', // 19
		'5th favored enemy, master hunter', // 20
	],
	saves: { fort: 'Good', ref: 'Good', will: 'Poor' },
	classSkills: ['Climb', 'Craft', 'Handle Animal', 'Heal', 'Intimidate', 'Knowledge (Dungeoneering)', 'Knowledge (Geography)', 'Knowledge (Nature)', 'Perception', 'Profession', 'Ride', 'Spellcraft', 'Stealth', 'Survival', 'Swim'],
	skillRanksPerLevel: 6,
	keyAbility: 'Wisdom and Dexterity or Strength',
	description: 'Rangers are skilled hunters and trackers who make their home in the wild, learning to defeat the types of enemies they hunt most and to master the terrain they patrol. Equally capable in melee or at range, rangers combine martial training with woodcraft and a touch of divine magic to become versatile, self-reliant adventurers.',
	spellcasting: {
		type: 'Divine',
		keyAbility: 'Wisdom',
		style: 'Prepared',
		description: 'Rangers begin casting a small number of divine spells at 4th level, preparing them after an hour of communing with nature; their effective caster level equals ranger level minus 3.',
	},
	features: [
		{ level: 1, name: 'Favored Enemy', description: 'The ranger selects a favored creature type, gaining +2 on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against it, plus +2 on attack and damage rolls; she gains an additional favored enemy (or increases an existing bonus) at 5th, 10th, 15th, and 20th level.' },
		{ level: 1, name: 'Track', description: 'The ranger adds half her level (minimum 1) to Survival checks made to follow tracks.' },
		{ level: 1, name: 'Wild Empathy', description: 'The ranger can improve the attitude of an animal, treating the check as a Diplomacy check made by a character with the ranger\'s total level plus Charisma modifier.' },
		{ level: 2, name: 'Combat Style Feat', description: 'The ranger selects a combat style (such as archery or two-weapon combat) and gains a bonus feat from that style, gaining additional style feats at 6th, 10th, 14th, and 18th level.' },
		{ level: 3, name: 'Endurance', description: 'The ranger gains Endurance as a bonus feat.' },
		{ level: 3, name: 'Favored Terrain', description: 'The ranger selects a favored terrain, gaining +2 on initiative and on Knowledge (geography), Perception, Stealth, and Survival checks there, and leaving no trail when traveling normally; she gains additional favored terrains at 8th, 13th, and 18th level.' },
		{ level: 4, name: 'Hunter\'s Bond', description: 'The ranger bonds with either her companions, allowing her to share half her favored enemy bonus with nearby allies, or with an animal companion that gains her favored enemy and terrain bonuses.' },
		{ level: 4, name: 'Spells', description: 'The ranger begins preparing and casting a small number of divine spells, with her effective caster level equal to her ranger level minus 3.' },
		{ level: 7, name: 'Woodland Stride', description: 'The ranger moves through natural undergrowth at normal speed without taking damage or suffering other impairment.' },
		{ level: 8, name: 'Swift Tracker', description: 'The ranger can move at normal speed while tracking without penalty, and at up to double speed with only a -10 penalty instead of -20.' },
		{ level: 9, name: 'Evasion', description: 'The ranger takes no damage on a successful Reflex save against attacks that normally deal half damage on a success, so long as she wears light or no armor.' },
		{ level: 11, name: 'Quarry', description: 'As a standard action, the ranger designates a favored-enemy target as her quarry, taking 10 on Survival checks to track it and gaining a +2 insight bonus on attack rolls against it, with critical threats against it automatically confirmed.' },
		{ level: 12, name: 'Camouflage', description: 'The ranger can use Stealth to hide in her favored terrain even without cover or concealment.' },
		{ level: 16, name: 'Improved Evasion', description: 'The ranger takes no damage on a successful Reflex save and only half damage on a failed one, improving her evasion ability.' },
		{ level: 17, name: 'Hide in Plain Sight', description: 'While in her favored terrain, the ranger can use Stealth even while being observed.' },
		{ level: 19, name: 'Improved Quarry', description: 'Designating a quarry becomes a free action, the ranger takes 20 on Survival checks to track it, and her insight bonus on attack rolls against it increases to +4.' },
		{ level: 20, name: 'Master Hunter', description: 'The ranger can track at full speed without penalty and, as a standard action, make a single attack against a favored enemy that forces a Fortitude save or the target dies (or takes heavy nonlethal damage).' },
	],
};

export default ranger;
