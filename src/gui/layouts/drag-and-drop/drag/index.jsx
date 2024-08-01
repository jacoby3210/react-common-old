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
		area,
		axis,
		mode,
		src,
		style,
		type,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef(null);

	// input from user
	const handleDragStart = (e) => e.preventDefault();
	const handleDropSuccess = (e) => {console.log("handleDropSuccess")}
	const handleDropFailure = (e) => {console.log("handleDropFailure")}
	useEffect(() => {
		selfRef.current.addEventListener('dropSuccess', handleDropSuccess);
		selfRef.current.addEventListener('dropFailure', handleDropFailure);
		return () => {
      selfRef.current.removeEventListener('dropSuccess', handleDropSuccess);
      selfRef.current.removeEventListener('dropFailure', handleDropFailure);
    };
	});
	
	// render 
	return (
		<div 
			id={id} 
			ref={selfRef} 
			style={style}
			{...attributes}
			draggable
      onDragStart={handleDragStart}
      // onDropSuccess={handleDropSuccess}
      // onDropFailure={handleDropFailure}
    >
      {children}
		</div>
	);
};

Drag.propTypes = propTypes;