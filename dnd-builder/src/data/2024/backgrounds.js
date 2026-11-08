const backgrounds = {
	"Acolyte": {
		"name": "Acolyte",
		"edition": "2024",
		"description": "",
		"abilityScores": [
			"int",
			"wis",
			"cha"
		],
		"feat": "Magic Initiate (Cleric)",
		"skills": [
			"Insight",
			"Religion"
		],
		"toolProficiencies": "Calligrapher’s Supplies",
		"languages": "Common and two other languages of your choice",
		"equipment": "Choose A or B: (A) Calligrapher’s Supplies, Book (prayers), Holy Symbol, Parchment (10 sheets), Robe, 8 GP; or (B) 50 GP",
		"equipmentOptions": {
			"A": "Calligrapher’s Supplies, Book (prayers), Holy Symbol, Parchment (10 sheets), Robe, 8 GP",
			"B": "50 GP"
		},
		"gold": 8,
		"feature": {
			"name": "",
			"description": ""
		}
	},
	"Criminal": {
		"name": "Criminal",
		"edition": "2024",
		"description": "",
		"abilityScores": [
			"dex",
			"con",
			"int"
		],
		"feat": "Alert",
		"skills": [
			"Sleight of Hand",
			"Stealth"
		],
		"toolProficiencies": "Thieves’ Tools",
		"languages": "Common and two other languages of your choice",
		"equipment": "Choose A or B: (A) 2 Daggers, Thieves’ Tools, Crowbar, 2 Pouches, Traveler’s Clothes, 16 GP; or (B) 50 GP",
		"equipmentOptions": {
			"A": "2 Daggers, Thieves’ Tools, Crowbar, 2 Pouches, Traveler’s Clothes, 16 GP",
			"B": "50 GP"
		},
		"gold": 16,
		"feature": {
			"name": "",
			"description": ""
		}
	},
	"Sage": {
		"name": "Sage",
		"edition": "2024",
		"description": "",
		"abilityScores": [
			"con",
			"int",
			"wis"
		],
		"feat": "Magic Initiate (Wizard)",
		"skills": [
			"Arcana",
			"History"
		],
		"toolProficiencies": "Calligrapher’s Supplies",
		"languages": "Common and two other languages of your choice",
		"equipment": "Choose A or B: (A) Quarterstaff, Calligrapher’s Supplies, Book (history), Parchment (8 sheets), Robe, 8 GP; or (B) 50 GP",
		"equipmentOptions": {
			"A": "Quarterstaff, Calligrapher’s Supplies, Book (history), Parchment (8 sheets), Robe, 8 GP",
			"B": "50 GP"
		},
		"gold": 8,
		"feature": {
			"name": "",
			"description": ""
		}
	},
	"Soldier": {
		"name": "Soldier",
		"edition": "2024",
		"description": "",
		"abilityScores": [
			"str",
			"dex",
			"con"
		],
		"feat": "Savage Attacker",
		"skills": [
			"Athletics",
			"Intimidation"
		],
		"toolProficiencies": "Choose one kind of Gaming Set (see \"Equipment\")",
		"languages": "Common and two other languages of your choice",
		"equipment": "Choose A or B: (A) Spear, Shortbow, 20 Arrows, Gaming Set (same as above), Healer’s Kit, Quiver, Traveler’s Clothes, 14 GP; or (B) 50 GP",
		"equipmentOptions": {
			"A": "Spear, Shortbow, 20 Arrows, Gaming Set (same as above), Healer’s Kit, Quiver, Traveler’s Clothes, 14 GP",
			"B": "50 GP"
		},
		"gold": 14,
		"feature": {
			"name": "",
			"description": ""
		}
	},
	"Custom": {
		"name": "Custom",
		"edition": "2024",
		"description": "Build your own background: pick any three abilities to boost, an Origin feat, two skills and a tool, per the \"Creating a Background\" rules.",
		"abilityScores": [
			"str",
			"dex",
			"con",
			"int",
			"wis",
			"cha"
		],
		"feat": "",
		"skills": [],
		"toolProficiencies": "",
		"languages": "Common and two other languages of your choice",
		"equipment": "",
		"equipmentOptions": {
			"A": "",
			"B": ""
		},
		"gold": 0,
		"feature": {
			"name": "",
			"description": ""
		}
	}
};

export default backgrounds;
