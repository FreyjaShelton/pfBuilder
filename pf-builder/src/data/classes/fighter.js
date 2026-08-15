const fighter = {
	name: 'Fighter',
	role: 'The fighter is the quintessential master of martial combat, unmatched in weapon and armor proficiency, raw damage output, and staying power in a prolonged fight. Through a wealth of bonus feats and specialized training, a fighter can be built into nearly any combat archetype, from an unstoppable heavily-armored tank to a precise archer or dual-wielding duelist. The class excels as the party\'s primary front-line damage dealer and defender.',
	alignment: 'Any',
	hitDie: 'd10',
	startingWealth: '5d6 × 10 gp (average 175 gp)',
	bab: 'Full',
	saves: { fort: 'Good', ref: 'Poor', will: 'Poor' },
	classSkills: ['Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Knowledge (Dungeoneering)', 'Knowledge (Engineering)', 'Profession', 'Ride', 'Survival', 'Swim'],
	skillRanksPerLevel: 2,
	keyAbility: 'Strength (or Dexterity)',
	description: 'Fighters are the masters of martial combat, having trained extensively with a wide array of weapons and armor. Where other warriors rely on magic or trickery, the fighter relies purely on skill at arms, discipline, and physical prowess to overcome any foe. Kingdoms are built and toppled by fighters\' hands, and no other class matches their raw versatility in a straight fight.',
	spellcasting: null,
	features: [
		{ level: 1, name: 'Bonus Feat', description: 'Gains a bonus combat feat at 1st level, and again at every even level thereafter, in addition to normal feat progression.' },
		{ level: 2, name: 'Bravery', description: 'Gains a +1 bonus on Will saves against fear, increasing by +1 for every four fighter levels beyond 2nd.' },
		{ level: 3, name: 'Armor Training', description: 'Becomes more maneuverable while armored, reducing armor check penalty, increasing maximum Dexterity bonus, and eventually allowing full speed in heavier armor; improves again at 7th, 11th, and 15th level.' },
		{ level: 5, name: 'Weapon Training', description: 'Selects a group of weapons to specialize in, gaining a bonus on attack and damage rolls with them; gains additional weapon groups and increased bonuses at 9th, 13th, and 17th level.' },
		{ level: 19, name: 'Armor Mastery', description: 'Gains damage reduction 5/— whenever wearing armor or using a shield.' },
		{ level: 20, name: 'Weapon Mastery', description: 'Chooses one weapon; automatically confirms critical threats with it, its critical multiplier increases by 1, and she cannot be disarmed of it.' },
	],
};

export default fighter;
