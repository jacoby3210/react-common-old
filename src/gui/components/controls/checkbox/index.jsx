import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component wrapping around the classic checkbox for simplicity.
// ========================================================================= //

export const Checkbox = receivedProps => {

	// initial data
	const {
		id,
		onChange,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value]);

	// input from user
  const handleCheckboxChange = () => {
    setValueState(
			prev => {
				onChange(!prev, prev);
				return !prev
			}
		);
  };

	// render 
	return (
		<input 
        type="checkbox" 
        checked={valueState} 
				value={valueState}
        onChange={handleCheckboxChange} 
				{...attributes}
      />
	);
};

Checkbox.propTypes = propTypes;

// ========================================================================= //