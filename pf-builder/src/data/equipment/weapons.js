// Core Rulebook Weapons (Simple, Martial, Exotic — melee, ranged, and ammunition).
const weapons = [
	// Simple Weapons — Unarmed Attacks
	{ name: 'Gauntlet', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '2 gp', dmgS: '1d2', dmgM: '1d3', critical: 'x2', range: '—', weight: '1 lb.', damageType: 'B', special: '', description: '' },
	{ name: 'Unarmed strike', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '—', dmgS: '1d2', dmgM: '1d3', critical: 'x2', range: '—', weight: '—', damageType: 'B', special: 'Nonlethal', description: '' },

	// Simple Weapons — Light Melee
	{ name: 'Dagger', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '2 gp', dmgS: '1d3', dmgM: '1d4', critical: '19-20/x2', range: '10 ft.', weight: '1 lb.', damageType: 'P or S', special: '', description: '' },
	{ name: 'Dagger, punching', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '2 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x3', range: '—', weight: '1 lb.', damageType: 'P', special: '', description: '' },
	{ name: 'Gauntlet, spiked', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '5 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '—', weight: '1 lb.', damageType: 'P', special: 'Attached', description: '' },
	{ name: 'Mace, light', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '5 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: '4 lbs.', damageType: 'B', special: '', description: '' },
	{ name: 'Sickle', category: 'Weapons', proficiency: 'Simple', weaponType: 'Light Melee', cost: '6 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: '2 lbs.', damageType: 'S', special: 'Trip', description: '' },

	// Simple Weapons — One-Handed Melee
	{ name: 'Club', category: 'Weapons', proficiency: 'Simple', weaponType: 'One-Handed Melee', cost: '—', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '10 ft.', weight: '3 lbs.', damageType: 'B', special: '', description: '' },
	{ name: 'Mace, heavy', category: 'Weapons', proficiency: 'Simple', weaponType: 'One-Handed Melee', cost: '12 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x2', range: '—', weight: '8 lbs.', damageType: 'B', special: '', description: '' },
	{ name: 'Morningstar', category: 'Weapons', proficiency: 'Simple', weaponType: 'One-Handed Melee', cost: '8 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x2', range: '—', weight: '6 lbs.', damageType: 'B and P', special: '', description: '' },
	{ name: 'Shortspear', category: 'Weapons', proficiency: 'Simple', weaponType: 'One-Handed Melee', cost: '1 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '20 ft.', weight: '3 lbs.', damageType: 'P', special: '', description: '' },

	// Simple Weapons — Two-Handed Melee
	{ name: 'Longspear', category: 'Weapons', proficiency: 'Simple', weaponType: 'Two-Handed Melee', cost: '5 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '—', weight: '9 lbs.', damageType: 'P', special: 'Brace, Reach', description: '' },
	{ name: 'Quarterstaff', category: 'Weapons', proficiency: 'Simple', weaponType: 'Two-Handed Melee', cost: '—', dmgS: '1d4/1d4', dmgM: '1d6/1d6', critical: 'x2', range: '—', weight: '4 lbs.', damageType: 'B', special: 'Double, Monk', description: '' },
	{ name: 'Spear', category: 'Weapons', proficiency: 'Simple', weaponType: 'Two-Handed Melee', cost: '2 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '20 ft.', weight: '6 lbs.', damageType: 'P', special: 'Brace', description: '' },

	// Simple Weapons — Ranged
	{ name: 'Blowgun', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ranged', cost: '2 gp', dmgS: '1', dmgM: '1d2', critical: 'x2', range: '20 ft.', weight: '1 lb.', damageType: 'P', special: '', description: '' },
	{ name: 'Crossbow, heavy', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ranged', cost: '50 gp', dmgS: '1d8', dmgM: '1d10', critical: '19-20/x2', range: '120 ft.', weight: '8 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Crossbow, light', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ranged', cost: '35 gp', dmgS: '1d6', dmgM: '1d8', critical: '19-20/x2', range: '80 ft.', weight: '4 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Dart', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ranged', cost: '5 sp', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '20 ft.', weight: '1/2 lb.', damageType: 'P', special: '', description: '' },
	{ name: 'Javelin', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ranged', cost: '1 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '30 ft.', weight: '2 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Sling', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ranged', cost: '—', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '50 ft.', weight: '—', damageType: 'B', special: '', description: '' },

	// Simple Weapons — Ammunition
	{ name: 'Bolts, crossbow (10)', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ammunition', cost: '1 gp', dmgS: '—', dmgM: '—', critical: '—', range: '—', weight: '1 lb.', damageType: '—', special: '', description: '' },
	{ name: 'Bullets, sling (10)', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ammunition', cost: '1 sp', dmgS: '—', dmgM: '—', critical: '—', range: '—', weight: '5 lbs.', damageType: '—', special: '', description: '' },
	{ name: 'Darts, blowgun (10)', category: 'Weapons', proficiency: 'Simple', weaponType: 'Ammunition', cost: '5 sp', dmgS: '—', dmgM: '—', critical: '—', range: '—', weight: '1 lb.', damageType: '—', special: '', description: '' },

	// Martial Weapons — Light Melee
	{ name: 'Axe, throwing', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '8 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '10 ft.', weight: '2 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Hammer, light', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '1 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '20 ft.', weight: '2 lbs.', damageType: 'B', special: '', description: '' },
	{ name: 'Handaxe', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '6 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x3', range: '—', weight: '3 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Kukri', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '8 gp', dmgS: '1d3', dmgM: '1d4', critical: '18-20/x2', range: '—', weight: '2 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Pick, light', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '4 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x4', range: '—', weight: '3 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Sap', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '1 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: '2 lbs.', damageType: 'B', special: 'Nonlethal', description: '' },
	{ name: 'Shield, light', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '3 gp/9 gp', dmgS: '1d2', dmgM: '1d3', critical: 'x2', range: '—', weight: 'special', damageType: 'B', special: '', description: '' },
	{ name: 'Spiked armor', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: 'special', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: 'special', damageType: 'P', special: '', description: '' },
	{ name: 'Spiked shield, light', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '13 gp/19 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '—', weight: 'special', damageType: 'P', special: '', description: '' },
	{ name: 'Starknife', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '24 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x3', range: '20 ft.', weight: '3 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Sword, short', category: 'Weapons', proficiency: 'Martial', weaponType: 'Light Melee', cost: '10 gp', dmgS: '1d4', dmgM: '1d6', critical: '19-20/x2', range: '—', weight: '2 lbs.', damageType: 'P', special: '', description: '' },

	// Martial Weapons — One-Handed Melee
	{ name: 'Battleaxe', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '10 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '—', weight: '6 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Flail, light', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '8 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x2', range: '—', weight: '5 lbs.', damageType: 'B', special: 'Disarm, Trip', description: '' },
	{ name: 'Longsword', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '15 gp', dmgS: '1d6', dmgM: '1d8', critical: '19-20/x2', range: '—', weight: '4 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Pick, heavy', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '8 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x4', range: '—', weight: '6 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Rapier', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '20 gp', dmgS: '1d4', dmgM: '1d6', critical: '18-20/x2', range: '—', weight: '2 lbs.', damageType: 'P', special: 'Finesse', description: '' },
	{ name: 'Scimitar', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '15 gp', dmgS: '1d4', dmgM: '1d6', critical: '18-20/x2', range: '—', weight: '4 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Shield, heavy', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: 'special', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '—', weight: 'special', damageType: 'B', special: '', description: '' },
	{ name: 'Spiked shield, heavy', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '17 gp/30 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: 'special', damageType: 'P', special: '', description: '' },
	{ name: 'Trident', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '15 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x2', range: '10 ft.', weight: '4 lbs.', damageType: 'P', special: 'Brace', description: '' },
	{ name: 'Warhammer', category: 'Weapons', proficiency: 'Martial', weaponType: 'One-Handed Melee', cost: '12 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '—', weight: '5 lbs.', damageType: 'B', special: '', description: '' },

	// Martial Weapons — Two-Handed Melee
	{ name: 'Falchion', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '75 gp', dmgS: '1d6', dmgM: '2d4', critical: '18-20/x2', range: '—', weight: '8 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Flail, heavy', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '15 gp', dmgS: '1d8', dmgM: '1d10', critical: '19-20/x2', range: '—', weight: '10 lbs.', damageType: 'B', special: 'Disarm, Trip', description: '' },
	{ name: 'Glaive', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '8 gp', dmgS: '1d8', dmgM: '1d10', critical: 'x3', range: '—', weight: '10 lbs.', damageType: 'S', special: 'Reach', description: '' },
	{ name: 'Greataxe', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '20 gp', dmgS: '1d10', dmgM: '1d12', critical: 'x3', range: '—', weight: '12 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Greatclub', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '5 gp', dmgS: '1d8', dmgM: '1d10', critical: 'x2', range: '—', weight: '8 lbs.', damageType: 'B', special: '', description: '' },
	{ name: 'Greatsword', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '50 gp', dmgS: '1d10', dmgM: '2d6', critical: '19-20/x2', range: '—', weight: '8 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Guisarme', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '9 gp', dmgS: '1d6', dmgM: '2d4', critical: 'x3', range: '—', weight: '12 lbs.', damageType: 'S', special: 'Reach, Trip', description: '' },
	{ name: 'Halberd', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '10 gp', dmgS: '1d8', dmgM: '1d10', critical: 'x3', range: '—', weight: '12 lbs.', damageType: 'P or S', special: 'Brace, Trip', description: '' },
	{ name: 'Lance', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '10 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '—', weight: '10 lbs.', damageType: 'P', special: 'Reach', description: 'Deals double damage when used from a charging mount; treated as a one-handed weapon while mounted.' },
	{ name: 'Ranseur', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '10 gp', dmgS: '1d6', dmgM: '2d4', critical: 'x3', range: '—', weight: '12 lbs.', damageType: 'P', special: 'Disarm, Reach', description: '' },
	{ name: 'Scythe', category: 'Weapons', proficiency: 'Martial', weaponType: 'Two-Handed Melee', cost: '18 gp', dmgS: '1d6', dmgM: '2d4', critical: 'x4', range: '—', weight: '10 lbs.', damageType: 'P or S', special: 'Trip', description: '' },

	// Martial Weapons — Ranged
	{ name: 'Longbow', category: 'Weapons', proficiency: 'Martial', weaponType: 'Ranged', cost: '75 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '100 ft.', weight: '3 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Longbow, composite', category: 'Weapons', proficiency: 'Martial', weaponType: 'Ranged', cost: '100 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '110 ft.', weight: '3 lbs.', damageType: 'P', special: '', description: 'Can be built with a Strength rating (+0 to +5) that adds to damage; cost increases by 100 gp per point of Strength bonus.' },
	{ name: 'Shortbow', category: 'Weapons', proficiency: 'Martial', weaponType: 'Ranged', cost: '30 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x3', range: '60 ft.', weight: '2 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Shortbow, composite', category: 'Weapons', proficiency: 'Martial', weaponType: 'Ranged', cost: '75 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x3', range: '70 ft.', weight: '2 lbs.', damageType: 'P', special: '', description: 'Can be built with a Strength rating (+0 to +5) that adds to damage; cost increases by 100 gp per point of Strength bonus.' },

	// Martial Weapons — Ammunition
	{ name: 'Arrows, common (20)', category: 'Weapons', proficiency: 'Martial', weaponType: 'Ammunition', cost: '1 gp', dmgS: '—', dmgM: '—', critical: '—', range: '—', weight: '3 lbs.', damageType: '—', special: '', description: '' },

	// Exotic Weapons — Light Melee
	{ name: 'Kama', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Light Melee', cost: '2 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: '2 lbs.', damageType: 'S', special: 'Monk, Trip', description: '' },
	{ name: 'Nunchaku', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Light Melee', cost: '2 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: '2 lbs.', damageType: 'B', special: 'Disarm, Monk', description: '' },
	{ name: 'Sai', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Light Melee', cost: '1 gp', dmgS: '1d3', dmgM: '1d4', critical: 'x2', range: '—', weight: '1 lb.', damageType: 'B', special: 'Disarm, Monk', description: '' },
	{ name: 'Siangham', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Light Melee', cost: '3 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '—', weight: '1 lb.', damageType: 'P', special: 'Monk', description: '' },

	// Exotic Weapons — One-Handed Melee
	{ name: 'Sword, bastard', category: 'Weapons', proficiency: 'Exotic', weaponType: 'One-Handed Melee', cost: '35 gp', dmgS: '1d8', dmgM: '1d10', critical: '19-20/x2', range: '—', weight: '6 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Waraxe, dwarven', category: 'Weapons', proficiency: 'Exotic', weaponType: 'One-Handed Melee', cost: '30 gp', dmgS: '1d8', dmgM: '1d10', critical: 'x3', range: '—', weight: '8 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Whip', category: 'Weapons', proficiency: 'Exotic', weaponType: 'One-Handed Melee', cost: '1 gp', dmgS: '1d2', dmgM: '1d3', critical: 'x2', range: '—', weight: '2 lbs.', damageType: 'S', special: 'Disarm, Nonlethal, Reach, Trip', description: '' },

	// Exotic Weapons — Two-Handed Melee
	{ name: 'Axe, orc double', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Two-Handed Melee', cost: '60 gp', dmgS: '1d6/1d6', dmgM: '1d8/1d8', critical: 'x3', range: '—', weight: '15 lbs.', damageType: 'S', special: 'Double', description: '' },
	{ name: 'Chain, spiked', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Two-Handed Melee', cost: '25 gp', dmgS: '1d6', dmgM: '2d4', critical: 'x2', range: '—', weight: '10 lbs.', damageType: 'P', special: 'Disarm, Trip', description: '' },
	{ name: 'Flail, dire', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Two-Handed Melee', cost: '90 gp', dmgS: '1d6/1d6', dmgM: '1d8/1d8', critical: 'x2', range: '—', weight: '10 lbs.', damageType: 'B', special: 'Disarm, Double, Trip', description: '' },
	{ name: 'Hammer, gnome hooked', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Two-Handed Melee', cost: '20 gp', dmgS: '1d6/1d4', dmgM: '1d8/1d6', critical: 'x3/x4', range: '—', weight: '6 lbs.', damageType: 'B or P', special: 'Double, Trip', description: '' },
	{ name: 'Sword, elven curve blade', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Two-Handed Melee', cost: '80 gp', dmgS: '1d8', dmgM: '1d10', critical: '18-20/x2', range: '—', weight: '7 lbs.', damageType: 'S', special: '', description: '' },
	{ name: 'Sword, two-bladed', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Two-Handed Melee', cost: '100 gp', dmgS: '1d8/1d8', dmgM: '1d10/1d10', critical: '19-20/x2', range: '—', weight: '10 lbs.', damageType: 'S', special: 'Double', description: '' },

	// Exotic Weapons — Ranged
	{ name: 'Bolas', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '5 gp', dmgS: '1d4', dmgM: '1d6', critical: 'x2', range: '10 ft.', weight: '2 lbs.', damageType: 'B', special: 'Trip', description: '' },
	{ name: 'Crossbow, hand', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '100 gp', dmgS: '1d4', dmgM: '1d6', critical: '19-20/x2', range: '30 ft.', weight: '2 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Crossbow, repeating heavy', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '400 gp', dmgS: '1d8', dmgM: '1d10', critical: '19-20/x2', range: '120 ft.', weight: '12 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Crossbow, repeating light', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '250 gp', dmgS: '1d6', dmgM: '1d8', critical: '19-20/x2', range: '80 ft.', weight: '6 lbs.', damageType: 'P', special: '', description: '' },
	{ name: 'Net', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '20 gp', dmgS: '—', dmgM: '—', critical: '—', range: '10 ft.', weight: '6 lbs.', damageType: '—', special: '', description: 'A thrown weapon that entangles the target instead of dealing damage.' },
	{ name: 'Shuriken', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '1 gp', dmgS: '1d2', dmgM: '1d3', critical: 'x2', range: '10 ft.', weight: '1/2 lb.', damageType: 'P', special: '', description: '' },
	{ name: 'Sling staff', category: 'Weapons', proficiency: 'Exotic', weaponType: 'Ranged', cost: '5 gp', dmgS: '1d6', dmgM: '1d8', critical: 'x3', range: '80 ft.', weight: '4 lbs.', damageType: 'B', special: '', description: '' },
];

export default weapons;
