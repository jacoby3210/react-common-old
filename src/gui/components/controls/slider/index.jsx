import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Range } from '../range';
import { defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component represents Range with control buttons.
// ========================================================================= //

export const Slider = receivedProps => {

	// unpack properties
	const {
		id, className,
		axis, max, min, step, value,
		onChange,
		...attributes
	} = mergeProps(defaultProps, receivedProps);
	
	// hooks
	const self = useRef(null), scrollTimeoutRef = useRef(null);
	const [valueState, setValueState] = useState(0);

	// inputs
	const handleMouseDown = (moveStep) => {
		const fn = () => handleMouseDownSlice(moveStep);
		fn();
		scrollTimeoutRef.current = setInterval(fn, 10);
	};

	const handleMouseDownSlice = (offset) => {
		setValueState(prev => {
			const newValue = Math.max(Math.min(max, prev + offset), min)
			if (onChange) onChange(newValue);
			return newValue;
		});
	}

	const handleMouseDoubleClick = (value) => {
		setValueState(prev => {
			if (onChange) onChange(value);
			return value;
		});
	}

	// render 
	const Button = ({btnPostFix, btnAbsValue, btnStep})=>{
		return (
			<button
				className={`${className}-${btnPostFix}`}
				onDoubleClick= {(e) => {handleMouseDoubleClick(btnAbsValue);}}
				onMouseDown= {(e) => {if(e.detail == 1) handleMouseDown(btnStep);}}
				onMouseUp = {() => clearInterval(scrollTimeoutRef.current)}
			/>
		)
	}
	const toStartProps = {btnPostFix: "button-to-start", btnAbsValue: min, btnStep:-step}
	const toEndProps = {btnPostFix: "button-to-end", btnAbsValue: max, btnStep:step}

	const inputRangeProps = {
		...receivedProps,
		value: valueState,
		onChange,
	}

	return (
		<div
			id={id}
			className={className}
			ref={self}
			position={valueState}
			{...attributes}
		>
			<Button {...toStartProps}></Button>
			<Range {...inputRangeProps} />
			<Button {...toEndProps}></Button>
		</div>
	);
};

Slider.propTypes = propTypes;