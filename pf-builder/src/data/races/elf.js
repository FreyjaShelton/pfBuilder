const elf = {
	name: 'Elf',
	abilityMods: { dex: 2, int: 2, con: -2 },
	skillBonuses: [
		{ skill: 'perception', bonus: 2 },
		{ skill: 'spellcraft', bonus: 2, condition: 'identifying the properties of magic items' },
	],
	size: 'Medium',
	speed: '30 ft.',
	type: 'Humanoid (elf)',
	languages: {
		automatic: ['Common', 'Elven'],
		bonus: ['Celestial', 'Draconic', 'Gnoll', 'Gnome', 'Goblin', 'Orc', 'Sylvan'],
	},
	description: 'Long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, though with key differences. While fey are truly linked to the flora and fauna of their homes, elves are instead mortals who are in tune with the natural world around them. Elves seek to live in balance with the wild and understand it better than most other mortals.',
	traits: [
		{ name: 'Low-Light Vision', description: 'Elves can see twice as far as humans in conditions of dim light.' },
		{ name: 'Elven Immunities', description: 'Elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.' },
		{ name: 'Elven Magic', description: '+2 racial bonus on caster level checks made to overcome spell resistance, and a +2 racial bonus on Spellcraft checks made to identify the properties of magic items.' },
		{ name: 'Keen Senses', description: '+2 racial bonus on Perception checks.' },
		{ name: 'Weapon Familiarity', description: 'Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows); treats any weapon with "elven" in its name as a martial weapon.' },
	],
};

export default elf;
