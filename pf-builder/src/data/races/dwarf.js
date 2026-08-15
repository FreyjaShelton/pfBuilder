const dwarf = {
	name: 'Dwarf',
	abilityMods: { con: 2, wis: 2, cha: -2 },
	skillBonuses: [
		{ skill: 'appraise', bonus: 2, condition: 'determining the price of non-magical goods that contain precious metals or gemstones' },
		{ skill: 'perception', bonus: 2, condition: 'noticing unusual stonework, such as traps and hidden doors in stone' },
	],
	size: 'Medium',
	speed: '20 ft.',
	type: 'Humanoid (dwarf)',
	languages: {
		automatic: ['Common', 'Dwarven'],
		bonus: ['Giant', 'Gnome', 'Goblin', 'Orc', 'Terran', 'Undercommon'],
	},
	description: 'Dwarves are a stoic, short-lived race ensconced in mountain citadels, driven by honor, tradition, and fierce determination. Known for exceptional craftsmanship in metallurgy and stonework, they maintain deep grudges against orcs, goblins, and giants. Their long lifespans and conservative nature make them seem frozen in time, yet they are thoughtful innovators who systematically perfect new techniques before adoption.',
	traits: [
		{ name: 'Darkvision', description: 'Dwarves can see in the dark up to 60 feet.' },
		{ name: 'Defensive Training', description: '+4 dodge bonus to AC against creatures with the giant subtype.' },
		{ name: 'Greed', description: '+2 racial bonus on Appraise checks made to determine the price of non-magical goods that contain precious metals or gemstones.' },
		{ name: 'Hardy', description: '+2 racial bonus on saving throws against poison, spells, and spell-like abilities.' },
		{ name: 'Hatred', description: '+1 racial bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes.' },
		{ name: 'Slow and Steady', description: "Dwarves' speed is never modified by armor or encumbrance." },
		{ name: 'Stability', description: '+4 racial bonus to CMD when resisting a bull rush or trip attempt while standing on the ground.' },
		{ name: 'Stonecunning', description: '+2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors in stone; an automatic check is made within 10 feet.' },
		{ name: 'Weapon Familiarity', description: 'Proficient with battleaxes, heavy picks, and warhammers; treats any weapon with "dwarven" in its name as a martial weapon.' },
	],
};

export default dwarf;
