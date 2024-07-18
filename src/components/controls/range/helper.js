export const animateValue = (start, end, duration, handleSetValueState) => {
	let startTime = null;

	const step = timestamp => {
		if (!startTime) startTime = timestamp;
		const progress = (timestamp - startTime) / duration;
		const newValue = start + (end - start) * progress;
		handleSetValueState(newValue);

		if (progress < 1) requestAnimationFrame(step);
		else handleSetValueState(end);
	};

	requestAnimationFrame(step);
};

export const horizontalProps = {
	cursor: "clientX",
	offset: "x",
	size: "width",
}

export const verticalProps = {
	cursor: "clientY",
	offset: "y",
	size: "height",
}