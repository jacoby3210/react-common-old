import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config.js"

// ========================================================================= //
// React Component for displaying a path in a tree data structure.
// ========================================================================= //

export const Path = (
	receivedProps
) => {

	// unpack properties
	const {
		className,
		id,
		delimiter,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	useEffect(() => { }, [delimiter, value]);

	// input from user

	// render 

	const renderPathElement = (item, index) => <label key={index}>
		<span className='common-ui-path-element'>{item}</span>
		<span className='common-ui-path-delimiter'>{delimiter}</span>
	</label>;

	return (
		<div
			id={id}
			className={className}
			ref={self}
			{...attributes}
		>
			{value.split(delimiter).map(renderPathElement)}
		</div>
	);
};