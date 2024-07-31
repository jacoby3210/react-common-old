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
	const self = useRef(null);

	// input from user
	const handleDragStart = (e) => e.preventDefault();
	
	// render 
	return (
		<div 
			id={id} 
			ref={self} 
			style={style}
			{...attributes}
			draggable
      onDragStart={handleDragStart}
    >
      {children}
		</div>
	);
};

Drag.propTypes = propTypes;