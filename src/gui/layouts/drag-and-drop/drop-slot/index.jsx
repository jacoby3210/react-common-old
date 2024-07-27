import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"

// ========================================================================= //
// Component 
// ========================================================================= //

export const DropSlot = receivedProps => {

	// initial data
	const {
		children,
		id,
		className,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [valueState, setValueState] = useState([]);									//
	const [dragOverState, setDragOverState] = useState(false);				//
  const [droppedItemState, setDroppedItemState] = useState(null);		//
	useEffect(() => {}, []);

	// input from user
	const handleDragOver = (e) => {e.preventDefault(); setDragOverState(true); };
  const handleDragLeave = () => {setDragOverState(false);};
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    setDroppedItemState(data);
		setValueState([data])
    setDragOverState(false);
  };

	// render 
	return (
    <div
			id={id}
			className={cx(className, {[`${DEFAULT_CLASS}-accept`]: dragOverState,})}
			{...attributes}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
			{valueState.map((item,i) => <RenderElement data={item}/>)}
    </div>
  );
};

DropSlot.propTypes = propTypes;