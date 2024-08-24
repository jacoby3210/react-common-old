import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component to display text as a separate paragraph. 
// ========================================================================= //

export const Paragraph = receivedProps => {

	// initial data
	const {
		id,
		value,
		whenUpdateValueState,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [valueState, setValueState] = useState(value);

	// input from user
	const handleChange = (evt) => {
		const next = evt.target.value;
		setValueState(prev => whenUpdateValueState(next, prev));
	}

	// render 
	return (
		<textarea 	
			id={id} 
			ref={self} 
			onChange={handleChange}
			value={valueState} 
			{...attributes}
			/>
	);
};

Paragraph.propTypes = propTypes;

// ========================================================================= //