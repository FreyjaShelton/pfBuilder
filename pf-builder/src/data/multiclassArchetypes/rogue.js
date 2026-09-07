// Pathfinder Unchained Variant Multiclassing — Rogue archetype benefit tiers.
const rogueArchetype = [
	{
		level: 3,
		name: 'Trapfinding',
		description: 'You gain the trapfinding class feature.',
	},
	{
		level: 7,
		name: 'Sneak Attack',
		description:
			'You gain the sneak attack class feature. You can deal 1d6 points of extra damage. This extra damage increases by 1d6 for every 4 levels beyond 7th, to a maximum of 4d6 at 19th level.',
	},
	{
		level: 11,
		name: 'Evasion',
		description: 'You gain evasion.',
	},
	{
		level: 15,
		name: 'Uncanny Dodge',
		description: 'You gain uncanny dodge.',
	},
	{
		level: 19,
		name: 'Improved Uncanny Dodge',
		description: 'You gain improved uncanny dodge, treating your character level as your effective rogue level.',
	},
];

export default rogueArchetype;
