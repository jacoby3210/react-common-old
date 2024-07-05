import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config.js"

// ========================================================================= //
// React component for output on top of the main ui. 
// ========================================================================= //

export const Popup = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		shown,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [shownState, setShownState] = useState(false);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {document.removeEventListener('click', handleClickOutside, true);};
	}, [shown]);

	// input from user
	const handleClick = (evt) => { setShownState((prev) => !prev) }
	const handleClickOutside = (event) => {
		if (self.current && !self.current.contains(event.target)) {
			setShownState(false);
		}
	};

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

Popup.propTypes = propTypes;