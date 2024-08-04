import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Drop } from '../drop';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component that can take over dragged components within an Area.		 //
// ========================================================================= //

export const DropSlot = receivedProps => {

	// initial data
	const {
		id,
		className,
		value,
		onDrop,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value])

	// input from user
	const handleDrop = (e) => {
		const newValue = e.detail.dragRef.current.attributes["value"].value; 
		setValueState(prev => {onDrop(e); return newValue;});
	}

	// render 
	return (
    <Drop
			id={id}
			className={className}
      onDrop={handleDrop}
			{...attributes}
    >
			{valueState != -1 && <RenderElement value={valueState}/>}
    </Drop>
  );
};

DropSlot.propTypes = propTypes;