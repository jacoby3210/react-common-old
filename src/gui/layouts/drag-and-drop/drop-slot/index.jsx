import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component that can take over dragged components within an Area.		 //
// ========================================================================= //

export const DropSlot = receivedProps => {

	// initial data
	const {
		id,
		className,
		policy,
		types,
		RenderElement,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [dragOverState, setDragOverState] = useState(false);
	const [valueState, setValueState] = useState([]);

	// input from user
	const handleDragEnter = (e) => {
		if(!e.detail.current) return;
		const type =  e.detail.current.attributes["type"].value;
		const isAccept = types.includes(type);
		setDragOverState(isAccept); 
		onDragEnter(e); 
	};
  const handleDragLeave = (e) => {
		onDragLeave(e); 
		setDragOverState(false);
	};
  const handleDragOver = (e) => {
		onDragOver(e)
	};
	const handleDrop = (e) => {
		if(!dragOverState) {e.preventDefault(); return false;}
		setDragOverState(false); 
		if(!onDrop(e.detail)) {e.preventDefault(); return false;}
		const newValue = e.detail.sourceRef.current.attributes["value"].value; 
		setValueState([newValue]);
	}

	// render 
	return (
    <div
			id={id}
			className={cx(className, {[`${DEFAULT_CLASS}-accept`]: dragOverState,})}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
			{...attributes}
    >
			{valueState.map((item,i) => <RenderElement data={item} key={item.id|i}/>)}
    </div>
  );
};

DropSlot.propTypes = propTypes;