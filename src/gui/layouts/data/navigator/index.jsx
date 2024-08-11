import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Switching of displayed slide in the viewing area by linear order. 
// ========================================================================= //

export const Navigator = receivedProps => {

	// initial data
	const {
		children,
		id,
		length,
		infinity,
		value,
		onStateUpdate,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);

	// input from user
	const handleState = (v) => {setValueState(v); onStateUpdate(v);}
	const normalizeValue = (value) => 
		infinity 
		? (value + length) % (length) 
		: Math.min(value, length - 1);

	// render 
	
	const btnFirstProps = {
		className: `${DEFAULT_CLASS}-first`,
		onClick: () => { handleState(0); },
		disabled: valueState === 0,
	}
	const btnPrevProps = {
		className: `${DEFAULT_CLASS}-first`,
		onClick: () => { handleState(normalizeValue(valueState - 1)); },
		disabled: valueState === 0 && !infinity,
	}
	const btnNextProps = {
		className: `${DEFAULT_CLASS}-next`,
		onClick: () => { handleState(normalizeValue(valueState + 1)); },
		disabled: valueState === length - 1 && !infinity,
	}
	const btnLastProps = {
		className: `${DEFAULT_CLASS}-last`,
		onClick: () => { handleState(length - 1); },
		disabled: valueState === length - 1,
	}

	return (
		<div id={id} {...attributes}>
			<button {...btnFirstProps} >
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button {...btnPrevProps}>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button {...btnNextProps}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button {...btnLastProps}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</div>
	);
	
};

Navigator.propTypes = propTypes;

// ========================================================================= //