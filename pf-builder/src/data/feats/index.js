import generalFeats from './general';
import combatFeats from './combat';
import criticalFeats from './critical';

const feats = [...generalFeats, ...combatFeats, ...criticalFeats];

export default feats;
