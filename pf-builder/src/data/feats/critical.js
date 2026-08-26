// Core Rulebook Critical feats (require Critical Focus).
const criticalFeats = [
	{
		name: 'Critical Focus',
		type: 'Combat',
		prerequisites: 'Base attack bonus +9.',
		benefit: 'You receive a +4 bonus on attack rolls made to confirm critical hits. You may only apply the effects of one critical feat to a given critical hit, unless you also have the Critical Mastery feat.',
	},
	{
		name: 'Bleeding Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, base attack bonus +11.',
		benefit: 'Whenever you score a critical hit with a weapon that deals slashing or piercing damage, the target takes 2d6 points of bleed damage each round in addition to the damage dealt by the critical hit. This bleed damage can be stopped by a DC 15 Heal check or any effect that heals hit point damage.',
	},
	{
		name: 'Blinding Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, base attack bonus +15.',
		benefit: 'Whenever you score a critical hit, the target must succeed at a Fortitude save (DC 10 + your base attack bonus) or be permanently blinded. Even on a successful save, the target is dazzled for 1d4 rounds. This feat has no effect on creatures that do not rely on eyes for sight or that have more than two eyes.',
	},
	{
		name: 'Critical Mastery',
		type: 'Critical',
		prerequisites: 'Critical Focus, any two critical feats, 14th-level fighter.',
		benefit: 'Whenever you score a critical hit, you may apply the effects of two critical feats you possess instead of just one.',
	},
	{
		name: 'Deafening Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, base attack bonus +13.',
		benefit: 'Whenever you score a critical hit, the target must succeed at a Fortitude save (DC 10 + your base attack bonus) or be permanently deafened. A successful save reduces the deafness to 1 round instead. This feat has no effect on a target that is already deaf.',
	},
	{
		name: 'Exhausting Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, Tiring Critical, base attack bonus +15.',
		benefit: 'Whenever you score a critical hit, the target becomes exhausted. This feat has no additional effect on a target that is already exhausted.',
	},
	{
		name: 'Sickening Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, base attack bonus +11.',
		benefit: 'Whenever you score a critical hit, the target becomes sickened for 1 minute. Scoring additional critical hits with this feat extends the duration rather than stacking the condition.',
	},
	{
		name: 'Staggering Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, base attack bonus +13.',
		benefit: 'Whenever you score a critical hit, the target becomes staggered for 1d4+1 rounds. A successful Fortitude save (DC 10 + your base attack bonus) reduces this to 1 round instead.',
	},
	{
		name: 'Stunning Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, Staggering Critical, base attack bonus +17.',
		benefit: 'Whenever you score a critical hit, the target becomes stunned for 1d4 rounds. A successful Fortitude save (DC 10 + your base attack bonus) reduces this to staggered for the same duration instead.',
	},
	{
		name: 'Tiring Critical',
		type: 'Critical',
		prerequisites: 'Critical Focus, base attack bonus +13.',
		benefit: 'Whenever you score a critical hit, the target becomes fatigued. This feat has no additional effect on a target that is already fatigued or exhausted.',
	},
];

export default criticalFeats;
