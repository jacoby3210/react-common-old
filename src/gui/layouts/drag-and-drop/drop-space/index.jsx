import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {Drop} from '/src/gui/layouts/drag-and-drop/drop'
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { addCursor, deleteCursor } from './helpers';
// ========================================================================= //
// React Component that can take over dragged a few components.							 //
// ========================================================================= //

export const DropSpace = receivedProps => {

	// initial data
	const {
		id,
		types,
		values,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef(null), cursorRef = useRef(null); 
	const [valuesState, setValuesState] = useState([]);
	useEffect(() => {setValuesState(values);}, [values])

	// input from user
	const handleDragEnter = (e) => cursorRef.current = addCursor(selfRef, e);
	const handleDragLeave = (e) => cursorRef.current = deleteCursor(cursorRef);

	const moveCursor = (target) => {
    const list = selfRef.current;
		let cursorIndex = Array.from(list.children).indexOf(cursorRef.current);
		let targetIndex = Array.from(list.children).indexOf(target) + 1;
		if (cursorIndex < targetIndex) targetIndex--;
		console.log(targetIndex)
    if (targetIndex > -1) {
      list.insertBefore(cursorRef.current, list.children[targetIndex]);
    }
  };

	const handleDragOver = (e) => {moveCursor(e.detail.target)};

	const handleDrop = (e) => {
		cursorRef.current = deleteCursor(cursorRef);
		const newValue = e.detail.dragRef.current.attributes["value"].value; 
		setValuesState(prev => [...prev, newValue]);
	}

	// render 
	return (
    <Drop
			id={id}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
			ref={selfRef}
			{...attributes}
    >
			{valuesState.map((item,i) => <RenderElement key={item} value={item}/>)}
    </Drop>
  );
};

DropSpace.propTypes = propTypes;