import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component that can take over dragged a few components.							 //
// ========================================================================= //

export const DropSpace = receivedProps => {

	// initial data
	const {
		id,
		className,
		policy,
		types,
		RenderElement,
		onDrop,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [dragOverState, setDragOverState] = useState(false);
	const [valueState, setValueState] = useState([]);

	// input from user
	const handleDragOver = (e) => {
		if(!e.detail.current) return;
		const type =  e.detail.current.attributes["type"].value;
		const isAccept = types.includes(type);
		setDragOverState(isAccept); 
	};
  const handleDragLeave = (e) => {setDragOverState(false);};
	const handleDrop = (e) => {
		if(!dragOverState) {e.preventDefault(); return false;}
		setDragOverState(false); 
		if(!onDrop(e.detail)) {e.preventDefault(); return false;}
		const newValue = e.detail.sourceRef.current.attributes["value"].value; 
		setValueState(prev => [...prev, newValue]);
	}

	// render 
	return (
    <div
			id={id}
			className={cx(className, {[`${DEFAULT_CLASS}-accept`]: dragOverState,})}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
			{...attributes}
    >
			{valueState.map((item,i) => <RenderElement data={item} key={item.id|i}/>)}
    </div>
  );
};

DropSpace.propTypes = propTypes;