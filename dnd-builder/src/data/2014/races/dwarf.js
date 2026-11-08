const dwarf = {
	"name": "Dwarf",
	"description": "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
	"abilityScoreIncrease": {
		"fixed": {
			"con": 2
		},
		"choose": null
	},
	"size": "Medium",
	"speed": 25,
	"languages": "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
	"traits": [
		{
			"name": "Darkvision",
			"description": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
		},
		{
			"name": "Dwarven Resilience",
			"description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
		},
		{
			"name": "Dwarven Combat Training",
			"description": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
		},
		{
			"name": "Tool Proficiency",
			"description": "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
		},
		{
			"name": "Stonecunning",
			"description": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
		}
	],
	"age": "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
	"alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
	"sizeText": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
	"tables": [],
	"subraces": [
		{
			"name": "Hill Dwarf",
			"description": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
			"abilityScoreIncrease": {
				"fixed": {
					"wis": 1
				},
				"choose": null
			},
			"traits": [
				{
					"name": "Dwarven Toughness",
					"description": "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
				}
			]
		}
	]
};

export default dwarf;
