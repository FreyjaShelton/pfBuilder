// Core Rulebook Armor and Shields (Light, Medium, Heavy, and Shields).
const armor = [
	{ name: 'Padded', category: 'Armor & Shields', armorType: 'Light', cost: '5 gp', armorBonus: '+1', maxDex: '+8', checkPenalty: '0', spellFailure: '5%', speed30: '30 ft.', speed20: '20 ft.', weight: '10 lbs.', description: '' },
	{ name: 'Leather', category: 'Armor & Shields', armorType: 'Light', cost: '10 gp', armorBonus: '+2', maxDex: '+6', checkPenalty: '0', spellFailure: '10%', speed30: '30 ft.', speed20: '20 ft.', weight: '15 lbs.', description: '' },
	{ name: 'Studded Leather', category: 'Armor & Shields', armorType: 'Light', cost: '25 gp', armorBonus: '+3', maxDex: '+5', checkPenalty: '-1', spellFailure: '15%', speed30: '30 ft.', speed20: '20 ft.', weight: '20 lbs.', description: '' },
	{ name: 'Chain Shirt', category: 'Armor & Shields', armorType: 'Light', cost: '100 gp', armorBonus: '+4', maxDex: '+4', checkPenalty: '-2', spellFailure: '20%', speed30: '30 ft.', speed20: '20 ft.', weight: '25 lbs.', description: '' },
	{ name: 'Hide', category: 'Armor & Shields', armorType: 'Medium', cost: '15 gp', armorBonus: '+4', maxDex: '+4', checkPenalty: '-3', spellFailure: '20%', speed30: '20 ft.', speed20: '15 ft.', weight: '25 lbs.', description: '' },
	{ name: 'Scale Mail', category: 'Armor & Shields', armorType: 'Medium', cost: '50 gp', armorBonus: '+5', maxDex: '+3', checkPenalty: '-4', spellFailure: '25%', speed30: '20 ft.', speed20: '15 ft.', weight: '30 lbs.', description: '' },
	{ name: 'Chainmail', category: 'Armor & Shields', armorType: 'Medium', cost: '150 gp', armorBonus: '+6', maxDex: '+2', checkPenalty: '-5', spellFailure: '30%', speed30: '20 ft.', speed20: '15 ft.', weight: '40 lbs.', description: '' },
	{ name: 'Breastplate', category: 'Armor & Shields', armorType: 'Medium', cost: '200 gp', armorBonus: '+6', maxDex: '+3', checkPenalty: '-4', spellFailure: '25%', speed30: '20 ft.', speed20: '15 ft.', weight: '30 lbs.', description: '' },
	{ name: 'Splint Mail', category: 'Armor & Shields', armorType: 'Heavy', cost: '200 gp', armorBonus: '+7', maxDex: '+0', checkPenalty: '-7', spellFailure: '40%', speed30: '20 ft.', speed20: '15 ft.', weight: '45 lbs.', description: '' },
	{ name: 'Banded Mail', category: 'Armor & Shields', armorType: 'Heavy', cost: '250 gp', armorBonus: '+7', maxDex: '+1', checkPenalty: '-6', spellFailure: '35%', speed30: '20 ft.', speed20: '15 ft.', weight: '35 lbs.', description: '' },
	{ name: 'Half-Plate', category: 'Armor & Shields', armorType: 'Heavy', cost: '600 gp', armorBonus: '+8', maxDex: '+0', checkPenalty: '-7', spellFailure: '40%', speed30: '20 ft.', speed20: '15 ft.', weight: '50 lbs.', description: '' },
	{ name: 'Full Plate', category: 'Armor & Shields', armorType: 'Heavy', cost: '1,500 gp', armorBonus: '+9', maxDex: '+1', checkPenalty: '-6', spellFailure: '35%', speed30: '20 ft.', speed20: '15 ft.', weight: '50 lbs.', description: '' },
	{ name: 'Buckler', category: 'Armor & Shields', armorType: 'Shield', cost: '5 gp', armorBonus: '+1', maxDex: '—', checkPenalty: '-1', spellFailure: '5%', speed30: '—', speed20: '—', weight: '5 lbs.', description: '' },
	{ name: 'Shield, Light Wooden', category: 'Armor & Shields', armorType: 'Shield', cost: '3 gp', armorBonus: '+1', maxDex: '—', checkPenalty: '-1', spellFailure: '5%', speed30: '—', speed20: '—', weight: '5 lbs.', description: '' },
	{ name: 'Shield, Light Steel', category: 'Armor & Shields', armorType: 'Shield', cost: '9 gp', armorBonus: '+1', maxDex: '—', checkPenalty: '-1', spellFailure: '5%', speed30: '—', speed20: '—', weight: '6 lbs.', description: '' },
	{ name: 'Shield, Heavy Wooden', category: 'Armor & Shields', armorType: 'Shield', cost: '7 gp', armorBonus: '+2', maxDex: '—', checkPenalty: '-2', spellFailure: '15%', speed30: '—', speed20: '—', weight: '10 lbs.', description: '' },
	{ name: 'Shield, Heavy Steel', category: 'Armor & Shields', armorType: 'Shield', cost: '20 gp', armorBonus: '+2', maxDex: '—', checkPenalty: '-2', spellFailure: '15%', speed30: '—', speed20: '—', weight: '15 lbs.', description: '' },
	{ name: 'Shield, Tower', category: 'Armor & Shields', armorType: 'Shield', cost: '30 gp', armorBonus: '+4', maxDex: '+2', checkPenalty: '-10', spellFailure: '50%', speed30: '—', speed20: '—', weight: '45 lbs.', description: '' },
];

export default armor;
