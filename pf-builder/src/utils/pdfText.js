// Wraps a single string into multiple lines so each line fits within maxWidth when rendered
// with the given pdf-lib font/fontSize, breaking on word boundaries.
export function wrapText(font, text, fontSize, maxWidth) {
	if (!text) return [];
	const words = text.split(' ');
	const lines = [];
	let currentLine = '';

	words.forEach((word) => {
		const testLine = currentLine ? `${currentLine} ${word}` : word;
		if (currentLine && font.widthOfTextAtSize(testLine, fontSize) > maxWidth) {
			lines.push(currentLine);
			currentLine = word;
		} else {
			currentLine = testLine;
		}
	});
	if (currentLine) lines.push(currentLine);

	return lines;
}

// Wraps a list of entries (one per "row") into a flat list of display lines, so any entry
// whose text is too wide pushes everything after it down rather than overflowing sideways.
export function wrapEntriesToLines(font, entries, fontSize, maxWidth) {
	const lines = [];
	entries.forEach((entry) => {
		if (!entry) return;
		lines.push(...wrapText(font, entry, fontSize, maxWidth));
	});
	return lines;
}
