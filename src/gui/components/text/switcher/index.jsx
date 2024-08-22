import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { DEFAULT_CLASS, defaultProps, propTypes } from './config';
// ========================================================================= //
// React Component for selection one option from the source list (alt mode).
// ========================================================================= //

export const Switcher = receivedProps => {

		// initial data
		const {
			id,
			onChange,
			src,
			value,
			...attributes
		} = mergeProps(defaultProps, receivedProps);

		// hooks
		const self = useRef(null), srcRef = useRef(src);
		const [valueState, setValueState] = useState(value);

		// useEffect(() => {
		// 	if (onChange) onChange(srcRef.current[valueState]);
		// }, [src, valueState, onChange]);

		// input from user
		const handlePrevClick = () => {
			setValueState(prevIndex => 
				prevIndex === 0 ? srcRef.current.length - 1 : prevIndex - 1
			);
		};

		const handleNextClick = () => {
			setValueState(prevIndex => 
				prevIndex === srcRef.current.length - 1 ? 0 : prevIndex + 1
			);
		};
		console.log(srcRef)
		
		return (
			<div id={id} ref={self} {...attributes} className={DEFAULT_CLASS}>
				<button onClick={handlePrevClick}>←</button>
				<span>{srcRef.current[valueState].caption}</span>
				<button onClick={handleNextClick}>→</button>
			</div>
		);
};

Switcher.propTypes = propTypes;

// ========================================================================= //
