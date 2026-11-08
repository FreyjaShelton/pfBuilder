const dragonborn = {
	"name": "Dragonborn",
	"edition": "2024",
	"description": "As a Dragonborn, you have these special traits.",
	"creatureType": "Humanoid",
	"size": "Medium",
	"sizeText": "Medium (about 5–7 feet tall)",
	"speed": 30,
	"traits": [
		{
			"name": "Draconic Ancestry",
			"description": "Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance."
		},
		{
			"name": "Breath Weapon",
			"description": "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time).\nEach creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage.\nThis damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10).\nYou can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
		},
		{
			"name": "Damage Resistance",
			"description": "You have Resistance to the damage type determined by your Draconic Ancestry trait."
		},
		{
			"name": "Darkvision",
			"description": "You have Darkvision with a range of 60 feet."
		},
		{
			"name": "Draconic Flight",
			"description": "When you reach character level 5, you can channel draconic magic to give yourself temporary flight. As a Bonus Action, you sprout spectral wings on your back that last for 10 minutes or until you retract the wings (no action required) or have the Incapacitated condition.\nDuring that time, you have a Fly Speed equal to your Speed. Your wings appear to be made of the same energy as your Breath Weapon. Once you use this trait, you can’t use it again until you finish a Long Rest."
		}
	],
	"tables": [
		{
			"caption": "",
			"columns": [
				"Dragon",
				"Damage Type"
			],
			"rows": [
				[
					"Black",
					"Acid"
				],
				[
					"Blue",
					"Lightning"
				],
				[
					"Brass",
					"Fire"
				],
				[
					"Bronze",
					"Lightning"
				],
				[
					"Copper",
					"Acid"
				],
				[
					"Gold",
					"Fire"
				],
				[
					"Green",
					"Poison"
				],
				[
					"Red",
					"Fire"
				],
				[
					"Silver",
					"Cold"
				],
				[
					"White",
					"Cold"
				]
			]
		}
	],
	"lineage": {
		"label": "Dragon",
		"choices": [
			"Black",
			"Blue",
			"Brass",
			"Bronze",
			"Copper",
			"Gold",
			"Green",
			"Red",
			"Silver",
			"White"
		]
	},
	"abilityScoreIncrease": {
		"fixed": {},
		"choose": null
	},
	"subraces": [],
	"languages": "Common and two other languages of your choice"
};

export default dragonborn;
