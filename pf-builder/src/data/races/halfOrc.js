const halfOrc = {
	name: 'Half-Orc',
	abilityMods: {},
	abilityChoice: 2,
	skillBonuses: [
		{ skill: 'intimidate', bonus: 2 },
	],
	size: 'Medium',
	speed: '30 ft.',
	type: 'Humanoid (human, orc)',
	languages: {
		automatic: ['Common', 'Orc'],
		bonus: ['Abyssal', 'Draconic', 'Giant', 'Gnoll', 'Goblin'],
	},
	description: 'Half-orcs are caught between two worlds, typically born from violence rather than love. They face discrimination from civilized societies that view them as monsters, yet struggle to prove themselves worthy among full-blooded orcs. Many channel their persecution into pursuits of power and greatness, while others seek acceptance through deeds and unexpected wisdom.',
	traits: [
		{ name: 'Darkvision', description: 'Half-orcs can see in the dark up to 60 feet.' },
		{ name: 'Intimidating', description: '+2 racial bonus on Intimidate checks due to their fearsome nature.' },
		{ name: 'Orc Blood', description: 'Half-orcs count as both humans and orcs for any effect related to race.' },
		{ name: 'Orc Ferocity', description: 'Once per day, when brought below 0 hit points but not killed, a half-orc can fight on for 1 more round as if disabled; at the end of that round, unless healed above 0 hit points, they fall unconscious and begin dying.' },
		{ name: 'Weapon Familiarity', description: 'Proficient with greataxes and falchions; treats any weapon with "orc" in its name as a martial weapon.' },
	],
};

export default halfOrc;
