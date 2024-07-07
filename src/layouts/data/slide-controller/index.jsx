import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config.js"

// ========================================================================= //
// Component 
// ========================================================================= //

export const SlideController = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		infinity,
		onChangeCallback,
		total,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	useEffect(() => {
		// return () => {};
	}, []);

	// input from user
	const normalizeValue = (value) => infinity ? (value + total) % (total) : Math.min(value, total - 1);
	const handle = (v) => {setValueState(v); onChangeCallback(v); console.log(v)}
	const handleFirst = () => { handle(0); };
	const handlePrev = () => { handle(normalizeValue(valueState - 1)); };
	const handleNext = () => { handle(normalizeValue(valueState + 1)); };
	const handleLast = () => { handle(total - 1); };
	
	// render 

	return (
		<div 
			id={id}
			className={className}
			{...attributes}
		>
			<button className={`${DEFAULT_CLASS}-first`} onClick={handleFirst} disabled={valueState === 0}>
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button className={`${DEFAULT_CLASS}-prev`} onClick={handlePrev} disabled={valueState === 0 && !infinity}>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button className={`${DEFAULT_CLASS}-next`} onClick={handleNext} disabled={valueState === total - 1 && !infinity}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button className={`${DEFAULT_CLASS}-last`} onClick={handleLast} disabled={valueState === total - 1}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</div>
	);
};

SlideController.propTypes = propTypes;