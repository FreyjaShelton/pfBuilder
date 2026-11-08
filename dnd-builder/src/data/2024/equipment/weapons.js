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
		],
		"mastery": "Slow"
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
			"Thrown"
		],
		"mastery": "Nick",
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
		],
		"mastery": "Push"
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
		"mastery": "Vex",
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
		"mastery": "Slow",
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
		"mastery": "Nick",
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
		"properties": [
			"—"
		],
		"mastery": "Sap"
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
		"mastery": "Topple",
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
		],
		"mastery": "Nick"
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
			"Thrown",
			"Versatile"
		],
		"mastery": "Sap",
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
			"Ammunition",
			"Loading",
			"Two-Handed"
		],
		"mastery": "Slow",
		"range": "80/320"
	},
	{
		"name": "Dart",
		"category": "Simple",
		"kind": "Ranged",
		"cost": "5 cp",
		"damage": "1d4",
		"damageType": "Piercing",
		"weight": 14,
		"properties": [
			"Finesse",
			"Thrown"
		],
		"mastery": "Vex",
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
			"Ammunition",
			"Two-Handed"
		],
		"mastery": "Vex",
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
			"Ammunition"
		],
		"mastery": "Slow",
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
		"mastery": "Topple",
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
		"properties": [
			"—"
		],
		"mastery": "Sap"
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
			"Heavy",
			"Reach",
			"Two-Handed"
		],
		"mastery": "Graze"
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
			"Heavy",
			"Two-Handed"
		],
		"mastery": "Cleave"
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
			"Heavy",
			"Two-Handed"
		],
		"mastery": "Graze"
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
			"Heavy",
			"Reach",
			"Two-Handed"
		],
		"mastery": "Cleave"
	},
	{
		"name": "Lance",
		"category": "Martial",
		"kind": "Melee",
		"cost": "10 gp",
		"damage": "1d10",
		"damageType": "Piercing",
		"weight": 6,
		"properties": [
			"Heavy",
			"Reach",
			"Two-Handed"
		],
		"mastery": "Topple"
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
		"mastery": "Sap",
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
		],
		"mastery": "Topple"
	},
	{
		"name": "Morningstar",
		"category": "Martial",
		"kind": "Melee",
		"cost": "15 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 4,
		"properties": [
			"—"
		],
		"mastery": "Sap"
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
			"Heavy",
			"Reach",
			"Two-Handed"
		],
		"mastery": "Push"
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
		],
		"mastery": "Vex"
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
		],
		"mastery": "Nick"
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
		],
		"mastery": "Vex"
	},
	{
		"name": "Trident",
		"category": "Martial",
		"kind": "Melee",
		"cost": "5 gp",
		"damage": "1d8",
		"damageType": "Piercing",
		"weight": 4,
		"properties": [
			"Thrown",
			"Versatile"
		],
		"mastery": "Topple",
		"versatileDamage": "1d10",
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
		"properties": [
			"Versatile"
		],
		"mastery": "Sap",
		"versatileDamage": "1d10"
	},
	{
		"name": "Warhammer",
		"category": "Martial",
		"kind": "Melee",
		"cost": "15 gp",
		"damage": "1d8",
		"damageType": "Bludgeoning",
		"weight": 5,
		"properties": [
			"Versatile"
		],
		"mastery": "Push",
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
		],
		"mastery": "Slow"
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
			"Loading"
		],
		"mastery": "Vex",
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
			"Ammunition",
			"Light",
			"Loading"
		],
		"mastery": "Vex",
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
			"Ammunition",
			"Heavy",
			"Loading",
			"Two-Handed"
		],
		"mastery": "Push",
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
			"Ammunition",
			"Heavy",
			"Two-Handed"
		],
		"mastery": "Slow",
		"range": "150/600"
	}
];

export default weapons;
