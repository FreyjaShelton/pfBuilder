// Pathfinder Unchained Variant Multiclassing — Wizard archetype benefit tiers.
const wizardArchetype = [
	{
		level: 1,
		name: 'School',
		description:
			'You choose a school of magic in which to specialize. For all powers of that school, you treat your character level as your effective wizard level.',
	},
	{
		level: 3,
		name: 'Familiar',
		description: 'You gain a familiar, treating your character level as your effective wizard level.',
	},
	{
		level: 7,
		name: 'School Power',
		description:
			'You gain the 1st-level powers of your chosen school. If any of those powers grant an extra effect at 20th level, you do not gain that extra effect.',
	},
	{
		level: 11,
		name: 'Cantrip',
		description:
			"If you have an Intelligence score of 10 or higher, you choose a wizard cantrip from your chosen school and can cast that cantrip as a spell-like ability at will. You use your character level as the caster level and Intelligence as the cantrip's key ability score.",
	},
	{
		level: 15,
		name: 'Discovery',
		description:
			'You gain an arcane discovery or wizard bonus feat, treating your character level as your effective wizard level.',
	},
	{
		level: 19,
		name: 'Greater School Power',
		description: 'You gain the 8th-level power of your chosen school.',
	},
];

export default wizardArchetype;
