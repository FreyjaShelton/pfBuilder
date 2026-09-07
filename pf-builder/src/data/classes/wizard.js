const wizard = {
	name: 'Wizard',
	role: 'A wizard is a scholarly arcane spellcaster who wields an enormous breadth of spells drawn from careful study and a personal spellbook. She is versatile and eventually devastating in combat, but relies on preparation, positioning, and party support to compensate for her fragility and limited weapon training.',
	alignment: 'Any',
	hitDie: 'd6',
	startingWealth: '2d6 × 10 gp (average 70 gp)',
	bab: '1/2',
	specialByLevel: [
		'Arcane bond, arcane school, cantrips, Scribe Scroll', // 1
		'', // 2
		'', // 3
		'', // 4
		'Bonus feat', // 5
		'', // 6
		'', // 7
		'', // 8
		'', // 9
		'Bonus feat', // 10
		'', // 11
		'', // 12
		'', // 13
		'', // 14
		'Bonus feat', // 15
		'', // 16
		'', // 17
		'', // 18
		'', // 19
		'Bonus feat', // 20
	],
	saves: { fort: 'Poor', ref: 'Poor', will: 'Good' },
	classSkills: ['Appraise', 'Craft', 'Fly', 'Knowledge (Arcana)', 'Knowledge (Dungeoneering)', 'Knowledge (Engineering)', 'Knowledge (Geography)', 'Knowledge (History)', 'Knowledge (Local)', 'Knowledge (Nature)', 'Knowledge (Nobility)', 'Knowledge (Planes)', 'Knowledge (Religion)', 'Linguistics', 'Profession', 'Spellcraft'],
	skillRanksPerLevel: 2,
	keyAbility: 'Intelligence',
	description: 'Wizards are learned spellcasters who unlock the secrets of arcane magic through years of rigorous study, recorded in a personal spellbook that they must maintain and protect. Where other casters rely on instinct or inherited power, the wizard\'s strength comes from careful preparation and a vast, ever-growing repertoire of spells. Many wizards specialize in a particular school of magic, becoming masters of a narrow but potent set of effects.',
	spellcasting: {
		type: 'Arcane',
		keyAbility: 'Intelligence',
		style: 'Prepared',
		description: 'A wizard must study her spellbook each day to prepare her spells in advance, choosing which of her known spells to ready before she can cast them. She learns two new spells for free at each new wizard level and may add more by copying them from scrolls or other spellbooks into her own.',
	},
	// Table: Wizard Spells per Day. Index 0 = character level 1 ... index 19 = level 20.
	// Each row is [level0Slots, level1Slots, ..., level9Slots]; 0 means "—" (not yet available).
	spellsPerDay: [
		[3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 1, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 1, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 4, 3, 2, 1, 0, 0, 0, 0, 0],
		[4, 4, 3, 3, 2, 0, 0, 0, 0, 0],
		[4, 4, 4, 3, 2, 1, 0, 0, 0, 0],
		[4, 4, 4, 3, 3, 2, 0, 0, 0, 0],
		[4, 4, 4, 4, 3, 2, 1, 0, 0, 0],
		[4, 4, 4, 4, 3, 3, 2, 0, 0, 0],
		[4, 4, 4, 4, 4, 3, 2, 1, 0, 0],
		[4, 4, 4, 4, 4, 3, 3, 2, 0, 0],
		[4, 4, 4, 4, 4, 4, 3, 2, 1, 0],
		[4, 4, 4, 4, 4, 4, 3, 3, 2, 0],
		[4, 4, 4, 4, 4, 4, 4, 3, 2, 1],
		[4, 4, 4, 4, 4, 4, 4, 3, 3, 2],
		[4, 4, 4, 4, 4, 4, 4, 4, 3, 3],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
	],
	features: [
		{ level: 1, name: 'Cantrips', description: 'A wizard can prepare a number of cantrips (0-level spells) each day; these can be cast at will and do not consume spell slots.' },
		{ level: 1, name: 'Scribe Scroll', description: 'A wizard gains Scribe Scroll as a bonus feat, allowing her to create scrolls of spells she knows.' },
		{ level: 1, name: 'Arcane Bond', description: 'A wizard forms a close bond with either a familiar or a bonded object (such as a ring, amulet, staff, or weapon), which can be used once per day to cast a spell she has prepared without expending the prepared spell, or to give a boost to a familiar.' },
		{ level: 1, name: 'Arcane School', description: 'A wizard may choose to specialize in a school of magic, granting extra spell slots and special powers related to that school, or remain a generalist by taking the Universalist school for broader versatility.' },
		{ level: 5, name: 'Bonus Feat', description: 'The wizard gains a bonus feat, chosen from a list of item creation feats, metamagic feats, Spell Mastery, or other qualifying feats.' },
		{ level: 10, name: 'Bonus Feat', description: 'The wizard gains an additional bonus feat from the same list.' },
		{ level: 15, name: 'Bonus Feat', description: 'The wizard gains an additional bonus feat from the same list.' },
		{ level: 20, name: 'Bonus Feat', description: 'The wizard gains a final bonus feat from the same list.' },
	],
};

export default wizard;
