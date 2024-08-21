import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component wrapping around the classic checkbox for simplicity.
// ========================================================================= //

export const CheckBox = receivedProps => {

	// initial data
	const {
		id,
		value,
		whenUpdateValueState,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	useEffect(() => {
		if(value != valueState) {
			// handleUpdateValueState(value);
			console.log(receivedProps, value, valueState, attributes)
		}
	}, [value]);

	// input from user
  const handleUpdateValueState = (next) => {
    setValueState(
			prev => {
				whenUpdateValueState(next, prev);
				return next;
			}
		);
  };

	// render 
	return (
		<input 
        type="checkbox" 
        checked={valueState} 
				value={valueState}
        onChange={handleUpdateValueState.bind(null, !valueState)} 
				{...attributes}
      />
	);
};

CheckBox.propTypes = propTypes;

// ========================================================================= //