const wizardSteps = ["Home", "Class", "Race", "Abilities", "Skills", "Feats", "Equipment", "Finalize"];

export function getStepEyebrow(pageName) {
	const index = wizardSteps.indexOf(pageName);
	return `Step ${index + 1} of ${wizardSteps.length}`;
}

export default wizardSteps;
