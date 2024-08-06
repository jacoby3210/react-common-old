import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {
	horizontalProps, verticalProps, 
	RangeTrack, RangeThumb, 
	getPosition, positionToValue, valueAnimate, valueToStyle,
} from './helpers';
// ========================================================================= //
// React Component to select a value from the suggested numeric range.
// ========================================================================= //

export const Range = receivedProps => {

	// initial data
	const {
		id, className,
		axis, max, min, step, value,
		onChange,
		...attributes
	} = mergeProps(defaultProps, receivedProps);
	const props = axis ? horizontalProps : verticalProps;

	// hooks
	const trackRef = useRef(null), thumbRef = useRef(null);
	const [captureState, setCaptureState] = useState(false);
	const [offsetState, setOffsetState] = useState(0);
	const [valueState, setValueState] = useState(value || min);
	useEffect(() => {
		const handleMouseUp = () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
			setCaptureState(false);
		};
		if (captureState) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}
	}, [captureState]);
	useEffect(() => { setValueState(value) }, [value]);
	
	// input from user
	const handleSetValueState = (newValue) => {
		setValueState(newValue);
		if (onChange) onChange(newValue);
	}

	const handleTrackMouseDown = (evt) => {
		if (evt.buttons !== 1) return;
		const rect = trackRef.current.getBoundingClientRect();
		const relativePos = getPosition(rect, props, evt[props.cursor], 0);
		const newValue = positionToValue(relativePos, min, max, step);
		valueAnimate(valueState, newValue, 200, handleSetValueState);
	}

	const handleThumbMouseDown = (evt) => {
		if (evt.buttons !== 1) return;
		const rect = evt.currentTarget.getBoundingClientRect();
		setOffsetState(evt[props.cursor] - rect[props.offset]);
		setCaptureState(true);
		evt.stopPropagation();
	};

	const handleMouseMove = (evt) => {
		const rect = trackRef.current.getBoundingClientRect();
		const relativePos = getPosition(rect, props, evt[props.cursor], offsetState);
		const newValue = positionToValue(relativePos, min, max, step)
		handleSetValueState(newValue);
		evt.preventDefault();
	};

	// render 
	const thumbStyle = valueToStyle(axis, valueState, min, max);
	const trackProps = { trackRef, onMouseDown: handleTrackMouseDown };
	const thumbProps = { thumbRef, style: thumbStyle, onMouseDown: handleThumbMouseDown };

	return (
		<div
			id={id} className={className}
			axis={props.axis} value={valueState} {...attributes}
		>
			<RangeTrack {...trackProps}>
				<RangeThumb {...thumbProps} />
			</RangeTrack >
			<span>{valueState}</span>
		</div>
	);
};

Range.propTypes = propTypes;

// ========================================================================= //