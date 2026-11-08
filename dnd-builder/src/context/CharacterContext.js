import * as React from 'react';
import { DEFAULT_EDITION } from '../data';

const CharacterContext = React.createContext(null);

// Everything that depends on the edition's rules data. Switching edition resets these so a
// 2014 race/class/background can't leak into a 2024 character (or vice versa).
const editionDependentDefaults = {
	race: { name: '', subrace: '', abilityChoices: [], skillChoices: [], lineage: '', originFeat: '' },
	classInfo: { className: '', level: 1 },
	background: {
		name: '', customName: '', customSkills: [], customProficiency: '',
		abilityMode: 'twoOne', abilityPlus2: '', abilityPlus1: '', abilityPlus1b: '', originFeat: '',
		personalityTraits: '', ideals: '', bonds: '', flaws: '',
	},
	skills: { classChoices: [] },
	equipment: { armor: '', shield: false, weapons: [], gear: [], gold: '' },
};

const initialCharacter = {
	edition: DEFAULT_EDITION,
	info: {
		name: '', player: '', alignment: '', age: '', height: '', weight: '',
		eyes: '', skin: '', hair: '', backstory: '',
	},
	abilities: {
		str: '', dex: '', con: '', int: '', wis: '', cha: '',
		generationMethod: '', rolls: [],
	},
	...editionDependentDefaults,
};

export function CharacterProvider({ children }) {
	const [character, setCharacter] = React.useState(initialCharacter);

	const updateSection = (section) => (patch) =>
		setCharacter((prev) => ({ ...prev, [section]: { ...prev[section], ...patch } }));

	const setEdition = (edition) =>
		setCharacter((prev) => (prev.edition === edition ? prev : { ...prev, edition, ...editionDependentDefaults }));

	const value = {
		character,
		setEdition,
		updateInfo: updateSection('info'),
		updateRace: updateSection('race'),
		updateClass: updateSection('classInfo'),
		updateAbilities: updateSection('abilities'),
		updateBackground: updateSection('background'),
		updateSkills: updateSection('skills'),
		updateEquipment: updateSection('equipment'),
	};

	return (
		<CharacterContext.Provider value={value}>
			{children}
		</CharacterContext.Provider>
	);
}

export function useCharacter() {
	const context = React.useContext(CharacterContext);
	if (!context) {
		throw new Error('useCharacter must be used within a CharacterProvider');
	}
	return context;
}
