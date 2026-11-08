const weapons = [
	{
		"name": "Club",
		"category": "Simple",
		"kind": "Melee",
		"cost": "1 sp",
		"damage": "1d4",
		"damageType": "Bludgeoning",
		"weight": 2,
		"properties": [
			"Light"
		]
	},
	{
		"name": "Dagger",
		"category": "Simple",
		"kind": "Melee",
		"cost": "2 gp",
		"damage": "1d4",
		"damageType": "Piercing",
		"weight": 1,
		"properties": [
			"Finesse",
			"Light",
			"Range",
			"Thrown"
		],
		"range": "20/60"
	},
	{
		"name": "Greatclub",
		"category": "Simple",
		"kind": "Melee",
		"cost": "2 sp",
		"damage": "1d8",
		"damageType": "Bludgeoning",
		"weight": 10,
		"properties": [
			"Two-Handed"
		]
	},
	{
		"name": "Handaxe",
		"category": "Simple",
		"kind": "Melee",
		"cost": "5 gp",
		"damage": "1d6",
		"damageType": "Slashing",
		"weight": 2,
		"properties": [
			"Light",
			"Thrown"
		],
		"range": "20/60"
	},
	{
		"name": "Javelin",
		"category": "Simple",
		"kind": "Melee",
		"cost": "5 sp",
		"damage": "1d6",
		"damageType": "Piercing",
		"weight": 2,
		"properties": [
			"Thrown"
		],
		"range": "30/120"
	},
	{
		"name": "Light Hammer",
		"category": "Simple",
		"kind": "Melee",
		"cost": "2 gp",
		"damage": "1d4",
		"damageType": "Bludgeoning",
		"weight": 2,
		"properties": [
			"Light",
			"Thrown"
		],
		"range": "20/60"
	},
	{
		"name": "Mace",
		"category": "Simple",
		"kind": "Melee",
		"cost": "5 gp",
		"damage": "1d6",
		"damageType": "Bludgeoning",
		"weight": 4,
		"properties": []
	},
	{
		"name": "Quarterstaff",
		"category": "Simple",
		"kind": "Melee",
		"cost": "2 sp",
		"damage": "1d6",
		"damageType": "Bludgeoning",
		"weight": 4,
		"properties": [
			"Versatile"
		],
		"versatileDamage": "1d8"
	},
	{
		"name": "Sickle",
		"category": "Simple",
		"kind": "Melee",
		"cost": "1 gp",
		"damage": "1d4",
		"damageType": "Slashing",
		"weight": 2,
		"properties": [
			"Light"
		]
	},
	{
		"name": "Spear",
		"category": "Simple",
		"kind": "Melee",
		"cost": "1 gp",
		"damage": "1d6",
		"damageType": "Piercing",
		"weight": 3,
		"properties": [
			"Versatile",
			"Thrown"
		],
		"versatileDamage": "1d8",
		"range": "20/60"
	},
	{
		"name": "Light Crossbow",
		"category": "Simple",
		"kind": "Ranged",
		"cost": "25 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 5,
		"properties": [
			"Two-Handed",
			"Range",
			"Loading",
			"Ammunition"
		],
		"range": "80/320"
	},
	{
		"name": "Dart",
		"category": "Simple",
		"kind": "Ranged",
		"cost": "5 cp",
		"damage": "1d4",
		"damageType": "Piercing",
		"weight": 0.25,
		"properties": [
			"Finesse",
			"Range",
			"Thrown"
		],
		"range": "20/60"
	},
	{
		"name": "Shortbow",
		"category": "Simple",
		"kind": "Ranged",
		"cost": "25 gp",
		"damage": "1d6",
		"damageType": "Piercing",
		"weight": 2,
		"properties": [
			"Two-Handed",
			"Range",
			"Ammunition"
		],
		"range": "80/320"
	},
	{
		"name": "Sling",
		"category": "Simple",
		"kind": "Ranged",
		"cost": "1 sp",
		"damage": "1d4",
		"damageType": "Bludgeoning",
		"weight": 0,
		"properties": [
			"Ammunition",
			"Range"
		],
		"range": "30/120"
	},
	{
		"name": "Battleaxe",
		"category": "Martial",
		"kind": "Melee",
		"cost": "10 gp",
		"damage": "1d8",
		"damageType": "Slashing",
		"weight": 4,
		"properties": [
			"Versatile"
		],
		"versatileDamage": "1d10"
	},
	{
		"name": "Flail",
		"category": "Martial",
		"kind": "Melee",
		"cost": "10 gp",
		"damage": "1d8",
		"damageType": "Bludgeoning",
		"weight": 2,
		"properties": []
	},
	{
		"name": "Glaive",
		"category": "Martial",
		"kind": "Melee",
		"cost": "20 gp",
		"damage": "1d10",
		"damageType": "Slashing",
		"weight": 6,
		"properties": [
			"Two-Handed",
			"Heavy",
			"Reach"
		]
	},
	{
		"name": "Greataxe",
		"category": "Martial",
		"kind": "Melee",
		"cost": "30 gp",
		"damage": "1d12",
		"damageType": "Slashing",
		"weight": 7,
		"properties": [
			"Two-Handed",
			"Heavy"
		]
	},
	{
		"name": "Greatsword",
		"category": "Martial",
		"kind": "Melee",
		"cost": "50 gp",
		"damage": "2d6",
		"damageType": "Slashing",
		"weight": 6,
		"properties": [
			"Two-Handed",
			"Heavy"
		]
	},
	{
		"name": "Halberd",
		"category": "Martial",
		"kind": "Melee",
		"cost": "20 gp",
		"damage": "1d10",
		"damageType": "Slashing",
		"weight": 6,
		"properties": [
			"Two-Handed",
			"Heavy",
			"Reach"
		]
	},
	{
		"name": "Lance",
		"category": "Martial",
		"kind": "Melee",
		"cost": "10 gp",
		"damage": "1d12",
		"damageType": "Piercing",
		"weight": 6,
		"properties": [
			"Reach",
			"Special"
		]
	},
	{
		"name": "Longsword",
		"category": "Martial",
		"kind": "Melee",
		"cost": "15 gp",
		"damage": "1d8",
		"damageType": "Slashing",
		"weight": 3,
		"properties": [
			"Versatile"
		],
		"versatileDamage": "1d10"
	},
	{
		"name": "Maul",
		"category": "Martial",
		"kind": "Melee",
		"cost": "10 gp",
		"damage": "2d6",
		"damageType": "Bludgeoning",
		"weight": 10,
		"properties": [
			"Heavy",
			"Two-Handed"
		]
	},
	{
		"name": "Morningstar",
		"category": "Martial",
		"kind": "Melee",
		"cost": "15 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 4,
		"properties": []
	},
	{
		"name": "Pike",
		"category": "Martial",
		"kind": "Melee",
		"cost": "5 gp",
		"damage": "1d10",
		"damageType": "Piercing",
		"weight": 18,
		"properties": [
			"Two-Handed",
			"Heavy",
			"Reach"
		]
	},
	{
		"name": "Rapier",
		"category": "Martial",
		"kind": "Melee",
		"cost": "25 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 2,
		"properties": [
			"Finesse"
		]
	},
	{
		"name": "Scimitar",
		"category": "Martial",
		"kind": "Melee",
		"cost": "25 gp",
		"damage": "1d6",
		"damageType": "Slashing",
		"weight": 3,
		"properties": [
			"Finesse",
			"Light"
		]
	},
	{
		"name": "Shortsword",
		"category": "Martial",
		"kind": "Melee",
		"cost": "10 gp",
		"damage": "1d6",
		"damageType": "Piercing",
		"weight": 2,
		"properties": [
			"Finesse",
			"Light"
		]
	},
	{
		"name": "Trident",
		"category": "Martial",
		"kind": "Melee",
		"cost": "5 gp",
		"damage": "1d6",
		"damageType": "Piercing",
		"weight": 4,
		"properties": [
			"Versatile",
			"Thrown"
		],
		"versatileDamage": "1d8",
		"range": "20/60"
	},
	{
		"name": "War Pick",
		"category": "Martial",
		"kind": "Melee",
		"cost": "5 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 2,
		"properties": []
	},
	{
		"name": "Warhammer",
		"category": "Martial",
		"kind": "Melee",
		"cost": "15 gp",
		"damage": "1d8",
		"damageType": "Bludgeoning",
		"weight": 2,
		"properties": [
			"Versatile"
		],
		"versatileDamage": "1d10"
	},
	{
		"name": "Whip",
		"category": "Martial",
		"kind": "Melee",
		"cost": "2 gp",
		"damage": "1d4",
		"damageType": "Slashing",
		"weight": 3,
		"properties": [
			"Finesse",
			"Reach"
		]
	},
	{
		"name": "Blowgun",
		"category": "Martial",
		"kind": "Ranged",
		"cost": "10 gp",
		"damage": "1",
		"damageType": "Piercing",
		"weight": 1,
		"properties": [
			"Ammunition",
			"Loading",
			"Range"
		],
		"range": "25/100"
	},
	{
		"name": "Hand Crossbow",
		"category": "Martial",
		"kind": "Ranged",
		"cost": "75 gp",
		"damage": "1d6",
		"damageType": "Piercing",
		"weight": 3,
		"properties": [
			"Light",
			"Range",
			"Loading",
			"Ammunition"
		],
		"range": "30/120"
	},
	{
		"name": "Heavy Crossbow",
		"category": "Martial",
		"kind": "Ranged",
		"cost": "50 gp",
		"damage": "1d10",
		"damageType": "Piercing",
		"weight": 18,
		"properties": [
			"Two-Handed",
			"Range",
			"Loading",
			"Heavy",
			"Ammunition"
		],
		"range": "100/400"
	},
	{
		"name": "Longbow",
		"category": "Martial",
		"kind": "Ranged",
		"cost": "50 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 2,
		"properties": [
			"Two-Handed",
			"Range",
			"Heavy",
			"Ammunition"
		],
		"range": "150/600"
	},
	{
		"name": "Net",
		"category": "Martial",
		"kind": "Ranged",
		"cost": "1 gp",
		"damage": "",
		"damageType": "",
		"weight": 3,
		"properties": [
			"Thrown"
		],
		"range": "5/15"
	}
];

export default weapons;
