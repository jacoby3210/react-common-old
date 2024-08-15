import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React component for render content on top of the main ui.  
// ========================================================================= //

export const Popup = receivedProps => {

	// initial data
	const {
		id,
		children,
		shown,
		whenUpdateShownState,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef();
	const [shownState, setShownState] = useState(shown);
	useEffect(() => {
		setShownState(shown);
		document.addEventListener('click', handleClickOutside, true);
		return () => { 
			document.removeEventListener('click', handleClickOutside, true); 
		};
	}, [shown]);

	// input from user
	const handleClickOutside = useCallback(e => {
		if (self.current && !self.current.contains(e.target)) {
			setShownState(false);
			whenUpdateShownState(false)
		}
	}, []);

	// render 
	return (
		shownState &&
		(
			<div id={id} ref={selfRef} {...attributes}>
				{children}
			</div>
		)
	);
};

Popup.propTypes = propTypes;

// ========================================================================= //