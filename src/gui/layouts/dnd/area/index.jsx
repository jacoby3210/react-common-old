import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {calcBoundary, calcPosition, createCursor, deleteCursor, move, scan} 
from './helpers'
// ========================================================================= //
// React Component within which you can drag and drop components.						 //
// ========================================================================= //

export const Area = receivedProps => {

	// initial data
	const {
		children,
		id,
		axis,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef(null), 
		cursorRef = useRef(null),
		dragRef = useRef(null),
		dropRef = useRef(null);
	const [captureState, setCaptureState] = useState(false);
	const [boundaryState, setBoundaryState] = useState({x1:0, y1:0, x2:0, y2:0})

	useEffect(() => {
		const handleMouseUp = (e) => {
			handleDragEnd(e);
			document.removeEventListener('mousemove', handleMouseDown);
			document.removeEventListener('mouseup', handleDragEnd);
		};
		if (captureState) {
			document.addEventListener('mousemove', handleMouseDown);
			document.addEventListener('mouseup', handleMouseUp);
		}
		return () => {
      document.removeEventListener('mousemove', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
	}, [captureState]);

	// input from user
	const handleDragStart = (e) => {
		e.preventDefault();
		dragRef.current = e.target;
		cursorRef.current = createCursor(selfRef, dragRef, e);
		setBoundaryState(calcBoundary(selfRef, cursorRef, e));
		setCaptureState(true);
	};

	const handleDragEnd = (e) => {
		dropRef.current = move(dragRef, dropRef);
		cursorRef.current = deleteCursor(cursorRef);
		dragRef.current = null;
		setBoundaryState({});
		setCaptureState(false);
	}
	
	const handleMouseDown = (e) => {
		if(!captureState) return;
		scan(cursorRef, dropRef, e);
		cursorRef.current.style.transform = calcPosition(e, axis, boundaryState);
	};

	// render 
	return (
		<div 
			id={id} 
			ref={selfRef} 
			onDragStart={handleDragStart}
			{...attributes}
		>
			{children}
		</div>
	);
};

Area.propTypes = propTypes;

// ========================================================================= //