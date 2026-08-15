const abilityLabels = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };

// Human-readable summary of a race's ability modifiers, e.g. "+2 Constitution, +2 Wisdom, -2 Charisma"
// or "+2 to one ability score of choice" for races that grant a free floating bonus.
export function formatAbilityMods(raceData) {
	if (!raceData) return '';
	const parts = Object.entries(raceData.abilityMods || {}).map(
		([key, val]) => `${val >= 0 ? '+' : ''}${val} ${abilityLabels[key]}`
	);
	if (raceData.abilityChoice) {
		parts.push(`+${raceData.abilityChoice} to one ability score of choice`);
	}
	return parts.join(', ') || 'None';
}

// Resolves a race's ability modifiers into a full { str, dex, con, int, wis, cha } delta object,
// folding in the player's chosen ability for races with a free floating bonus.
export function getRacialModifiers(raceData, chosenAbility) {
	const mods = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
	if (!raceData) return mods;
	Object.entries(raceData.abilityMods || {}).forEach(([key, val]) => {
		mods[key] += val;
	});
	if (raceData.abilityChoice && chosenAbility) {
		mods[chosenAbility] += raceData.abilityChoice;
	}
	return mods;
}
