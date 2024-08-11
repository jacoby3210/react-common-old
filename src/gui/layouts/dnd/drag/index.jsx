import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component that can be dragged in Area.															 //
// ========================================================================= //

export const Drag = receivedProps => {

	// initial data
	const {
		id,
		children,
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
			if(!selfRef.current) return;
			selfRef.current.removeEventListener('dropSuccess', handleDropSuccess);
			selfRef.current.removeEventListener('dropFailure', handleDropFailure);
		};
	});

	// input from user
	const handleDragStart = useCallback(e => {
		e.preventDefault();
		onDragStart(e);
	}, []);

	const handleDragEnd = useCallback(e => {
		e.preventDefault();
		onDragEnd(e);
		if(mode == "self") selfRef.current.hidden = false;
	}, []);

	const handleDropSuccess = useCallback(e => {onDropSuccess(e);}, []);

	const handleDropFailure = useCallback(e => {onDropFailure(e);}, []);

	// render 
	return (
		<div 
			id={id} 
			ref={selfRef} 
			mode={mode}
			type={type}
			value={value}
			{...attributes}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
			draggable
    >
      {children}
		</div>
	);
};

Drag.propTypes = propTypes;

// ========================================================================= //