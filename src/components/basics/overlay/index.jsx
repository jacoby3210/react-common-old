import cx from 'clsx';
import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config.js"

// ========================================================================= //
// React component for output on top of the main ui. 
// ========================================================================= //

export const Overlay = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		shown,
		timer,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [shownState, setShownState] = useState(shown);
	useEffect(() => {
		if (shownState && timer !== 0) {
			const timer = setTimeout(() => {
				setShownState(false);
			}, timer);
			return () => clearTimeout(timer);
		}
	}, [shown]);

	// input from user

	// render 

	return (
		shownState && 
		(
			<div 
				id={id}
				className={className}
				ref={self}
				{...attributes}
			>
				{children}
			</div>
		)
	);
};

Overlay.propTypes = propTypes;