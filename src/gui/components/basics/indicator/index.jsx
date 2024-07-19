import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"

// ========================================================================= //
// React Component for output of values in the range from 0 to 100 %. 
// ========================================================================= //

export const Indicator = receivedProps => {

	// unpack properties
	const {
		className,
		id,
		colors,
		levels,
		max,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	useEffect(() => { }, [value]);

	// input from user

	// render 
	const displayColor = colors[levels.findLastIndex(item => item > value)];
	const displayValue = value / max * 100;
	const internalStyle = { width: `${displayValue}%`, backgroundColor: displayColor };

	return (
		<div
			id={id}
			className={className}
			ref={self}
			{...attributes}
		>
			<div style={internalStyle}>
				<span style={null}>{displayValue}%</span>
			</div>
		</div >
	);
};

Indicator.propTypes = propTypes;