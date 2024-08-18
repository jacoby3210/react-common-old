import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { View } from '../../basics/view';
import { Advisor } from '../advisor';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component for displaying the add/remove tags interface. 
// ========================================================================= //

export const Cloud = receivedProps => {

	// initial data
	const {
		id,
		children,
		src,
		values,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [valuesState, setValuesState] = useState(values);
	useEffect(() => {setValuesState(values);}, [src, values]);

	// input from user
	// const handleClick = () => {setValueState(0);}

	// render 
	const advisorProps = {src: src};
	const viewProps = {length: valuesState.length, src:valuesState}

	return (
		<div id={id} ref={self} {...attributes}>
			<Advisor {...advisorProps} />
			<View {...viewProps} />
		</div>
	);
};

Cloud.propTypes = propTypes;

// ========================================================================= //