import React, { useEffect, useRef } from 'react';
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"

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
		data,
		delimiter,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	useEffect(() => { }, [delimiter, data]);

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
			{data.split(delimiter).map(renderPathElement)}
		</div>
	);
};

Path.propTypes = propTypes;

// ========================================================================= //