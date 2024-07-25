import React, { useEffect, useRef } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React component for displaying a path in a tree data structure.
// ========================================================================= //

export const Path = receivedProps => {

	// unpack properties
	const {
		className,
		id,
		data,
		delimiter,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// render 
	const renderPathElement = (item, index) => <label key={index}>
		<span className='rc-path-element'>{item}</span>
		<span className='rc-path-delimiter'>{delimiter}</span>
	</label>;

	return (
		<div
			id={id}
			className={className}
			{...attributes}
		>
			{data.split(delimiter).map(renderPathElement)}
		</div>
	);
};

Path.propTypes = propTypes;

// ========================================================================= //