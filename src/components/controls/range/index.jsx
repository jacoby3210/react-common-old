import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"
import { animateValue } from './helper';

// ========================================================================= //
// React Component to select a value from the suggested numeric range.
// ========================================================================= //

export const Range = receivedProps => {

	// initial data
	const {
		className,
		id,
		axis,
		min,
		max,
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

	useEffect(() => {
		const handleMouseUp = () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
			setCaptureState(false);
		};
		setValueState(value)
		console.log(value)
		if (captureState) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}
	}, [captureState, value]);

	// input from user
	const calculateValue = (clientOffset) => {
		const rect = rangeRef.current.getBoundingClientRect();
		const offset = (axisState ? rect.left : rect.top),
			size = (axisState ? rect.width : rect.height);
		const relative = clientOffset - offset - offsetState;
		const percentage = Math.max(0, Math.min(1, relative / size));
		const newValue = min + Math.round((percentage * (max - min)) / step) * step;
		return newValue;
	};

	const handleSetValueState = (newValue) => {
		setValueState(newValue);
		if (onChange) onChange(newValue);
	}

	const handleTrackMouseDown = (evt) => {
		const newValue = calculateValue(axisState ? evt.clientX : evt.clientY);
		animateValue(valueState, newValue, 200, handleSetValueState); // Animate over 200 milliseconds
	}

	const handleThumbMouseDown = (evt) => {
		if (evt.buttons !== 1) return;
		const rect = evt.currentTarget.getBoundingClientRect();
		setOffsetState(axisState ? evt.clientX - rect.x : evt.clientY - rect.y);
		setCaptureState(true);
	};

	const handleMouseMove = (evt) => {
		const newValue = calculateValue(axisState ? evt.clientX : evt.clientY);
		handleSetValueState(newValue);
		evt.preventDefault();
	};

	// render 
	const trackProps = {
		className: `${className}-track`,
		onMouseDown: handleTrackMouseDown,
		ref: rangeRef,
	};

	const thumbProps = {
		className: `${className}-thumb`,
		onMouseDown: handleThumbMouseDown,
		style: {
			position: "relative",
			left: `${axisState && ((valueState - min) / (max - min)) * 100.0}%`,
			top: `${!axisState && ((valueState - min) / (max - min)) * 100.0}%`,
		},
	}

	return (
		<div
			id={id} className={className} axis={axisState ? "horizontal" : "vertical"}
			value={valueState}
			{...attributes}
		>
			<div {...trackProps}><div {...thumbProps} /></div>
			<span>{valueState}</span>
		</div >
	);
};

Range.propTypes = propTypes;