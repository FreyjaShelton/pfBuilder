// Roll20's Free Basic Rules (2014) include only the Acolyte background; "Custom" follows the
// PHB "Customizing a Background" rule (any two skills, plus tool/language proficiencies).
const backgrounds = {
	Acolyte: {
		name: 'Acolyte',
		description: 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.',
		skills: ['Insight', 'Religion'],
		toolProficiencies: '',
		languages: 'Two of your choice',
		equipment: 'A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp',
		feature: {
			name: 'Shelter of the Faithful',
			description: 'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.',
		},
		gold: 15,
	},
	Custom: {
		name: 'Custom',
		description: 'Build your own background: choose any two skills, and write your own feature and equipment.',
		skills: [],
		toolProficiencies: '',
		languages: '',
		equipment: '',
		feature: { name: '', description: '' },
		gold: 0,
	},
};

export default backgrounds;
