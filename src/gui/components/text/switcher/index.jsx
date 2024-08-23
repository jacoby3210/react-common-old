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
			whenUpdateValueState,
			src,
			value,
			...attributes
		} = mergeProps(defaultProps, receivedProps);

		// hooks
		const self = useRef(null), srcRef = useRef(src);
		const [valueState, setValueState] = useState(value);

		// input from user
		const handlePrevClick = () => {
			setValueState(prev => {
				const next = prev === 0 ? srcRef.current.length - 1 : prev - 1;
				return whenUpdateValueState(next, prev);
			});
		};

		const handleNextClick = () => {
			setValueState(prev => {
				const next = prev === srcRef.current.length - 1 ? 0 : prev + 1;
				return whenUpdateValueState(next, prev);
			});
		};
		
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
