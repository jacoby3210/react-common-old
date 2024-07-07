import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"

// ========================================================================= //
// Controls the switching of displayed slide in the viewing area. 
// ========================================================================= //

export const CarouselController = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		onChangeCallback,
		count,
		offset,
		infinity,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);

	// input from user
	const normalizeValue = (value) => infinity ? (value + count) % (count) : Math.min(value, count - 1);
	const handle = (v) => {setValueState(v); onChangeCallback(v);}
	const handleFirst = () => { handle(offset); };
	const handlePrev = () => { handle(normalizeValue(valueState - 1)); };
	const handleNext = () => { handle(normalizeValue(valueState + 1)); };
	const handleLast = () => { handle(count - 1 + offset); };
	
	// render 

	return (
		<div 
			id={id}
			className={className}
			{...attributes}
		>
			<button className={`${DEFAULT_CLASS}-first`} onClick={handleFirst} disabled={valueState === offset}>
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button className={`${DEFAULT_CLASS}-prev`} onClick={handlePrev} disabled={valueState === offset && !infinity}>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button className={`${DEFAULT_CLASS}-next`} onClick={handleNext} disabled={valueState === count + offset - 1 && !infinity}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button className={`${DEFAULT_CLASS}-last`} onClick={handleLast} disabled={valueState === count + offset - 1}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</div>
	);
};

CarouselController.propTypes = propTypes;