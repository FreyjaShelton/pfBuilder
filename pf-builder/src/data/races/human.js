const human = {
	name: 'Human',
	abilityMods: {},
	abilityChoice: 2,
	size: 'Medium',
	speed: '30 ft.',
	type: 'Humanoid (human)',
	languages: {
		automatic: ['Common'],
		bonus: ['Any (except secret languages, such as Druidic)'],
	},
	description: 'Humans possess exceptional drive and capacity to endure and expand, making them the dominant race in most of the world. Their diversity spans from savage tribes to decadent nobles, characterized by an ambition and curiosity that drives many to explore forgotten corners of the world or lead armies of conquest.',
	traits: [
		{ name: 'Bonus Feat', description: 'Humans select one extra feat at 1st level.' },
		{ name: 'Skilled', description: 'Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.' },
	],
};

export default human;
