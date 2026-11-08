const tiefling = {
	"name": "Tiefling",
	"edition": "2024",
	"description": "As a Tiefling, you have the following special traits.",
	"creatureType": "Humanoid",
	"size": "Medium",
	"sizeText": "Medium (about 4–7 feet tall) or Small (about 3–4 feet tall), chosen when you select this species",
	"speed": 30,
	"traits": [
		{
			"name": "Darkvision",
			"description": "You have Darkvision with a range of 60 feet."
		},
		{
			"name": "Fiendish Legacy",
			"description": "You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy.\nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.\nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the legacy)."
		},
		{
			"name": "Otherworldly Presence",
			"description": "You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait."
		}
	],
	"tables": [
		{
			"caption": "",
			"columns": [
				"Legacy",
				"Level 1",
				"Level 3",
				"Level 5"
			],
			"rows": [
				[
					"Abyssal",
					"You have Resistance to Poison damage. You also know the Poison Spray cantrip.",
					"Ray of Sickness",
					"Hold Person"
				],
				[
					"Chthonic",
					"You have Resistance to Necrotic damage. You also know the Chill Touch cantrip.",
					"False Life",
					"Ray of Enfeeblement"
				],
				[
					"Infernal",
					"You have Resistance to Fire damage. You also know the Fire Bolt cantrip.",
					"Hellish Rebuke",
					"Darkness"
				]
			]
		}
	],
	"lineage": {
		"label": "Legacy",
		"choices": [
			"Abyssal",
			"Chthonic",
			"Infernal"
		]
	},
	"abilityScoreIncrease": {
		"fixed": {},
		"choose": null
	},
	"subraces": [],
	"languages": "Common and two other languages of your choice"
};

export default tiefling;
