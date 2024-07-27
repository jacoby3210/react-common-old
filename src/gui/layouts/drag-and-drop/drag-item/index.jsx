import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"

// ========================================================================= //
// Component 
// ========================================================================= //

export const DragItem = receivedProps => {

	// initial data
	const {
		children,
		id,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [valueState, setValueState] = useState(false);
	useEffect(() => {}, []);
	
	// input from user
	const handleDragStart = (e) => {
    e.dataTransfer.setData('text', 'Hello, World!');
  };

	// render 

	return (
		<div id={id} ref={self} {...attributes}
		draggable
      onDragStart={handleDragStart}
    >
      Drag me
		</div>
	);
};

DragItem.propTypes = propTypes;