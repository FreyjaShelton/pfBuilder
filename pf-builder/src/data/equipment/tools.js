// Core Rulebook Tools and Skill Kits.
const tools = [
	{ name: "Alchemist's Lab", category: 'Tools & Skill Kits', cost: '200 gp', weight: '40 lbs.', description: 'Used for making alchemical items. Provides a +2 circumstance bonus on Craft (alchemy) checks; without it you can still use the Craft (alchemy) skill, just without the bonus.' },
	{ name: "Artisan's Tools", category: 'Tools & Skill Kits', cost: '5 gp', weight: '5 lbs.', description: 'The items needed to pursue any craft. Without them you must use improvised tools (–2 penalty on Craft checks), if you can do the job at all.' },
	{ name: "Artisan's Tools, Masterwork", category: 'Tools & Skill Kits', cost: '55 gp', weight: '5 lbs.', description: 'Perfect tools for the job, granting a +2 circumstance bonus on Craft checks made with them.' },
	{ name: "Climber's Kit", category: 'Tools & Skill Kits', cost: '80 gp', weight: '5 lbs.', description: 'Crampons, pitons, ropes, and other tools that grant a +2 circumstance bonus on Climb checks.' },
	{ name: 'Disguise Kit', category: 'Tools & Skill Kits', cost: '50 gp', weight: '8 lbs.', description: 'Grants a +2 circumstance bonus on Disguise checks. A disguise kit is exhausted after 10 uses.' },
	{ name: "Healer's Kit", category: 'Tools & Skill Kits', cost: '50 gp', weight: '1 lb.', description: 'A collection of bandages and herbs that grants a +2 circumstance bonus on Heal checks. A healer\'s kit is exhausted after 10 uses.' },
	{ name: 'Holly and Mistletoe', category: 'Tools & Skill Kits', cost: '—', weight: '—', description: 'Plants commonly used by druids as a divine focus when casting spells.' },
	{ name: 'Holy Symbol, Wooden', category: 'Tools & Skill Kits', cost: '1 gp', weight: '—', description: 'Focuses positive energy and is used by good clerics and paladins (or neutral clerics casting good spells or channeling positive energy). Each religion has its own holy symbol.' },
	{ name: 'Holy Symbol, Silver', category: 'Tools & Skill Kits', cost: '25 gp', weight: '1 lb.', description: 'Focuses positive energy and is used by good clerics and paladins (or neutral clerics casting good spells or channeling positive energy). Each religion has its own holy symbol.' },
	{ name: 'Magnifying Glass', category: 'Tools & Skill Kits', cost: '100 gp', weight: '—', description: 'Allows a closer look at small objects and can substitute for flint and steel when starting fires in bright light. Grants a +2 circumstance bonus on Appraise checks involving small or highly detailed items.' },
	{ name: 'Musical Instrument, Common', category: 'Tools & Skill Kits', cost: '5 gp', weight: '3 lbs.', description: '' },
	{ name: 'Musical Instrument, Masterwork', category: 'Tools & Skill Kits', cost: '100 gp', weight: '3 lbs.', description: 'Grants a +2 circumstance bonus on Perform checks involving its use.' },
	{ name: "Scale, Merchant's", category: 'Tools & Skill Kits', cost: '2 gp', weight: '1 lb.', description: 'Grants a +2 circumstance bonus on Appraise checks involving items valued by weight, including anything made of precious metals.' },
	{ name: 'Spell Component Pouch', category: 'Tools & Skill Kits', cost: '5 gp', weight: '2 lbs.', description: "A spellcaster with a spell component pouch is assumed to have all the material components and focuses needed for spellcasting, except for those components that have a specific cost, divine focuses, and focuses that wouldn't fit in a pouch." },
	{ name: "Spellbook, Wizard's (Blank)", category: 'Tools & Skill Kits', cost: '15 gp', weight: '3 lbs.', description: 'Has 100 pages of parchment; each spell takes up one page per spell level (one page each for 0-level spells).' },
	{ name: "Thieves' Tools", category: 'Tools & Skill Kits', cost: '30 gp', weight: '1 lb.', description: 'These special tools are required to use the Disable Device skill on complex locks or devices. Without them you must use improvised tools, taking a –2 circumstance penalty on Disable Device checks.' },
	{ name: "Thieves' Tools, Masterwork", category: 'Tools & Skill Kits', cost: '100 gp', weight: '2 lbs.', description: 'Contains extra tools and tools of better make, granting a +2 circumstance bonus on Disable Device checks.' },
	{ name: 'Tool, Masterwork', category: 'Tools & Skill Kits', cost: '50 gp', weight: '1 lb.', description: 'A well-made item that is the perfect tool for the job. Grants a +2 circumstance bonus on a related skill check, if any. Bonuses provided by multiple masterwork items do not stack.' },
];

export default tools;
