// Core Rulebook Mounts and Related Gear.
const mounts = [
  { name: 'Barding (Medium Creature)', category: 'Mounts & Related Gear', cost: '×2', weight: '×1', description: 'Barding for a pony or other Medium mount costs twice as much as armor made for a Medium humanoid, and weighs the same.' },
  { name: 'Barding (Large Creature)', category: 'Mounts & Related Gear', cost: '×4', weight: '×2', description: 'Barding for a horse or other Large mount costs four times as much as armor made for a Medium humanoid, and weighs twice as much.' },
  { name: 'Bit and Bridle', category: 'Mounts & Related Gear', cost: '2 gp', weight: '1 lb.', description: '' },
  { name: 'Dog (Guard)', category: 'Mounts & Related Gear', cost: '25 gp', weight: '—', description: '' },
  { name: 'Dog (Riding)', category: 'Mounts & Related Gear', cost: '150 gp', weight: '—', description: 'A Medium dog specially trained to carry a Small humanoid rider; its rider takes no damage from falling off it.' },
  { name: 'Donkey or Mule', category: 'Mounts & Related Gear', cost: '8 gp', weight: '—', description: 'Stolid, hardy, and surefooted, a donkey or mule is willing to enter dungeons and other strange or threatening places that a horse would balk at.' },
  { name: 'Feed (Per Day)', category: 'Mounts & Related Gear', cost: '5 cp', weight: '10 lbs.', description: 'Horses, donkeys, mules, and ponies can graze instead, but a riding dog must be fed meat.' },
  { name: 'Horse (Heavy)', category: 'Mounts & Related Gear', cost: '200 gp', weight: '—', description: 'A horse is suitable as a mount for a human, dwarf, elf, half-elf, or half-orc.' },
  { name: 'Horse (Heavy, Combat Trained)', category: 'Mounts & Related Gear', cost: '300 gp', weight: '—', description: 'A war-trained horse can be ridden into combat without danger of it bolting.' },
  { name: 'Horse (Light)', category: 'Mounts & Related Gear', cost: '75 gp', weight: '—', description: 'A horse is suitable as a mount for a human, dwarf, elf, half-elf, or half-orc.' },
  { name: 'Horse (Light, Combat Trained)', category: 'Mounts & Related Gear', cost: '110 gp', weight: '—', description: 'A war-trained horse can be ridden into combat without danger of it bolting.' },
  { name: 'Pony', category: 'Mounts & Related Gear', cost: '30 gp', weight: '—', description: 'A pony is smaller than a horse and is a suitable mount for a gnome or halfling.' },
  { name: 'Pony (Combat Trained)', category: 'Mounts & Related Gear', cost: '45 gp', weight: '—', description: 'A war-trained pony can be ridden into combat without danger of it bolting.' },
  { name: 'Saddle (Military)', category: 'Mounts & Related Gear', cost: '20 gp', weight: '30 lbs.', description: 'Braces the rider, granting a +2 circumstance bonus on Ride checks to stay in the saddle and a 75% chance to remain seated if knocked unconscious.' },
  { name: 'Saddle (Pack)', category: 'Mounts & Related Gear', cost: '5 gp', weight: '15 lbs.', description: 'A pack saddle holds gear and supplies instead of a rider, carrying as much as the mount can bear.' },
  { name: 'Saddle (Riding)', category: 'Mounts & Related Gear', cost: '10 gp', weight: '25 lbs.', description: 'If you are knocked unconscious while in a riding saddle, you have a 50% chance to stay in the saddle.' },
  { name: 'Saddle, Exotic (Military)', category: 'Mounts & Related Gear', cost: '60 gp', weight: '40 lbs.', description: 'An exotic saddle designed for an unusual mount, functioning as a military saddle.' },
  { name: 'Saddle, Exotic (Pack)', category: 'Mounts & Related Gear', cost: '15 gp', weight: '20 lbs.', description: 'An exotic saddle designed for an unusual mount, functioning as a pack saddle.' },
  { name: 'Saddle, Exotic (Riding)', category: 'Mounts & Related Gear', cost: '30 gp', weight: '30 lbs.', description: 'An exotic saddle designed for an unusual mount, functioning as a riding saddle.' },
  { name: 'Saddlebags', category: 'Mounts & Related Gear', cost: '4 gp', weight: '8 lbs.', description: '' },
  { name: 'Stabling (Per Day)', category: 'Mounts & Related Gear', cost: '5 sp', weight: '—', description: '' },
];

export default mounts;
