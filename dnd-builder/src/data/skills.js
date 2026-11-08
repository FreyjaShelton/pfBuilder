// field = the text field on the 5e character sheet; box = its proficiency checkbox.
const skills = [
	{ key: 'acrobatics', name: 'Acrobatics', ability: 'dex', field: 'Acrobatics', box: 'Check Box 23' },
	{ key: 'animalHandling', name: 'Animal Handling', ability: 'wis', field: 'Animal', box: 'Check Box 24' },
	{ key: 'arcana', name: 'Arcana', ability: 'int', field: 'Arcana', box: 'Check Box 25' },
	{ key: 'athletics', name: 'Athletics', ability: 'str', field: 'Athletics', box: 'Check Box 26' },
	{ key: 'deception', name: 'Deception', ability: 'cha', field: 'Deception ', box: 'Check Box 27' },
	{ key: 'history', name: 'History', ability: 'int', field: 'History ', box: 'Check Box 28' },
	{ key: 'insight', name: 'Insight', ability: 'wis', field: 'Insight', box: 'Check Box 29' },
	{ key: 'intimidation', name: 'Intimidation', ability: 'cha', field: 'Intimidation', box: 'Check Box 30' },
	{ key: 'investigation', name: 'Investigation', ability: 'int', field: 'Investigation ', box: 'Check Box 31' },
	{ key: 'medicine', name: 'Medicine', ability: 'wis', field: 'Medicine', box: 'Check Box 32' },
	{ key: 'nature', name: 'Nature', ability: 'int', field: 'Nature', box: 'Check Box 33' },
	{ key: 'perception', name: 'Perception', ability: 'wis', field: 'Perception ', box: 'Check Box 34' },
	{ key: 'performance', name: 'Performance', ability: 'cha', field: 'Performance', box: 'Check Box 35' },
	{ key: 'persuasion', name: 'Persuasion', ability: 'cha', field: 'Persuasion', box: 'Check Box 36' },
	{ key: 'religion', name: 'Religion', ability: 'int', field: 'Religion', box: 'Check Box 37' },
	{ key: 'sleightOfHand', name: 'Sleight of Hand', ability: 'dex', field: 'SleightofHand', box: 'Check Box 38' },
	{ key: 'stealth', name: 'Stealth', ability: 'dex', field: 'Stealth ', box: 'Check Box 39' },
	{ key: 'survival', name: 'Survival', ability: 'wis', field: 'Survival', box: 'Check Box 40' },
];

export const skillNames = skills.map((s) => s.name);

export default skills;
