import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {cloneDrag, deleteDrag, dragDrop, dropScan, getTranslatePos} from './helpers'
// ========================================================================= //
// Component 
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
		sourceRef = useRef(null),
		targetRef = useRef(null);
	const [captureState, setCaptureState] = useState(false);
	const [boundaryState, setBoundaryState] = useState({minX:0, minY:0, maxX:0, maxY:0})

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
      selfRef.current.removeEventListener('mousemove', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
	}, [captureState]);

	// input from user
	const handleDragStart = (e) => {
		e.preventDefault();
		sourceRef.current = e.target;
		const	areaRect = selfRef.current.getBoundingClientRect();
		const dragRect = e.target.getBoundingClientRect();
		const boundary = {
			minX: areaRect.x + (e.pageX - dragRect.x), 
			minY: areaRect.y + (e.pageY - dragRect.y),
			maxX: areaRect.width - dragRect.width,
			maxY: areaRect.height - dragRect.height,
		}
		cursorRef.current = cloneDrag(e, areaRect, dragRect, selfRef);
		setBoundaryState(boundary);
		setCaptureState(true);
	};

	const handleDragEnd = (e) => {
		targetRef.current = dragDrop(sourceRef, targetRef);
		cursorRef.current = deleteDrag(cursorRef);
		sourceRef.current = null;
		setBoundaryState({});
		setCaptureState(false);
	}
	
	const handleMouseDown = (e) => {
		if(!captureState) return;
		dropScan(e, cursorRef, targetRef, selfRef);
		cursorRef.current.style.transform = getTranslatePos(e, axis, boundaryState);
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