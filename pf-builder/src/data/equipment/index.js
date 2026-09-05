import weapons from './weapons';
import armor from './armor';
import adventuringGear from './adventuringGear';
import alchemical from './alchemical';
import specialSubstances from './specialSubstances';
import clothing from './clothing';
import tools from './tools';
import foodDrinkLodging from './foodDrinkLodging';
import communicationScrolls from './communicationScrolls';
import tradeGoods from './tradeGoods';
import mounts from './mounts';

export const equipmentCategories = [
	'Weapons',
	'Armor & Shields',
	'Adventuring Gear',
	'Alchemical Items',
	'Special Substances & Items',
	'Clothing',
	'Tools & Skill Kits',
	'Food, Drink & Lodging',
	'Communication & Scrolls',
	'Trade Goods',
	'Mounts & Related Gear',
];

const equipment = [
	...weapons,
	...armor,
	...adventuringGear,
	...alchemical,
	...specialSubstances,
	...clothing,
	...tools,
	...foodDrinkLodging,
	...communicationScrolls,
	...tradeGoods,
	...mounts,
];

export default equipment;
