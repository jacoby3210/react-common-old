import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {calcPosition, cloneDrag, deleteDrag} from './helpers'
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
		position,
		type,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef(null), cloneRef = useRef(null);
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

		const dragRect = e.currentTarget.getBoundingClientRect();
		const	areaRect = area.getBoundingClientRect();
		const boundary = {
			minX: (e.clientX - dragRect.left) - areaRect.x, 
			minY: (e.clientY - dragRect.top) - areaRect.y,
			maxX: areaRect.width - dragRect.width,
			maxY: areaRect.height - dragRect.height,
		}
		setBoundaryState(boundary)
		if(mode == "clone") cloneRef.current = cloneDrag(e, positionState);
	};

	const handleDragEnd = (e) => {
		Drag.current = null;
		if (cloneRef.current) cloneRef.current = deleteDrag(cloneRef);
		setBoundaryState({});
		setCaptureState(false);
	}
	
	const handleMouseDown = (e) => {
		if(!captureState) return;
		const {x, y} =	calcPosition(e, boundaryState, axis, positionState);
		const pos = `translate(${x}px, ${y}px)`;
		if(cloneRef.current) {cloneRef.current.style.transform = pos; return;}
		self.current.style.transform = pos;
	};

	// render 
	const style = {"transform": `translate(${positionState.x}px, ${positionState.y}px)`}
	return (
		<div 
			id={id} 
			ref={self} 
			{...attributes}
			draggable
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
			style={style}
    >
      "Drag me"
		</div>
	);
};

Drag.propTypes = propTypes;