// Pathfinder Unchained Variant Multiclassing — Monk archetype benefit tiers.
const monkArchetype = [
	{
		level: 1,
		name: 'Armor Restriction',
		description: 'You lose all your secondary monk abilities when wearing armor, using a shield, or carrying a medium or heavy load.',
	},
	{
		level: 3,
		name: 'Unarmed Strike',
		description: 'You gain Improved Unarmed Strike as a bonus feat and the unarmed damage of a monk of your character level – 2.',
	},
	{
		level: 7,
		name: 'Evasion',
		description: 'You gain evasion.',
	},
	{
		level: 11,
		name: 'Ki Pool',
		description: "You gain the ki pool class feature of a monk of your character level – 2, with a number of ki points equal to 1/2 your character level. You only ever gain ki pool (lawful) if you are of lawful alignment.",
	},
	{
		level: 15,
		name: 'AC Bonus',
		description: 'You gain a +3 dodge bonus to AC.',
	},
	{
		level: 19,
		name: 'Improved Evasion',
		description: 'You gain improved evasion.',
	},
];

export default monkArchetype;
