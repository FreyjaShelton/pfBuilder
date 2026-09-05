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

// Returns the largest font size (in 0.5pt steps, down to minSize) at which text renders no
// wider than maxWidth — for single-line table cells too narrow to wrap, where shrinking to fit
// is the only option. Checks against 92% of maxWidth rather than the full value, since the
// column boundaries here are estimated from the template rather than measured precisely, and
// a small safety margin is cheaper than text that just barely clips the border.
export function fitFontSize(font, text, maxWidth, maxSize, minSize = 5) {
	if (!text) return maxSize;
	const safeWidth = maxWidth * 0.92;
	let size = maxSize;
	while (size > minSize && font.widthOfTextAtSize(text, size) > safeWidth) {
		size -= 0.5;
	}
	return size;
}
