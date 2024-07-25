import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {Slider} from '../../../components/controls/slider';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { horizontalProps, verticalProps, valueFromPosition, valueToPosition } from './helpers';
// ========================================================================= //
// React Component represents universal customizable content scrollbar.
// ========================================================================= //

export const Scrollbar = receivedProps => {

	// unpack properties
	const {
		axis,
		mode,
		target,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);
	const props = attributes.axis ? horizontalProps : verticalProps;
	
	// hooks
	const [valueState, setValueState] = useState(0);
	useEffect(() => {
		target.current.addEventListener("scroll", (e) => {
			const newValue = valueFromPosition(target.current, props);
			setValueState(prev => {onChange(newValue); return newValue;})
		})
	}, []);

	// inputs
	const onChange = (value) => {
		const area = target.current, 
			scrollParams = {top: area.scrollTop, left: area.scrollLeft, mode};
		scrollParams[props.scrollDirect] = valueToPosition(area, props, value);
		area.scrollTo(scrollParams);
	}

	// render
	const sliderProps = {axis, min: 0.0, max: 1.0, value:valueState, onChange,}
	return (<Slider {...sliderProps} {...attributes}/>);
};

Scrollbar.propTypes = propTypes;