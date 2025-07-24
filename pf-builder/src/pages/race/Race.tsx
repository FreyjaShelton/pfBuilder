import * as React from 'react';
import CardRoot from '../../components/CardRoot'; // Assuming CardRoot.tsx is in this path

const Race: React.FC = () => {
  return (
    <CardRoot title={"Race"}>
      Races available: Dwarf, Elf, Gnome, Half-Elf, Halfling, Half-Orc, Human
    </CardRoot>
  );
};

export default Race;