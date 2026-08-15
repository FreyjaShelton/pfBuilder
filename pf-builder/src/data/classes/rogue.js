const rogue = {
	name: 'Rogue',
	role: 'A skill-focused skirmisher who relies on cunning, stealth, and precision strikes rather than head-on combat. Rogues excel at scouting, disarming traps, and dealing massive sneak attack damage against flanked or flat-footed foes, filling the party\'s utility and finesse-combat niche.',
	alignment: 'Any',
	hitDie: 'd8',
	startingWealth: '4d6 × 10 gp (average 140 gp)',
	bab: '3/4',
	saves: { fort: 'Poor', ref: 'Good', will: 'Poor' },
	classSkills: ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge (Dungeoneering)', 'Knowledge (Local)', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Stealth', 'Swim', 'Use Magic Device'],
	skillRanksPerLevel: 8,
	keyAbility: 'Dexterity',
	description: 'Rogues are those who use skill, guile, and careful strikes to overcome their foes, relying on wit and versatility rather than brute strength. Whether operating as thieves, scouts, spies, or diplomats, rogues excel at getting the drop on their enemies and slipping past danger unseen.',
	spellcasting: null,
	features: [
		{ level: 1, name: 'Sneak Attack', description: 'The rogue deals an extra 1d6 damage (increasing by 1d6 every two levels, up to 10d6 at 19th) against any target denied its Dexterity bonus to AC or that she is flanking; the extra damage does not multiply on a critical hit.' },
		{ level: 1, name: 'Trapfinding', description: 'The rogue adds half her level (minimum 1) to Perception checks to find traps and Disable Device checks to disarm them, and can disarm magical traps.' },
		{ level: 2, name: 'Evasion', description: 'The rogue takes no damage on a successful Reflex save against attacks that normally deal half damage on a success, so long as she wears light or no armor.' },
		{ level: 2, name: 'Rogue Talent', description: 'The rogue gains a special talent that customizes her abilities, gaining an additional talent every two levels thereafter through 20th level (talents at 10th level and beyond may be advanced talents).' },
		{ level: 3, name: 'Trap Sense', description: 'The rogue gains a +1 bonus on Reflex saves against traps and a +1 dodge bonus to AC against attacks made by traps, improving by +1 every three levels thereafter (up to +6 at 18th).' },
		{ level: 4, name: 'Uncanny Dodge', description: 'The rogue can no longer be caught flat-footed and retains her Dexterity bonus to AC even when caught flat-footed or struck by an invisible attacker.' },
		{ level: 8, name: 'Improved Uncanny Dodge', description: 'The rogue can no longer be flanked, except by a rogue of at least four levels higher.' },
		{ level: 10, name: 'Advanced Talents', description: 'The rogue may begin selecting from a more powerful list of advanced rogue talents in place of standard talents.' },
		{ level: 20, name: 'Master Strike', description: 'Whenever the rogue deals sneak attack damage, she can choose to put the target to sleep, paralyze it, or slay it outright, subject to a Fortitude save; a creature that succeeds is immune to that rogue\'s master strike for 24 hours.' },
	],
};

export default rogue;
