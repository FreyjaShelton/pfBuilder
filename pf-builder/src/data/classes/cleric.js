const cleric = {
	name: 'Cleric',
	role: 'A cleric is a versatile divine caster and capable melee combatant who channels the power of a deity to heal or harm, buff allies, and turn back the undead. Backed by domain powers and a broad prepared spell list, clerics can adapt to support, offense, or defense as a battle demands.',
	alignment: 'Within one step of deity\'s alignment',
	hitDie: 'd8',
	startingWealth: '4d6 × 10 gp (average 140 gp)',
	bab: '3/4',
	saves: { fort: 'Good', ref: 'Poor', will: 'Good' },
	classSkills: ['Appraise', 'Craft', 'Diplomacy', 'Heal', 'Knowledge (Arcana)', 'Knowledge (History)', 'Knowledge (Nobility)', 'Knowledge (Planes)', 'Knowledge (Religion)', 'Linguistics', 'Profession', 'Sense Motive', 'Spellcraft'],
	skillRanksPerLevel: 2,
	keyAbility: 'Wisdom',
	description: 'Clerics act as intermediaries between the mortal world and the distant planes of the gods. As varied as the deities they serve, clerics strive to embody the ideals of their faith and to spread their god\'s influence, whether through military might, diplomacy, or subtle scheming.',
	spellcasting: { type: 'Divine', keyAbility: 'Wisdom', style: 'Prepared', description: 'A cleric prepares divine spells in advance from the full cleric spell list, and gains two additional spell slots per level from her two chosen domains. Good or evil clerics can spontaneously convert prepared spells into cure or inflict spells, and clerics can also prepare orisons (0-level spells) usable at will.' },
	features: [
		{ level: 1, name: 'Aura', description: 'A cleric of a chaotic, evil, good, or lawful deity emits a corresponding alignment aura as though she were a magical item, detectable by spells like detect evil.' },
		{ level: 1, name: 'Channel Energy', description: 'A cleric can release a wave of divine energy in a 30-foot burst, healing or damaging living or undead creatures for 1d6 points depending on her deity\'s alignment, usable 3 + Charisma modifier times per day. The damage/healing die increases by 1d6 every two levels thereafter, up to 10d6 at 19th level.' },
		{ level: 1, name: 'Domains', description: 'A cleric chooses two domains associated with her deity (or reflecting her spiritual inclinations if she has no deity), each granting domain powers and a bonus domain spell slot at every spell level she can cast.' },
		{ level: 1, name: 'Orisons', description: 'A cleric can prepare a number of orisons, or 0-level spells, each day, which can be cast repeatedly without expending spell slots.' },
		{ level: 1, name: 'Spontaneous Casting', description: 'A good or evil cleric can channel stored spell energy into cure spells (if good, or serving a good deity) or inflict spells (if evil, or serving an evil deity) that she did not prepare ahead of time; neutral clerics of neutral deities choose one option at 1st level.' },
	],
};

export default cleric;
