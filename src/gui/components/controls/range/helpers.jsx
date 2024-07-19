import React from 'react';
import { DEFAULT_CLASS } from './config';
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
	axis: "horizontal",
	cursor: "clientX",
	offset: "x",
	size: "width",
}

export const verticalProps = {
	axis: "vertical",
	cursor: "clientY",
	offset: "y",
	size: "height",
}


export const RangeTrack = receivedProps => {
	const { children, trackRef, ...attributes } = receivedProps;
	return (
		<div
			className={`${DEFAULT_CLASS}-track`}
			ref={trackRef}
			{...attributes}
		> {children}
		</div >
	);
};

export const RangeThumb = receivedProps => {
	const { children, thumbRef, ...attributes } = receivedProps;
	return (<div
		className={`${DEFAULT_CLASS}-thumb`}
		ref={thumbRef}
		{...attributes}
	/>);
}