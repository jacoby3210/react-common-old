import React from 'react';
import { DEFAULT_CLASS } from './config';
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// Props
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

// Inline components.
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

// Control value.
export const valueAnimate = (start, end, duration, handleSetValueState) => {
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

export const valueFromPosition = (
	rect, props, clientOffset, thumbOffset
) => {
	const relative = clientOffset - rect[props.offset] - thumbOffset;
	const newValue = Math.max(0, Math.min(1, relative / rect[props.size]));
	console.log(newValue, relative , clientOffset, rect[props.offset], thumbOffset, rect[props.size])
	return newValue;
};

export const valueNormalize = (value, min, max, step) => {
	return min + Math.round((value * (max - min)) / step) * step
}

export const valueToStyle = (axis, value, min, max) => {
	const style = `${((value - min) / (max - min)) * 100.0}%`
	return axis ? { left: style } : { top: style }
};

// ========================================================================= //