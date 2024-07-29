import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {calcPosition} from './helpers'
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
		src,
		position,
		type,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef(null);
	const [captureState, setCaptureState] = useState(false);
	const [boundaryState, setBoundaryState] = useState({minX:0, minY:0, maxX:0, maxY:0})
	const [positionState, setPositionState] = useState({...position});

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
		Drag.current = {src,type};
		setCaptureState(true);

		const rect = e.currentTarget.getBoundingClientRect();
		const	rect2 = area.getBoundingClientRect();
		setBoundaryState({
			minX: (e.clientX - rect.left) + rect2.x, 
			minY: (e.clientY - rect.top) + rect2.y,
			maxX: rect2.width - rect.width,
			maxY: rect2.height - rect.height,
		})
	};

	const handleDragEnd = (e) => {
		Drag.current = null;
		setCaptureState(false);
		setBoundaryState({x:0, y:0});
	}
	
	const handleMouseDown = (e) => {
		const {x, y} =	calcPosition(e, boundaryState, axis);
		setPositionState(prev => ({...prev, "left": x + "px", "top": y +"px",}));
	};

	// render 
	return (
		<div 
			id={id} 
			ref={self} 
			{...attributes}
			draggable
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
			style={positionState}
    >
      Drag me
		</div>
	);
};

Drag.propTypes = propTypes;