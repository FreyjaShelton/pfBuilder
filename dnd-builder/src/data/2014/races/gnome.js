const gnome = {
	"name": "Gnome",
	"description": "Your gnome character has certain characteristics in common with all other gnomes.",
	"abilityScoreIncrease": {
		"fixed": {
			"int": 2
		},
		"choose": null
	},
	"size": "Small",
	"speed": 25,
	"languages": "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
	"traits": [
		{
			"name": "Darkvision",
			"description": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
		},
		{
			"name": "Gnome Cunning",
			"description": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
		}
	],
	"age": "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
	"alignment": "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
	"sizeText": "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
	"tables": [],
	"subraces": [
		{
			"name": "Rock Gnome",
			"description": "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.",
			"abilityScoreIncrease": {
				"fixed": {
					"con": 1
				},
				"choose": null
			},
			"traits": [
				{
					"name": "Tinker",
					"description": "You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:"
				},
				{
					"name": "Clockwork Toy",
					"description": "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
				},
				{
					"name": "Fire Starter",
					"description": "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
				},
				{
					"name": "Music Box",
					"description": "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed."
				}
			]
		}
	]
};

export default gnome;
