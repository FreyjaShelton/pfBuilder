import dragonborn from './dragonborn';
import dwarf from './dwarf';
import elf from './elf';
import gnome from './gnome';
import halfElf from './halfElf';
import halfOrc from './halfOrc';
import halfling from './halfling';
import human from './human';
import tiefling from './tiefling';

const races = {
	'Dragonborn': dragonborn,
	'Dwarf': dwarf,
	'Elf': elf,
	'Gnome': gnome,
	'Half-Elf': halfElf,
	'Half-Orc': halfOrc,
	'Halfling': halfling,
	'Human': human,
	'Tiefling': tiefling,
};

export default races;
