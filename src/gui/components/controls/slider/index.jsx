import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Range } from '../range';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component represents Range with control buttons.
// ========================================================================= //

export const Slider = receivedProps => {

	// initial data
	const {
		id,
		axis, max, min, step, value,
		whenUpdateValueState,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	const timeoutRef = useRef(null);
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);},[value])

	// inputs
	const handleChange = (newValue) => {
		setValueState(prev => {whenUpdateValueState(newValue); return newValue;})
	}

	const handleMouseDown = ( moveStep, e) => {
		if(e.detail != 1) return;
		const fn = () => handleMouseDownSlice(moveStep);
		fn();
		timeoutRef.current = setInterval(fn, 10);
	};

	const handleMouseDownSlice = (offset) => {
		setValueState(prev => {
			const newValue = Math.max(Math.min(max, prev + offset), min)
			whenUpdateValueState(newValue); 
			return newValue;
		})
	}

	const handleMouseDoubleClick = (newValue) => handleChange(newValue);

	// render 
	const SliderButton = ({btnPostFix, btnAbsValue, btnStep})=>{
		return (
			<button
				className={`${DEFAULT_CLASS}-${btnPostFix}`}
				onDoubleClick= {handleMouseDoubleClick.bind(this, btnAbsValue)}
				onMouseDown= {handleMouseDown.bind(this, btnStep)}
				onMouseUp = {clearInterval.bind(this,timeoutRef.current)}
			/>
		)
	}
	const toStartProps = {btnPostFix: "button-to-start", btnAbsValue: min, btnStep:-step}
	const toEndProps = {btnPostFix: "button-to-end", btnAbsValue: max, btnStep:step}

	const inputRangeProps = {
		...receivedProps,
		value: valueState,
		whenUpdateValueState: handleChange,
	}

	return (
		<div id={id} {...attributes} value={valueState}>
			<SliderButton {...toStartProps}></SliderButton>
			<Range {...inputRangeProps} />
			<SliderButton {...toEndProps}></SliderButton>
		</div>
	);
};

Slider.propTypes = propTypes;

// ========================================================================= //