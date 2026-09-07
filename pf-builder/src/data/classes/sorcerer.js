const sorcerer = {
	name: 'Sorcerer',
	role: 'A sorcerer is a spontaneous arcane blaster and utility caster who channels innate magical power inherited from her bloodline rather than years of study. She casts fewer spells known than a wizard but can throw them out far more often, making her a flexible and durable presence in a fight.',
	alignment: 'Any',
	hitDie: 'd6',
	startingWealth: '2d6 × 10 gp (average 70 gp)',
	bab: '1/2',
	specialByLevel: [
		'Bloodline power, cantrips, eschew materials', // 1
		'', // 2
		'Bloodline power, bloodline spell', // 3
		'', // 4
		'Bloodline spell', // 5
		'', // 6
		'Bloodline feat, bloodline spell', // 7
		'', // 8
		'Bloodline power, bloodline spell', // 9
		'', // 10
		'Bloodline spell', // 11
		'', // 12
		'Bloodline feat, bloodline spell', // 13
		'', // 14
		'Bloodline power, bloodline spell', // 15
		'', // 16
		'Bloodline spell', // 17
		'', // 18
		'Bloodline feat, bloodline spell', // 19
		'Bloodline power', // 20
	],
	saves: { fort: 'Poor', ref: 'Poor', will: 'Good' },
	classSkills: ['Appraise', 'Bluff', 'Craft', 'Fly', 'Intimidate', 'Knowledge (Arcana)', 'Profession', 'Spellcraft', 'Use Magic Device'],
	skillRanksPerLevel: 2,
	keyAbility: 'Charisma',
	description: 'Sorcerers wield magic not through study but through the raw power of their blood, drawing on a magical bloodline inherited from a draconic, fiendish, celestial, or otherwise supernatural ancestor. This heritage manifests as an innate talent for spellcasting alongside a suite of unique bloodline abilities. Distrusted by some for the unpredictable and mysterious source of their gifts, sorcerers are nonetheless prized for their raw versatility in battle.',
	spellcasting: {
		type: 'Arcane',
		keyAbility: 'Charisma',
		style: 'Spontaneous',
		description: 'A sorcerer knows a limited number of spells drawn from the sorcerer/wizard list and can cast any known spell instantly without preparation, so long as she has an available spell slot. Her bloodline determines bonus spells, bonus feats, and a handful of special powers gained as she advances in level.',
	},
	// Table: Sorcerer Spells per Day. Index 0 = character level 1 ... index 19 = level 20.
	// Each row is [level0Slots, level1Slots, ..., level9Slots]; 0 means "—" (not yet available).
	spellsPerDay: [
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 3, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 4, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 5, 3, 0, 0, 0, 0, 0, 0, 0],
		[6, 6, 4, 0, 0, 0, 0, 0, 0, 0],
		[6, 6, 5, 3, 0, 0, 0, 0, 0, 0],
		[6, 6, 6, 4, 0, 0, 0, 0, 0, 0],
		[6, 6, 6, 5, 3, 0, 0, 0, 0, 0],
		[6, 6, 6, 6, 4, 0, 0, 0, 0, 0],
		[6, 6, 6, 6, 5, 3, 0, 0, 0, 0],
		[6, 6, 6, 6, 6, 4, 0, 0, 0, 0],
		[6, 6, 6, 6, 6, 5, 3, 0, 0, 0],
		[6, 6, 6, 6, 6, 6, 4, 0, 0, 0],
		[6, 6, 6, 6, 6, 6, 5, 3, 0, 0],
		[6, 6, 6, 6, 6, 6, 6, 4, 0, 0],
		[6, 6, 6, 6, 6, 6, 6, 5, 3, 0],
		[6, 6, 6, 6, 6, 6, 6, 6, 4, 0],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
	],
	// Table: Sorcerer Spells Known. Same shape as spellsPerDay.
	spellsKnown: [
		[4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
		[5, 2, 0, 0, 0, 0, 0, 0, 0, 0],
		[5, 3, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 3, 1, 0, 0, 0, 0, 0, 0, 0],
		[6, 4, 2, 0, 0, 0, 0, 0, 0, 0],
		[7, 4, 2, 1, 0, 0, 0, 0, 0, 0],
		[7, 5, 3, 2, 0, 0, 0, 0, 0, 0],
		[8, 5, 3, 2, 1, 0, 0, 0, 0, 0],
		[8, 5, 4, 3, 2, 0, 0, 0, 0, 0],
		[9, 5, 4, 3, 2, 1, 0, 0, 0, 0],
		[9, 5, 5, 4, 3, 2, 0, 0, 0, 0],
		[9, 5, 5, 4, 3, 2, 1, 0, 0, 0],
		[9, 5, 5, 4, 4, 3, 2, 0, 0, 0],
		[9, 5, 5, 4, 4, 3, 2, 1, 0, 0],
		[9, 5, 5, 4, 4, 4, 3, 2, 0, 0],
		[9, 5, 5, 4, 4, 4, 3, 2, 1, 0],
		[9, 5, 5, 4, 4, 4, 3, 3, 2, 0],
		[9, 5, 5, 4, 4, 4, 3, 3, 2, 1],
		[9, 5, 5, 4, 4, 4, 3, 3, 3, 2],
		[9, 5, 5, 4, 4, 4, 3, 3, 3, 3],
	],
	features: [
		{ level: 1, name: 'Bloodline', description: 'A sorcerer chooses a bloodline (such as Aberrant, Abyssal, Arcane, Celestial, Draconic, or Fey) that determines a bonus class skill, a bloodline arcana, bonus spells known at 3rd level and every odd level thereafter, bonus powers at 1st, 3rd, 9th, 15th, and 20th level, and bonus feats gained at 7th, 13th, and 19th level.' },
		{ level: 1, name: 'Cantrips', description: 'A sorcerer learns a number of cantrips (0-level spells) that can be cast at will and do not consume spell slots.' },
		{ level: 1, name: 'Eschew Materials', description: 'A sorcerer gains Eschew Materials as a bonus feat, allowing her to cast most spells without needing material components.' },
		{ level: 7, name: 'Bloodline Feat', description: 'The sorcerer gains a bonus feat selected from a list determined by her bloodline.' },
		{ level: 13, name: 'Bloodline Feat', description: 'The sorcerer gains a second bonus feat selected from her bloodline\'s feat list.' },
		{ level: 19, name: 'Bloodline Feat', description: 'The sorcerer gains a third bonus feat selected from her bloodline\'s feat list.' },
	],
};

export default sorcerer;
