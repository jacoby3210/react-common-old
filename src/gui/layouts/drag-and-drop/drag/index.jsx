import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Component 
// ========================================================================= //

export const Drag = receivedProps => {

	// initial data
	const {
		children,
		id,
		axis,
		mode,
		type,
		value,
		onDragStart,
		onDragEnd,
		onDropSuccess,
		onDropFailure,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef(null);
	useEffect(() => {
		selfRef.current.addEventListener('dropSuccess', handleDropSuccess);
		selfRef.current.addEventListener('dropFailure', handleDropFailure);
		return () => {
			selfRef.current.removeEventListener('dropSuccess', handleDropSuccess);
			selfRef.current.removeEventListener('dropFailure', handleDropFailure);
		};
	});

	// input from user
	const handleDragStart = (e) => {
		e.preventDefault();
		onDragStart(e);
	}
	const handleDragEnd = (e) => {
		e.preventDefault();
		onDragEnd(e);
		if(mode == "self") selfRef.current.hidden = false;
	}
	const handleDropSuccess = (e) => {onDropSuccess(e);}
	const handleDropFailure = (e) => {onDropFailure(e);}
	
	// render 
	return (
		<div 
			id={id} 
			ref={selfRef} 
			mode={mode}
			type={type}
			value={value}
			{...attributes}
			draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
		</div>
	);
};

Drag.propTypes = propTypes;