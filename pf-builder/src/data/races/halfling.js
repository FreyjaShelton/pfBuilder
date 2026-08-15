const halfling = {
	name: 'Halfling',
	abilityMods: { dex: 2, cha: 2, str: -2 },
	skillBonuses: [
		{ skill: 'acrobatics', bonus: 2 },
		{ skill: 'climb', bonus: 2 },
		{ skill: 'perception', bonus: 2 },
	],
	size: 'Small',
	speed: '20 ft.',
	type: 'Humanoid (halfling)',
	languages: {
		automatic: ['Common', 'Halfling'],
		bonus: ['Dwarven', 'Elven', 'Gnome', 'Goblin'],
	},
	description: 'Halflings stand at 3 feet tall with tufts of curly hair on their broad, tanned feet, preferring to walk barefoot, with skin tending toward rich cinnamon tones and light brown hair. Optimistic and driven by wanderlust, they possess an uncanny luck and remarkable ability to find humor even in catastrophe, though this sometimes leads them into trouble without proper planning.',
	traits: [
		{ name: 'Fearless', description: '+2 racial bonus on all saving throws against fear; this bonus stacks with the bonus granted by Halfling Luck.' },
		{ name: 'Halfling Luck', description: '+1 racial bonus on all saving throws.' },
		{ name: 'Keen Senses', description: '+2 racial bonus on Perception checks.' },
		{ name: 'Sure-Footed', description: '+2 racial bonus on Acrobatics and Climb checks.' },
		{ name: 'Weapon Familiarity', description: 'Proficient with slings; treats any weapon with "halfling" in its name as a martial weapon.' },
	],
};

export default halfling;
