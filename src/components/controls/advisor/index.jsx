import cx from 'clsx';
import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config.js"

// ========================================================================= //
// Component 
// ========================================================================= //

export const Example = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [smthValue, setSmthValue] = useState(false);
	useEffect(() => {
		// return () => {};
	}, []);

	// input from user

	// render 

	return (
		<div
			{...attributes}
			className={cx(className, { ["classname"]: false, })}
			ref={self}
			id={id}
		>
			{children}
		</div>
	);
};

Example.propTypes = propTypes;