const dragonborn = {
	"name": "Dragonborn",
	"description": "Your draconic heritage manifests in a variety of traits you share with other dragonborn.",
	"abilityScoreIncrease": {
		"fixed": {
			"str": 2,
			"cha": 1
		},
		"choose": null
	},
	"size": "Medium",
	"speed": 30,
	"languages": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
	"traits": [
		{
			"name": "Draconic Ancestry",
			"description": "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
		},
		{
			"name": "Breath Weapon",
			"description": "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.\nWhen you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.\nAfter you use your breath weapon, you can’t use it again until you complete a short or long rest."
		},
		{
			"name": "Damage Resistance",
			"description": "You have resistance to the damage type associated with your draconic ancestry."
		}
	],
	"age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
	"alignment": "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
	"sizeText": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
	"tables": [
		{
			"caption": "Draconic Ancestry",
			"columns": [
				"Dragon",
				"Damage Type",
				"Breath Weapon"
			],
			"rows": [
				[
					"Black",
					"Acid",
					"5 by 30 ft. line (Dex. save)"
				],
				[
					"Blue",
					"Lightning",
					"5 by 30 ft. line (Dex. save)"
				],
				[
					"Brass",
					"Fire",
					"5 by 30 ft. line (Dex. save)"
				],
				[
					"Bronze",
					"Lightning",
					"5 by 30 ft. line (Dex. save)"
				],
				[
					"Copper",
					"Acid",
					"5 by 30 ft. line (Dex. save)"
				],
				[
					"Gold",
					"Fire",
					"15 ft. cone (Dex. save)"
				],
				[
					"Green",
					"Poison",
					"15 ft. cone (Con. save)"
				],
				[
					"Red",
					"Fire",
					"15 ft. cone (Dex. save)"
				],
				[
					"Silver",
					"Cold",
					"15 ft. cone (Con. save)"
				],
				[
					"White",
					"Cold",
					"15 ft. cone (Con. save)"
				]
			]
		}
	],
	"subraces": []
};

export default dragonborn;
