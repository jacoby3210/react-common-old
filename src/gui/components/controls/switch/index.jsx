import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { DEFAULT_CLASS, defaultProps, propTypes } from "./config";
// ========================================================================= //
// React Component to output multiple radio buttons as a single component.  
// ========================================================================= //

export const Switch = receivedProps => {

	// initial data
	const {
		id,
		name,
		src = [],
		value,
		onChange,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [valueState, setValueState] = useState(value);
	useEffect(()=>{setValueState(value)}, [value])

	// input from user
	const handleChange = (e) => {
		const value = e.target.value;
		setValueState(
			prev => {
				console.log(value)
				if (onChange) onChange(value, prev);
				return value;
			}
		);
	};

	// render 
	return (
		<div id={id} ref={self} {...attributes}>
			{src.map((option, index) => (
				<label key={index}>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={valueState == option.value}
						onChange={handleChange}
					/>
						{option.label}
					</label>
			))}
		</div>
	);
};

Switch.propTypes = propTypes;

// ========================================================================= //