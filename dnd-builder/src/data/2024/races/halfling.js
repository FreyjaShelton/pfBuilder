const halfling = {
	"name": "Halfling",
	"edition": "2024",
	"description": "As a Halfling, you have these special traits.",
	"creatureType": "Humanoid",
	"size": "Small",
	"sizeText": "Small (about 2–3 feet tall)",
	"speed": 30,
	"traits": [
		{
			"name": "Brave",
			"description": "You have Advantage on saving throws you make to avoid or end the Frightened condition."
		},
		{
			"name": "Halfling Nimbleness",
			"description": "You can move through the space of any creature that is a size larger than you, but you can’t stop in the same space."
		},
		{
			"name": "Luck",
			"description": "When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll."
		},
		{
			"name": "Naturally Stealthy",
			"description": "You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."
		}
	],
	"tables": [],
	"lineage": null,
	"abilityScoreIncrease": {
		"fixed": {},
		"choose": null
	},
	"subraces": [],
	"languages": "Common and two other languages of your choice"
};

export default halfling;
