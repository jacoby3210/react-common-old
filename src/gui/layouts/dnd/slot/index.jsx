import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Drop } from '../drop';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component drop which accepts only one drag element.								 //
// ========================================================================= //

export const Slot = receivedProps => {

	// initial data
	const {
		id,
		value,
		onDrop,
		TemplateDragComponent,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value])

	// input from user
	const handleDrop = useCallback(e => {
		const newValue = e.detail.dragRef.current.attributes["value"].value; 
		setValueState(prev => {onDrop(e); return newValue;});
	}, [])

	// render 
	return (
    <Drop
			id={id}
      onDrop={handleDrop}
			{...attributes}
    >
			{valueState != -1 && <TemplateDragComponent value={valueState}/>}
    </Drop>
  );
};

Slot.propTypes = propTypes;

// ========================================================================= //