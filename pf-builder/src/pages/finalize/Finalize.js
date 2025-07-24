import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import characterSheet from './Pathfinder_en.pdf'

const PdfEditor = () => {
	const [pdfUrl, setPdfUrl] = useState(null);

	const fillPdf = async () => {
		// Fetch the existing PDF
		const url = characterSheet
		const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

		// Load PDF
		const pdfDoc = await PDFDocument.load(existingPdfBytes);

		// Get form fields
		const form = pdfDoc.getForm();
		const pages = pdfDoc.getPages();
		const firstPage = pages[0];
		const secondPage = pages[1];
		const deity = "Deity";


		// #region Page 1

		// #region Character Info
		firstPage.drawText("Character Name", {
			x: 240,
			y: 730,
			size: 14
		});

		firstPage.drawText("LG", {
			x: 380,
			y: 730,
			size: 14
		});

		firstPage.drawText("Player", {
			x: 425,
			y: 730,
			size: 14
		});

		firstPage.drawText("Character Level", {
			x: 240,
			y: 711,
			size: 10
		});

		firstPage.drawText(deity, {
			x: 425,
			y: 711,
			size: 10
		});

		firstPage.drawText("Homeland", {
			x: 505,
			y: 711,
			size: 10
		});

		firstPage.drawText("Race", {
			x: 240,
			y: 692,
			size: 10
		});

		firstPage.drawText("Size", {
			x: 325,
			y: 692,
			size: 10
		});

		firstPage.drawText("F", {
			x: 360,
			y: 692,
			size: 10
		});

		firstPage.drawText("Age", {
			x: 395,
			y: 692,
			size: 10
		});

		firstPage.drawText("Height", {
			x: 425,
			y: 692,
			size: 10
		});

		firstPage.drawText("Weight", {
			x: 460,
			y: 692,
			size: 10
		});

		firstPage.drawText("Hair", {
			x: 500,
			y: 692,
			size: 10
		});

		firstPage.drawText("Eyes", {
			x: 530,
			y: 692,
			size: 10
		});

		// #endregion Character Info

		// #region Ability Scores

		// STR
		firstPage.drawText("10", {
			x: 73,
			y: 651,
			size: 12
		});
		firstPage.drawText("10", {
			x: 100,
			y: 651,
			size: 12
		});
		firstPage.drawText("10", {
			x: 127,
			y: 651,
			size: 12
		});
		firstPage.drawText("10", {
			x: 155,
			y: 651,
			size: 12
		});

		// DEX
		firstPage.drawText("10", {
			x: 73,
			y: 633,
			size: 12
		});
		firstPage.drawText("10", {
			x: 100,
			y: 633,
			size: 12
		});
		firstPage.drawText("10", {
			x: 127,
			y: 633,
			size: 12
		});
		firstPage.drawText("10", {
			x: 155,
			y: 633,
			size: 12
		});

		// CON
		firstPage.drawText("10", {
			x: 73,
			y: 617,
			size: 12
		});
		firstPage.drawText("10", {
			x: 100,
			y: 617,
			size: 12
		});
		firstPage.drawText("10", {
			x: 127,
			y: 617,
			size: 12
		});
		firstPage.drawText("10", {
			x: 155,
			y: 617,
			size: 12
		});

		// INT
		firstPage.drawText("10", {
			x: 73,
			y: 600,
			size: 12
		});
		firstPage.drawText("10", {
			x: 100,
			y: 600,
			size: 12
		});
		firstPage.drawText("10", {
			x: 127,
			y: 600,
			size: 12
		});
		firstPage.drawText("10", {
			x: 155,
			y: 600,
			size: 12
		});

		// WIS
		firstPage.drawText("10", {
			x: 73,
			y: 581,
			size: 12
		});
		firstPage.drawText("10", {
			x: 100,
			y: 581,
			size: 12
		});
		firstPage.drawText("10", {
			x: 127,
			y: 581,
			size: 12
		});
		firstPage.drawText("10", {
			x: 155,
			y: 581,
			size: 12
		});

		// CHA
		firstPage.drawText("10", {
			x: 73,
			y: 565,
			size: 12
		});
		firstPage.drawText("10", {
			x: 100,
			y: 565,
			size: 12
		});
		firstPage.drawText("10", {
			x: 127,
			y: 565,
			size: 12
		});
		firstPage.drawText("10", {
			x: 155,
			y: 565,
			size: 12
		});

		// #endregion Ability Scores

		// #region Character Stats

		firstPage.drawText("HP", {
			x: 242,
			y: 659,
			size: 12
		});
		firstPage.drawText("DR", {
			x: 288,
			y: 659,
			size: 12
		});

		// Move speed
		firstPage.drawText("Speed", {
			x: 365,
			y: 659,
			size: 12
		});
		firstPage.drawText("Armor Speed", {
			x: 447,
			y: 659,
			size: 12
		});
		firstPage.drawText("Fly", {
			x: 323,
			y: 635,
			size: 12
		});
		firstPage.drawText("Swim", {
			x: 400,
			y: 635,
			size: 12
		});
		firstPage.drawText("Climb", {
			x: 444,
			y: 635,
			size: 12
		});
		firstPage.drawText("Burrow", {
			x: 480,
			y: 635,
			size: 12
		});

		// Initiative
		firstPage.drawText("Init", {
			x: 241,
			y: 565,
			size: 12
		});
		firstPage.drawText("Dex", {
			x: 265,
			y: 565,
			size: 12
		});

		firstPage.drawText("AC", {
			x: 73,
			y: 537,
			size: 12
		});

		// AC
		firstPage.drawText("AC", {
			x: 73,
			y: 537,
			size: 12
		});
		firstPage.drawText("AB", {
			x: 120,
			y: 537,
			size: 12
		});
		firstPage.drawText("SB", {
			x: 147,
			y: 537,
			size: 12
		});
		firstPage.drawText("Dex", {
			x: 176,
			y: 537,
			size: 12
		});
		firstPage.drawText("Size", {
			x: 205,
			y: 537,
			size: 12
		});
		firstPage.drawText("NA", {
			x: 235,
			y: 537,
			size: 12
		});
		firstPage.drawText("DM", {
			x: 263,
			y: 537,
			size: 12
		});
		firstPage.drawText("Touch", {
			x: 72,
			y: 509,
			size: 12
		});
		firstPage.drawText("FF", {
			x: 156,
			y: 509,
			size: 12
		});

		// Fortitude saving throw
		firstPage.drawText("Fort", {
			x: 109,
			y: 476,
			size: 12
		});
		firstPage.drawText("BS", {
			x: 135,
			y: 476,
			size: 12
		});
		firstPage.drawText("Con", {
			x: 162,
			y: 476,
			size: 12
		});
		firstPage.drawText("Mag", {
			x: 190,
			y: 476,
			size: 12
		});
		firstPage.drawText("Mis", {
			x: 217,
			y: 476,
			size: 12
		});

		// Reflex saving throw
		firstPage.drawText("Ref", {
			x: 109,
			y: 458,
			size: 12
		});
		firstPage.drawText("BS", {
			x: 135,
			y: 458,
			size: 12
		});
		firstPage.drawText("Dex", {
			x: 162,
			y: 458,
			size: 12
		});
		firstPage.drawText("Mag", {
			x: 190,
			y: 458,
			size: 12
		});
		firstPage.drawText("Mis", {
			x: 217,
			y: 458,
			size: 12
		});

		// Will Saving throw
		firstPage.drawText("Will", {
			x: 109,
			y: 442,
			size: 12
		});
		firstPage.drawText("BS", {
			x: 135,
			y: 442,
			size: 12
		});
		firstPage.drawText("Wis", {
			x: 162,
			y: 442,
			size: 12
		});
		firstPage.drawText("Mag", {
			x: 190,
			y: 442,
			size: 12
		});
		firstPage.drawText("Mis", {
			x: 217,
			y: 442,
			size: 12
		});

		// Attack stuff
		firstPage.drawText("BAB", {
			x: 175,
			y: 420,
			size: 12
		});
		firstPage.drawText("SR", {
			x: 282,
			y: 420,
			size: 12
		});
		firstPage.drawText("CMB", {
			x: 130,
			y: 400,
			size: 12
		});
		firstPage.drawText("BAB", {
			x: 163,
			y: 400,
			size: 12
		});
		firstPage.drawText("STR", {
			x: 193,
			y: 400,
			size: 12
		});
		firstPage.drawText("Size", {
			x: 223,
			y: 400,
			size: 12
		});
		firstPage.drawText("CMD", {
			x: 130,
			y: 372,
			size: 12
		});
		firstPage.drawText("BAB", {
			x: 163,
			y: 372,
			size: 12
		});
		firstPage.drawText("STR", {
			x: 193,
			y: 372,
			size: 12
		});
		firstPage.drawText("Dex", {
			x: 223,
			y: 372,
			size: 12
		});
		firstPage.drawText("Size", {
			x: 254,
			y: 372,
			size: 12
		});

		// #endregion Character Stats

		// #region Weapons

		// Weapon 1
		firstPage.drawText("Weapon 1", {
			x: 31,
			y: 331,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 331,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 331,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 305,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 305,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 305,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 305,
			size: 12
		});

		// Weapon 2
		firstPage.drawText("Weapon 2", {
			x: 31,
			y: 268,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 268,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 268,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 242,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 242,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 242,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 242,
			size: 12
		});

		// Weapon 3
		firstPage.drawText("Weapon 3", {
			x: 31,
			y: 204,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 204,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 204,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 180,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 180,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 180,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 180,
			size: 12
		});

		// Weapon 4
		firstPage.drawText("Weapon 4", {
			x: 31,
			y: 142,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 142,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 142,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 116,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 116,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 116,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 116,
			size: 12
		});

		// Weapon 5
		firstPage.drawText("Weapon 5", {
			x: 31,
			y: 80,
			size: 12
		});
		firstPage.drawText("Atk Bonus", {
			x: 215,
			y: 80,
			size: 12
		});
		firstPage.drawText("Crit", {
			x: 278,
			y: 80,
			size: 12
		});
		firstPage.drawText("Type", {
			x: 31,
			y: 54,
			size: 12
		});
		firstPage.drawText("Range", {
			x: 62,
			y: 54,
			size: 12
		});
		firstPage.drawText("Ammo", {
			x: 113,
			y: 54,
			size: 12
		});
		firstPage.drawText("Damage", {
			x: 215,
			y: 54,
			size: 12
		});

		// #endregion Weapons

		// #region Skills

		// Acrobatics
		firstPage.drawText("X", {
			x: 319,
			y: 577,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 579,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 579,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 579,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 579,
			size: 10
		});

		// Appraise
		firstPage.drawText("X", {
			x: 319,
			y: 566,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 568,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 568,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 568,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 568,
			size: 10
		});

		// Bluff
		firstPage.drawText("X", {
			x: 319,
			y: 554,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 556,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 556,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 556,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 556,
			size: 10
		});

		// Climb
		firstPage.drawText("X", {
			x: 319,
			y: 543,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 545,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 545,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 545,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 545,
			size: 10
		});

		// Craft 1
		firstPage.drawText("X", {
			x: 319,
			y: 532,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 534,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 534,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 534,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 534,
			size: 10
		});

		// Craft 2
		firstPage.drawText("X", {
			x: 319,
			y: 521,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 523,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 523,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 523,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 523,
			size: 10
		});

		// Craft 3
		firstPage.drawText("X", {
			x: 319,
			y: 509,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 511,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 511,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 511,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 511,
			size: 10
		});

		// Diplomacy
		firstPage.drawText("X", {
			x: 319,
			y: 498,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 500,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 500,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 500,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 500,
			size: 10
		});

		// Disable Device
		firstPage.drawText("X", {
			x: 319,
			y: 486,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 488,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 488,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 488,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 488,
			size: 10
		});

		// Disguise
		firstPage.drawText("X", {
			x: 319,
			y: 475,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 477,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 477,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 477,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 477,
			size: 10
		});

		// Escape Artist
		firstPage.drawText("X", {
			x: 319,
			y: 464,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 466,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 466,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 466,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 466,
			size: 10
		});

		// Fly
		firstPage.drawText("X", {
			x: 319,
			y: 453,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 455,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 455,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 455,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 455,
			size: 10
		});

		// Handle Animal
		firstPage.drawText("X", {
			x: 319,
			y: 442,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 443,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 443,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 443,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 443,
			size: 10
		});

		// Heal
		firstPage.drawText("X", {
			x: 319,
			y: 430,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 431,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 431,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 431,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 431,
			size: 10
		});

		// Intimidate
		firstPage.drawText("X", {
			x: 319,
			y: 419,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 420,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 420,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 420,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 420,
			size: 10
		});

		// Knowledge Arcana
		firstPage.drawText("X", {
			x: 319,
			y: 408,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 409,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 409,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 409,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 409,
			size: 10
		});

		// Knowledge Dungeoneering
		firstPage.drawText("X", {
			x: 319,
			y: 397,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 397,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 397,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 397,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 397,
			size: 10
		});

		// Knowledge Engineering
		firstPage.drawText("X", {
			x: 319,
			y: 386,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 386,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 386,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 386,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 386,
			size: 10
		});

		// Knowledge Geography
		firstPage.drawText("X", {
			x: 319,
			y: 374,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 374,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 374,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 374,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 374,
			size: 10
		});

		// Knowledge History
		firstPage.drawText("X", {
			x: 319,
			y: 362,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 362,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 362,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 362,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 362,
			size: 10
		});

		// Knowledge Local
		firstPage.drawText("X", {
			x: 319,
			y: 351,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 351,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 351,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 351,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 351,
			size: 10
		});

		// Knowledge Nature
		firstPage.drawText("X", {
			x: 319,
			y: 340,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 340,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 340,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 340,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 340,
			size: 10
		});

		// Knowledge Nobility
		firstPage.drawText("X", {
			x: 319,
			y: 329,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 329,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 329,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 329,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 329,
			size: 10
		});

		// Knowledge Planes
		firstPage.drawText("X", {
			x: 319,
			y: 317,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 317,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 317,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 317,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 317,
			size: 10
		});

		// Knowledge Religion
		firstPage.drawText("X", {
			x: 319,
			y: 306,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 306,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 306,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 306,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 306,
			size: 10
		});

		// Linguistics
		firstPage.drawText("X", {
			x: 319,
			y: 294,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 294,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 294,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 294,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 294,
			size: 10
		});

		// Perception
		firstPage.drawText("X", {
			x: 319,
			y: 283,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 283,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 283,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 283,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 283,
			size: 10
		});

		// Perform 1
		firstPage.drawText("X", {
			x: 319,
			y: 272,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 272,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 272,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 272,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 272,
			size: 10
		});

		// Perform 2
		firstPage.drawText("X", {
			x: 319,
			y: 260,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 260,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 260,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 260,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 260,
			size: 10
		});

		// Profession 1
		firstPage.drawText("X", {
			x: 319,
			y: 249,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 249,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 249,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 249,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 249,
			size: 10
		});

		// Profession 2
		firstPage.drawText("X", {
			x: 319,
			y: 238,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 238,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 238,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 238,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 238,
			size: 10
		});

		// Ride
		firstPage.drawText("X", {
			x: 319,
			y: 226,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 226,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 226,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 226,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 226,
			size: 10
		});

		// Sense Motive
		firstPage.drawText("X", {
			x: 319,
			y: 215,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 215,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 215,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 215,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 215,
			size: 10
		});

		// Sleight of Hand
		firstPage.drawText("X", {
			x: 319,
			y: 204,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 204,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 204,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 204,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 204,
			size: 10
		});

		// Spellcraft
		firstPage.drawText("X", {
			x: 319,
			y: 192,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 192,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 192,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 192,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 192,
			size: 10
		});

		// Stealth 
		firstPage.drawText("X", {
			x: 319,
			y: 180,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 180,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 180,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 180,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 180,
			size: 10
		});

		// Survival 
		firstPage.drawText("X", {
			x: 319,
			y: 169,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 169,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 169,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 169,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 169,
			size: 10
		});

		// Swim 
		firstPage.drawText("X", {
			x: 319,
			y: 158,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 157,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 157,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 157,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 157,
			size: 10
		});

		// Use Magic Device 
		firstPage.drawText("X", {
			x: 319,
			y: 147,
			size: 6
		});
		firstPage.drawText("0", {
			x: 443,
			y: 146,
			size: 10
		});
		firstPage.drawText("0", {
			x: 490,
			y: 146,
			size: 10
		});
		firstPage.drawText("0", {
			x: 522,
			y: 146,
			size: 10
		});
		firstPage.drawText("0", {
			x: 552,
			y: 146,
			size: 10
		});

		// #endregion Skills

		// Languages
		firstPage.drawText("Common", {
			x: 322,
			y: 75,
			size: 10
		});

		// #endregion Page 1

		// #region Page 2

		// #region AC Items
		secondPage.drawText("Item 1", {
			x: 40,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 710,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 710,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 710,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 710,
			size: 14
		});

		secondPage.drawText("Item 2", {
			x: 40,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 690,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 690,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 690,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 690,
			size: 14
		});

		secondPage.drawText("Item 3", {
			x: 40,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 672,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 672,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 672,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 672,
			size: 14
		});

		secondPage.drawText("Item 4", {
			x: 40,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 654,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 654,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 654,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 654,
			size: 14
		});

		secondPage.drawText("Item 5", {
			x: 40,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 160,
			y: 636,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 636,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 636,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 636,
			size: 14
		});

		secondPage.drawText("0", {
			x: 160,
			y: 618,
			size: 14
		});
		secondPage.drawText("Type", {
			x: 190,
			y: 618,
			size: 14
		});
		secondPage.drawText("0", {
			x: 250,
			y: 618,
			size: 14
		});
		secondPage.drawText("0%", {
			x: 290,
			y: 618,
			size: 14
		});
		secondPage.drawText("0", {
			x: 337,
			y: 618,
			size: 14
		});
		secondPage.drawText("0", {
			x: 370,
			y: 618,
			size: 14
		});

		// #endregion AC Items

		// #region Gear
		secondPage.drawText("Item 1", {
			x: 40,
			y: 570,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 572,
			size: 8
		});

		secondPage.drawText("Item 2", {
			x: 40,
			y: 556,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 558,
			size: 8
		});
		
		secondPage.drawText("Item 3", {
			x: 40,
			y: 542,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 544,
			size: 8
		});

		secondPage.drawText("Item 4", {
			x: 40,
			y: 526,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 528,
			size: 8
		});

		secondPage.drawText("Item 5", {
			x: 40,
			y: 510,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 512,
			size: 8
		});

		secondPage.drawText("Item 6", {
			x: 40,
			y: 497,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 499,
			size: 8
		});

		secondPage.drawText("Item 7", {
			x: 40,
			y: 482,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 484,
			size: 8
		});

		secondPage.drawText("Item 8", {
			x: 40,
			y: 468,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 470,
			size: 8
		});

		secondPage.drawText("Item 9", {
			x: 40,
			y: 454,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 456,
			size: 8
		});

		secondPage.drawText("Item 10", {
			x: 40,
			y: 440,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 442,
			size: 8
		});

		secondPage.drawText("Item 11", {
			x: 40,
			y: 426,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 428,
			size: 8
		});
		
		secondPage.drawText("Item 12", {
			x: 40,
			y: 410,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 412,
			size: 8
		});

		secondPage.drawText("Item 13", {
			x: 40,
			y: 396,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 398,
			size: 8
		});

		secondPage.drawText("Item 14", {
			x: 40,
			y: 380,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 382,
			size: 8
		});

		secondPage.drawText("Item 15", {
			x: 40,
			y: 366,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 368,
			size: 8
		});

		secondPage.drawText("Item 16", {
			x: 40,
			y: 352,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 354,
			size: 8
		});

		secondPage.drawText("Item 17", {
			x: 40,
			y: 338,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 340,
			size: 8
		});

		secondPage.drawText("Item 18", {
			x: 40,
			y: 324,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 326,
			size: 8
		});

		secondPage.drawText("Item 19", {
			x: 40,
			y: 310,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 312,
			size: 8
		});

		secondPage.drawText("Item 20", {
			x: 40,
			y: 294,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 296,
			size: 8
		});

		secondPage.drawText("Item 21", {
			x: 40,
			y: 278,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 280,
			size: 8
		});

		secondPage.drawText("Item 22", {
			x: 40,
			y: 264,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 266,
			size: 8
		});

		secondPage.drawText("Item 23", {
			x: 40,
			y: 250,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 252,
			size: 8
		});

		secondPage.drawText("Item 24", {
			x: 40,
			y: 236,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 238,
			size: 8
		});

		secondPage.drawText("Item 25", {
			x: 40,
			y: 222,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 224,
			size: 8
		});

		secondPage.drawText("Item 26", {
			x: 40,
			y: 208,
			size: 12
		});
		secondPage.drawText("10", {
			x: 152,
			y: 210,
			size: 8
		});

		// Total Weight
		secondPage.drawText("100", {
			x: 152,
			y: 196,
			size: 8
		});

		// Move amounts
		secondPage.drawText("Light", {
			x: 73,
			y: 174,
			size: 8
		});
		secondPage.drawText("Head", {
			x: 144,
			y: 174,
			size: 8
		});
		secondPage.drawText("Med", {
			x: 73,
			y: 155,
			size: 8
		});
		secondPage.drawText("Ground", {
			x: 144,
			y: 155,
			size: 8
		});
		secondPage.drawText("Heavy", {
			x: 73,
			y: 137,
			size: 8
		});
		secondPage.drawText("Drag", {
			x: 144,
			y: 137,
			size: 8
		});

		// Money
		secondPage.drawText("Copper", {
			x: 60,
			y: 101,
			size: 8
		});
		secondPage.drawText("Silver", {
			x: 60,
			y: 87,
			size: 8
		});
		secondPage.drawText("Gold", {
			x: 60,
			y: 73,
			size: 8
		});
		secondPage.drawText("Platinum", {
			x: 60,
			y: 58,
			size: 8
		});

		// #endregion Gear

		// #region Feats

		secondPage.drawText("Feat 1", {
			x: 190,
			y: 575,
			size: 12
		});
		secondPage.drawText("Feat 2", {
			x: 190,
			y: 560,
			size: 12
		});
		secondPage.drawText("Feat 3", {
			x: 190,
			y: 545,
			size: 12
		});
		secondPage.drawText("Feat 4", {
			x: 190,
			y: 530,
			size: 12
		});
		secondPage.drawText("Feat 5", {
			x: 190,
			y: 515,
			size: 12
		});
		secondPage.drawText("Feat 6", {
			x: 190,
			y: 500,
			size: 12
		});
		secondPage.drawText("Feat 7", {
			x: 190,
			y: 486,
			size: 12
		});
		secondPage.drawText("Feat 8", {
			x: 190,
			y: 472,
			size: 12
		});
		secondPage.drawText("Feat 9", {
			x: 190,
			y: 457,
			size: 12
		});
		secondPage.drawText("Feat 10", {
			x: 190,
			y: 442,
			size: 12
		});
		secondPage.drawText("Feat 11", {
			x: 190,
			y: 428,
			size: 12
		});
		secondPage.drawText("Feat 12", {
			x: 190,
			y: 413,
			size: 12
		});

		// #endregion Feats

		// #region Special Abilities

		secondPage.drawText("Special Ability 1", {
			x: 190,
			y: 370,
			size: 12
		});
		secondPage.drawText("Special Ability 2", {
			x: 190,
			y: 355,
			size: 12
		});
		secondPage.drawText("Special Ability 3", {
			x: 190,
			y: 341,
			size: 12
		});
		secondPage.drawText("Special Ability 4", {
			x: 190,
			y: 326,
			size: 12
		});
		secondPage.drawText("Special Ability 5", {
			x: 190,
			y: 311,
			size: 12
		});
		secondPage.drawText("Special Ability 6", {
			x: 190,
			y: 297,
			size: 12
		});
		secondPage.drawText("Special Ability 7", {
			x: 190,
			y: 282,
			size: 12
		});
		secondPage.drawText("Special Ability 8", {
			x: 190,
			y: 268,
			size: 12
		});
		secondPage.drawText("Special Ability 9", {
			x: 190,
			y: 253,
			size: 12
		});
		secondPage.drawText("Special Ability 10", {
			x: 190,
			y: 238,
			size: 12
		});
		secondPage.drawText("Special Ability 11", {
			x: 190,
			y: 224,
			size: 12
		});
		secondPage.drawText("Special Ability 12", {
			x: 190,
			y: 210,
			size: 12
		});
		secondPage.drawText("Special Ability 13", {
			x: 190,
			y: 195,
			size: 12
		});
		secondPage.drawText("Special Ability 14", {
			x: 190,
			y: 180,
			size: 12
		});
		secondPage.drawText("Special Ability 15", {
			x: 190,
			y: 165,
			size: 12
		});
		secondPage.drawText("Special Ability 16", {
			x: 190,
			y: 150,
			size: 12
		});
		secondPage.drawText("Special Ability 17", {
			x: 190,
			y: 136,
			size: 12
		});
		secondPage.drawText("Special Ability 18", {
			x: 190,
			y: 121,
			size: 12
		});
		secondPage.drawText("Special Ability 19", {
			x: 190,
			y: 107,
			size: 12
		});
		secondPage.drawText("Special Ability 20", {
			x: 190,
			y: 92,
			size: 12
		});

		// #endregion Special Abilities

		// #region Spells

		// #region Spell stats

		// level 0
		secondPage.drawText("0", {
			x: 436,
			y: 689,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 689,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 689,
			size: 12
		});

		// level 1
		secondPage.drawText("0", {
			x: 436,
			y: 673,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 673,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 673,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 673,
			size: 12
		});

		// level 2
		secondPage.drawText("0", {
			x: 436,
			y: 654,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 654,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 654,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 654,
			size: 12
		});

		// level 3
		secondPage.drawText("0", {
			x: 436,
			y: 638,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 638,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 638,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 638,
			size: 12
		});

		// level 4
		secondPage.drawText("0", {
			x: 436,
			y: 620,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 620,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 620,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 620,
			size: 12
		});

		// level 5
		secondPage.drawText("0", {
			x: 436,
			y: 603,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 603,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 603,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 603,
			size: 12
		});

		// level 6
		secondPage.drawText("0", {
			x: 436,
			y: 585,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 585,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 585,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 585,
			size: 12
		});

		// level 7
		secondPage.drawText("0", {
			x: 436,
			y: 568,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 568,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 568,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 568,
			size: 12
		});

		// level 8
		secondPage.drawText("0", {
			x: 436,
			y: 550,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 550,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 550,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 550,
			size: 12
		});

		// level 9
		secondPage.drawText("0", {
			x: 436,
			y: 534,
			size: 12
		});
		secondPage.drawText("0", {
			x: 465,
			y: 534,
			size: 12
		});
		secondPage.drawText("0", {
			x: 527,
			y: 534,
			size: 12
		});
		secondPage.drawText("0", {
			x: 558,
			y: 534,
			size: 12
		});

		// #endregion Spell stats

		// #region Spell list

		// Level 0
		secondPage.drawText("Spell", {
			x: 436,
			y: 456,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 449,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 442,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 435,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 428,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 421,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 414,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 407,
			size: 8
		});

		// Level 1
		secondPage.drawText("Spell", {
			x: 436,
			y: 393,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 386,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 380,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 373,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 366,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 359,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 352,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 345,
			size: 8
		});

		// Level 2
		secondPage.drawText("Spell", {
			x: 436,
			y: 330,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 323,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 316,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 309,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 303,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 296,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 289,
			size: 8
		});

		// Level 3
		secondPage.drawText("Spell", {
			x: 436,
			y: 275,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 268,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 261,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 255,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 248,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 241,
			size: 8
		});

		// Level 4
		secondPage.drawText("Spell", {
			x: 436,
			y: 227,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 220,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 213,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 206,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 199,
			size: 8
		});

		// Level 5
		secondPage.drawText("Spell", {
			x: 436,
			y: 186,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 179,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 172,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 165,
			size: 8
		});

		// Level 6
		secondPage.drawText("Spell", {
			x: 436,
			y: 152,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 145,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 138,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 131,
			size: 8
		});

		// Level 7
		secondPage.drawText("Spell", {
			x: 436,
			y: 117,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 110,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 103,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 97,
			size: 8
		});

		// Level 8
		secondPage.drawText("Spell", {
			x: 436,
			y: 83,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 76,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 69,
			size: 8
		});

		// Level 9
		secondPage.drawText("Spell", {
			x: 436,
			y: 55,
			size: 8
		});
		secondPage.drawText("Spell", {
			x: 436,
			y: 47,
			size: 8
		});

		// #endregion Spell list

		// #endregion Spells

		// #endregion Page 2

		// Flatten the form to prevent further edits
		form.flatten();

		// Serialize PDF
		const pdfBytes = await pdfDoc.save();

		// Convert to Blob and create a URL
		const blob = new Blob([pdfBytes], { type: "application/pdf" });
		const pdfUrl = URL.createObjectURL(blob);
		setPdfUrl(pdfUrl);
	};

	return (
		<div>
			<button onClick={fillPdf}>Fill PDF</button>
			{pdfUrl && (
				<iframe
					src={pdfUrl}
					width="100%"
					height="500px"
					title="Filled PDF"
				/>
			)}
		</div>
	);
};

export default PdfEditor;
