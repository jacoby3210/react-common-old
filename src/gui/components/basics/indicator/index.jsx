import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { calcStyle } from './helpers';
// ========================================================================= //
// React Component for output of values in the range from 0 to 100 %.
// ========================================================================= //

export const Indicator = receivedProps => {

	// initial data
	const {
		id,
		colors,
		levels,
		max,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(false);
	useEffect(() => {setValueState(value)}, [value]);

	// render 
	const {style, displayValue} = calcStyle(colors, levels, max, valueState);
	return (
		<div id={id} {...attributes}>
			<div style={style}>
				<span style={null}>{displayValue}%</span>
			</div>
		</div >
	);
};

Indicator.propTypes = propTypes;

// ========================================================================= //