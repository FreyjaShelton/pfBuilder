import * as React from 'react';
import skillsList from '../data/skills';

const CharacterContext = React.createContext(null);

const initialSkills = skillsList.reduce((acc, skill) => {
	acc[skill.key] = { ranks: '', specialization: '' };
	return acc;
}, {});

const initialCharacter = {
	info: {
		name: '', player: '', alignment: '', deity: '', homeland: '',
		gender: '', age: '', height: '', weight: '', hair: '', eyes: '',
	},
	classInfo: {
		className: '', level: '',
		multiclassType: '', secondaryClassName: '', secondaryLevel: '',
	},
	race: { name: '', abilityChoice: '' },
	abilities: {
		str: '', dex: '', con: '', int: '', wis: '', cha: '',
		generationMethod: '', rolls: [], pointBuyCampaign: '',
	},
	skills: initialSkills,
	feats: { selected: [] },
	equipment: { selected: [], goldMethod: '', gold: '' },
	spells: { selected: [] },
};

export function CharacterProvider({ children }) {
	const [character, setCharacter] = React.useState(initialCharacter);

	const updateSection = (section) => (patch) =>
		setCharacter((prev) => ({ ...prev, [section]: { ...prev[section], ...patch } }));

	const value = {
		character,
		updateInfo: updateSection('info'),
		updateClass: updateSection('classInfo'),
		updateRace: updateSection('race'),
		updateAbilities: updateSection('abilities'),
		updateSkills: updateSection('skills'),
		updateFeats: updateSection('feats'),
		updateEquipment: updateSection('equipment'),
		updateSpells: updateSection('spells'),
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
