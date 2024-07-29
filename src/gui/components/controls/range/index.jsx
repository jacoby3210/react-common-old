import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { animateValue, horizontalProps, verticalProps, RangeTrack, RangeThumb } from './helpers';
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
	const calculateStyle = (value) => axis ? { left: value } : { top: value };
	const calculateValue = (clientOffset, thumbOffset) => {
		const rect = trackRef.current.getBoundingClientRect();
		const relative = clientOffset - rect[props.offset] - thumbOffset;
		const percentage = Math.max(0, Math.min(1, relative / rect[props.size]));
		const newValue = min + Math.round((percentage * (max - min)) / step) * step;
		return newValue;
	};

	const handleSetValueState = (newValue) => {
		setValueState(newValue);
		if (onChange) onChange(newValue);
	}

	const handleTrackMouseDown = (evt) => {
		if (evt.buttons !== 1) return;
		const rect = thumbRef.current.getBoundingClientRect();
		const newValue = calculateValue(evt[props.cursor], rect[props.size] / 2);
		animateValue(valueState, newValue, 200, handleSetValueState);
	}

	const handleThumbMouseDown = (evt) => {
		if (evt.buttons !== 1) return;
		const rect = evt.currentTarget.getBoundingClientRect();
		setOffsetState(evt[props.cursor] - rect[props.offset]);
		setCaptureState(true);
		evt.stopPropagation();
	};

	const handleMouseMove = (evt) => {
		const newValue = calculateValue(evt[props.cursor], offsetState, axis);
		handleSetValueState(newValue);
		evt.preventDefault();
	};

	// render 
	const thumbStyle = calculateStyle(`${((valueState - min) / (max - min)) * 100.0}%`);
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