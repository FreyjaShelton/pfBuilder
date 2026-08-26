const bard = {
	name: 'Bard',
	role: 'A bard is a versatile support and skill character who bolsters allies with inspiring performances, weakens foes with countersong and distraction, and rounds out the party with broad skill knowledge and a flexible arcane spell list. Bards are as comfortable talking their way past a threat as fighting it.',
	alignment: 'Any',
	hitDie: 'd8',
	startingWealth: '3d6 × 10 gp (average 105 gp)',
	bab: '3/4',
	specialByLevel: [
		'Bardic knowledge, bardic performance, cantrips, countersong, distraction, fascinate, inspire courage +1', // 1
		'Versatile performance, well-versed', // 2
		'Inspire competence +2', // 3
		'', // 4
		'Inspire courage +2, lore master 1/day', // 5
		'Suggestion, versatile performance', // 6
		'Inspire competence +3', // 7
		'Dirge of doom', // 8
		'Inspire greatness', // 9
		'Jack-of-all-trades, versatile performance', // 10
		'Inspire competence +4, inspire courage +3, lore master 2/day', // 11
		'Soothing performance', // 12
		'', // 13
		'Frightening tune, versatile performance', // 14
		'Inspire competence +5, inspire heroics', // 15
		'', // 16
		'Inspire courage +4, lore master 3/day', // 17
		'Mass suggestion, versatile performance', // 18
		'Inspire competence +6', // 19
		'Deadly performance', // 20
	],
	saves: { fort: 'Poor', ref: 'Good', will: 'Good' },
	classSkills: ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge (Arcana)', 'Knowledge (Dungeoneering)', 'Knowledge (Engineering)', 'Knowledge (Geography)', 'Knowledge (History)', 'Knowledge (Local)', 'Knowledge (Nature)', 'Knowledge (Nobility)', 'Knowledge (Planes)', 'Knowledge (Religion)', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Use Magic Device'],
	skillRanksPerLevel: 6,
	keyAbility: 'Charisma',
	description: 'Untold wonders and secrets exist for those skillful enough to discover them, and no one is more adept at drawing out this hidden knowledge than the bard. Equal parts scholar, wit, and performer, bards use music, poetry, and magic to unravel the wiles of the world, weaving spells with words and melody to inspire allies and confound foes.',
	spellcasting: { type: 'Arcane', keyAbility: 'Charisma', style: 'Spontaneous', description: 'A bard casts a limited number of arcane spells known from the bard spell list without preparation, similar to a sorcerer, and can cast any spell she knows on the fly. All bard spells have a verbal component and are cast through performance.' },
	features: [
		{ level: 1, name: 'Bardic Knowledge', description: 'A bard adds half her class level (minimum 1) to all Knowledge skill checks and may make Knowledge checks untrained.' },
		{ level: 1, name: 'Bardic Performance', description: 'A bard can use music or poetics to produce magical effects for a number of rounds per day equal to 4 + her Charisma modifier, gaining more rounds each level; starting a performance is a standard action.' },
		{ level: 1, name: 'Cantrips', description: 'A bard can prepare a number of cantrips, or 0-level spells, which can be cast repeatedly without expending spell slots.' },
		{ level: 1, name: 'Countersong', description: 'A bard can use performance to counter magical effects that depend on sound, allowing affected allies to reroll their saving throw.' },
		{ level: 1, name: 'Distraction', description: 'A bard can use performance to counter magical effects that depend on sight, allowing affected allies to reroll their saving throw.' },
		{ level: 1, name: 'Fascinate', description: 'A bard can use performance to cause one or more creatures to become fascinated with her, sitting quietly and taking no actions.' },
		{ level: 1, name: 'Inspire Courage +1', description: 'A bard can use performance to inspire courage in her allies, granting a competence bonus on saves against charm/fear and on attack and weapon damage rolls, which improves at higher levels.' },
		{ level: 2, name: 'Versatile Performance', description: 'A bard can substitute her bonus in a chosen Perform skill for associated skills, such as using Perform (act) in place of Bluff or Disguise checks.' },
		{ level: 2, name: 'Well-Versed', description: 'A bard gains a +4 bonus on saving throws against bardic performance, sonic, and language-dependent effects.' },
		{ level: 3, name: 'Inspire Competence +2', description: 'A bard can use performance to help an ally succeed at a task, granting a competence bonus on skill checks that increases at higher levels.' },
		{ level: 5, name: 'Inspire Courage +2', description: 'The competence bonus granted by Inspire Courage increases to +2.' },
		{ level: 5, name: 'Lore Master', description: 'Once per day, a bard can take 10 on a Knowledge skill check even under duress; this usage increases at higher levels.' },
		{ level: 6, name: 'Suggestion', description: 'A bard can use performance to make a suggestion (as the spell) to a creature she has already fascinated.' },
		{ level: 7, name: 'Inspire Competence +3', description: 'The competence bonus granted by Inspire Competence increases to +3.' },
		{ level: 8, name: 'Dirge of Doom', description: 'A bard can use performance to cause creatures within 30 feet to become shaken for as long as the performance continues.' },
		{ level: 9, name: 'Inspire Greatness', description: 'A bard can use performance to grant an ally 2 bonus Hit Dice, a +2 competence bonus on attack rolls, and a +1 bonus on Fortitude saves.' },
		{ level: 10, name: 'Jack-of-all-Trades', description: 'A bard may use any skill untrained, and at higher levels may take 10 on any skill check and eventually treat all skills as class skills.' },
		{ level: 11, name: 'Inspire Courage +3', description: 'The competence bonus granted by Inspire Courage increases to +3.' },
		{ level: 11, name: 'Inspire Competence +4', description: 'The competence bonus granted by Inspire Competence increases to +4.' },
		{ level: 12, name: 'Soothing Performance', description: 'A bard can use performance to heal her allies, functioning as mass cure serious wounds and removing the fatigued, sickened, and shaken conditions.' },
		{ level: 13, name: 'Bardic Performance (Swift Action)', description: 'A bard can start a bardic performance as a swift action instead of a standard action.' },
		{ level: 14, name: 'Frightening Tune', description: 'A bard can use performance to cause creatures within 30 feet to become frightened unless they succeed at a Will save.' },
		{ level: 15, name: 'Inspire Competence +5', description: 'The competence bonus granted by Inspire Competence increases to +5.' },
		{ level: 15, name: 'Inspire Heroics', description: 'A bard can use performance to grant allies a +4 morale bonus on saving throws or a +4 dodge bonus to AC.' },
		{ level: 17, name: 'Inspire Courage +4', description: 'The competence bonus granted by Inspire Courage increases to +4.' },
		{ level: 18, name: 'Mass Suggestion', description: 'A bard can use suggestion on all creatures she has fascinated at once, rather than just one.' },
		{ level: 19, name: 'Inspire Competence +6', description: 'The competence bonus granted by Inspire Competence increases to +6.' },
		{ level: 20, name: 'Deadly Performance', description: 'A bard can use performance to make a target that fails its Will save die; on a successful save the target is instead staggered for 1d4 rounds.' },
	],
};

export default bard;
