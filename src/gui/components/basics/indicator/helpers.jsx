// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const calcStyle = (
	colors,
	levels,
	max,
	value
) => {
	const displayColor = colors[levels.findLastIndex(item => item > value)],
		displayValue = value / max * 100;
	return {
		style:{ width: `${displayValue}%`, backgroundColor: displayColor },
		displayValue
	};
}

// ========================================================================= //