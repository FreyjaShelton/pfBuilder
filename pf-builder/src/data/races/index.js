import dwarf from './dwarf';
import elf from './elf';
import gnome from './gnome';
import halfElf from './halfElf';
import halfling from './halfling';
import halfOrc from './halfOrc';
import human from './human';

const races = {
	Dwarf: dwarf,
	Elf: elf,
	Gnome: gnome,
	'Half-Elf': halfElf,
	Halfling: halfling,
	'Half-Orc': halfOrc,
	Human: human,
};

export default races;
