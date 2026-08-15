const halfElf = {
	name: 'Half-Elf',
	abilityMods: {},
	abilityChoice: 2,
	skillBonuses: [
		{ skill: 'perception', bonus: 2 },
	],
	size: 'Medium',
	speed: '30 ft.',
	type: 'Humanoid (elf, human)',
	languages: {
		automatic: ['Common', 'Elven'],
		bonus: ['Any (except secret languages, such as Druidic)'],
	},
	description: 'Half-elves descend from human-elf unions, inheriting traits from both parents yet fully belonging to neither culture. They occupy a unique social position, often viewed as bridges between their ancestral races but frequently experiencing rejection from both. Their adaptability and resilience stem from navigating two distinct worlds simultaneously, and many become adventurers seeking to forge their own identities.',
	traits: [
		{ name: 'Adaptability', description: 'Half-elves receive Skill Focus as a bonus feat at 1st level.' },
		{ name: 'Elf Blood', description: 'Half-elves count as both elves and humans for any effect related to race.' },
		{ name: 'Elven Immunities', description: 'Half-elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.' },
		{ name: 'Keen Senses', description: '+2 racial bonus on Perception checks.' },
		{ name: 'Low-Light Vision', description: 'Half-elves can see twice as far as humans in conditions of dim light.' },
		{ name: 'Multitalented', description: 'Half-elves choose two favored classes at 1st level and gain +1 hit point or +1 skill point whenever they take a level in either one.' },
	],
};

export default halfElf;
