// Pathfinder Unchained Variant Multiclassing — Cleric archetype benefit tiers.
const clericArchetype = [
  {
    level: 1,
    name: 'Deity',
    description: 'You must select a deity within one alignment step of your own. You gain the cleric\'s aura, bonus languages, code of conduct, and restriction from casting spells of opposed alignments. You also gain the cleric\'s spontaneous casting ability, which you can use with any prepared casting classes that have the appropriate spells on their spell lists.',
  },
  {
    level: 3,
    name: 'Domain',
    description: 'You select one domain your deity grants, gaining that domain\'s 1st-level granted power, treating your character level as your effective cleric level.',
  },
  {
    level: 7,
    name: 'Channel Energy',
    description: 'You gain the ability to channel energy as a cleric of your character level – 6, a number of times per day equal to your Charisma modifier + 1.',
  },
  {
    level: 11,
    name: 'Improved Channel',
    description: 'Your ability to channel energy improves to that of a cleric of your character level – 4.',
  },
  {
    level: 15,
    name: 'Improved Domain',
    description: 'You gain the additional domain power of your chosen domain, treating your character level as your effective cleric level.',
  },
  {
    level: 19,
    name: 'Greater Channel',
    description: 'Your channel energy ability improves to that of a cleric of your character level – 2.',
  },
];

export default clericArchetype;
