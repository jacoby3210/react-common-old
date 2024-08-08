import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const Example = receivedProps => {

	// initial data
	const {
		id,
		children,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [valueState, setValueState] = useState(false);
	useEffect(() => {}, []);

	// input from user
	const handleClick = () => {setValueState(0);}

	// render 
	return (
		<div id={id} ref={self} {...attributes}>
			{children}
		</div>
	);
};

Example.propTypes = propTypes;

// ========================================================================= //