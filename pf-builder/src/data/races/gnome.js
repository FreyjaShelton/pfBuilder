const gnome = {
	name: 'Gnome',
	abilityMods: { con: 2, cha: 2, str: -2 },
	skillBonuses: [
		{ skill: 'perception', bonus: 2 },
	],
	size: 'Small',
	speed: '20 ft.',
	type: 'Humanoid (gnome)',
	languages: {
		automatic: ['Common', 'Gnome', 'Sylvan'],
		bonus: ['Draconic', 'Dwarven', 'Elven', 'Giant', 'Goblin', 'Orc'],
	},
	description: 'Gnomes are distant fey-descended folk whose unpredictable nature and vibrant appearance set them apart from other races. Their hearts are generally in the right place despite eccentric motivations that others find bewildering. They pursue passions — from dangerous culinary adventures to pointless expeditions — with single-minded zeal, earning reputations as impetuous and somewhat mad.',
	traits: [
		{ name: 'Low-Light Vision', description: 'Gnomes can see twice as far as humans in conditions of dim light.' },
		{ name: 'Defensive Training', description: '+4 dodge bonus to AC against creatures with the giant subtype.' },
		{ name: 'Gnome Magic', description: 'Gnomes add +1 to the DC of any illusion spells they cast. Those with a Charisma of 11 or higher gain the following spell-like abilities once per day: dancing lights, ghost sound, prestidigitation, and speak with animals — caster level equal to character level.' },
		{ name: 'Hatred', description: '+1 racial bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes.' },
		{ name: 'Illusion Resistance', description: '+2 racial saving throw bonus against illusion spells and effects.' },
		{ name: 'Keen Senses', description: '+2 racial bonus on Perception checks.' },
		{ name: 'Obsessive', description: '+2 racial bonus on a Craft or Profession skill of choice.' },
		{ name: 'Weapon Familiarity', description: 'Treats any weapon with "gnome" in its name as a martial weapon.' },
	],
};

export default gnome;
