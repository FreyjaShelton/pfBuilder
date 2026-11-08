import classes2014 from './2014/classes';
import races2014 from './2014/races';
import backgrounds2014 from './2014/backgrounds';
import * as equipment2014 from './2014/equipment';
import classes2024 from './2024/classes';
import races2024 from './2024/races';
import backgrounds2024 from './2024/backgrounds';
import * as equipment2024 from './2024/equipment';
import feats2024 from './2024/feats';

export const DEFAULT_EDITION = '2024';

// Each edition carries its own rules data. 2014 "races" are called species in 2024.
const editions = {
	'2024': {
		id: '2024',
		label: 'D&D 2024 (Revised Core Rules)',
		raceLabel: 'Species',
		classes: classes2024,
		races: races2024,
		backgrounds: backgrounds2024,
		equipment: equipment2024,
		feats: feats2024,
	},
	'2014': {
		id: '2014',
		label: 'D&D 2014 (5th Edition)',
		raceLabel: 'Race',
		classes: classes2014,
		races: races2014,
		backgrounds: backgrounds2014,
		equipment: equipment2014,
		feats: [],
	},
};

export const EDITION_IDS = Object.keys(editions);

export function getEditionData(edition) {
	return editions[edition] || editions[DEFAULT_EDITION];
}

export default editions;
