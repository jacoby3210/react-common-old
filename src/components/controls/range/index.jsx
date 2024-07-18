import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"
import { animateValue, horizontalProps, verticalProps } from './helper';
// ========================================================================= //
// React Component to select a value from the suggested numeric range.
// ========================================================================= //

export const Range = receivedProps => {

	// initial data
	const {
		className,
		id,
		axis,
		max,
		min,
		step,
		value,
		onChange,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const rangeRef = useRef(null);
	const [axisState, setAxisState] = useState(axis);
	const [captureState, setCaptureState] = useState(false);
	const [offsetState, setOffsetState] = useState(0);
	const [valueState, setValueState] = useState(value || min);
	const props = axisState ? horizontalProps : verticalProps;

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
	useEffect(() => {setValueState(value)}, [value]);

	// input from user
	const calculateValue = (clientOffset) => {
		const rect = rangeRef.current.getBoundingClientRect();
		const relative = clientOffset - rect[props.offset] - offsetState;
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
		const newValue = calculateValue(evt[props.cursor]);
		animateValue(valueState, newValue, 200, handleSetValueState); 
	}

	const handleThumbMouseDown = (evt) => {
		if (evt.buttons !== 1) return;
		const rect = evt.currentTarget.getBoundingClientRect();
		setOffsetState(evt[props.cursor] - rect[props.offset]);
		setCaptureState(true);
		evt.preventDefault();
	};

	const handleMouseMove = (evt) => {
		const newValue = calculateValue(evt[props.cursor]);
		handleSetValueState(newValue);
		evt.preventDefault();
	};

	// render 
	const trackProps = {
		className: `${className}-track`,
		ref: rangeRef,
		onMouseDown: handleTrackMouseDown,
	};

	const calculateStyle = (value) => {return axisState ? {left:value} : {top:value};};
	const thumbProps = {
		className: `${className}-thumb`,
		style: calculateStyle( `${((valueState - min) / (max - min)) * 100.0}%`),
		onMouseDown: handleThumbMouseDown,
	}

	return (
		<div
			id={id} className={className} axis={axisState ? "horizontal" : "vertical"}
			value={valueState}
			{...attributes}
		>
			<div {...trackProps}><div {...thumbProps} /></div>
			<span>{valueState}</span>
		</div>
	);
};

Range.propTypes = propTypes;