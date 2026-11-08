const halfling = {
	"name": "Halfling",
	"description": "Your halfling character has a number of traits in common with all other halflings.",
	"abilityScoreIncrease": {
		"fixed": {
			"dex": 2
		},
		"choose": null
	},
	"size": "Small",
	"speed": 25,
	"languages": "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
	"traits": [
		{
			"name": "Lucky",
			"description": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
		},
		{
			"name": "Brave",
			"description": "You have advantage on saving throws against being frightened."
		},
		{
			"name": "Halfling Nimbleness",
			"description": "You can move through the space of any creature that is of a size larger than yours."
		}
	],
	"age": "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
	"alignment": "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
	"sizeText": "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
	"tables": [],
	"subraces": [
		{
			"name": "Lightfoot",
			"description": "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.",
			"abilityScoreIncrease": {
				"fixed": {
					"cha": 1
				},
				"choose": null
			},
			"traits": [
				{
					"name": "Naturally Stealthy",
					"description": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
				}
			]
		}
	]
};

export default halfling;
