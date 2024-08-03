import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {Drop} from '/src/gui/layouts/drag-and-drop/drop'
// ========================================================================= //
// React Component that can take over dragged a few components.							 //
// ========================================================================= //

export const DropSpace = receivedProps => {

	// initial data
	const {
		id,
		types,
		values,
		onDragOver,
		onDrop,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valuesState, setValuesState] = useState([]);
	useEffect(() => {setValuesState(values);}, [values])

	// input from user
	const handleDragEnter = (e) => {};
	const handleDragLeave = (e) => {};
	const handleDragOver = (e) => {};
	const handleDrop = (e) => {
		const newValue = e.detail.sourceRef.current.attributes["value"].value; 
		setValuesState(prev => [...prev, newValue]);
	}

	// render 
	return (
    <Drop
			id={id}
      // onDragEnter={handleDragEnter}
      // onDragLeave={handleDragLeave}
      // onDragOver={handleDragOver}
      onDrop={handleDrop}
			{...attributes}
    >
			{valuesState.map((item,i) => <RenderElement key={item} value={item}/>)}
    </Drop>
  );
};

DropSpace.propTypes = propTypes;