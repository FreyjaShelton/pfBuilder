const tiefling = {
	"name": "Tiefling",
	"description": "Tieflings share certain racial traits as a result of their infernal descent.",
	"abilityScoreIncrease": {
		"fixed": {
			"int": 1,
			"cha": 2
		},
		"choose": null
	},
	"size": "Medium",
	"speed": 30,
	"languages": "You can speak, read, and write Common and Infernal.",
	"traits": [
		{
			"name": "Darkvision",
			"description": "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
		},
		{
			"name": "Hellish Resistance",
			"description": "You have resistance to fire damage."
		}
	],
	"age": "Tieflings mature at the same rate as humans but live a few years longer.",
	"alignment": "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
	"sizeText": "Tieflings are about the same size and build as humans. Your size is Medium.",
	"tables": [],
	"subraces": []
};

export default tiefling;
