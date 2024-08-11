import React, { useEffect, useMemo, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React component for displaying a path in a tree data structure. 
// ========================================================================= //

export const Path = receivedProps => {

	// initial data
	const {
		id,
		data,
		delimiter,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// render 
	const children = useMemo(
		() => data.split(delimiter).map(
			(item, index) => 
				<label key={index}>
					<span className='rc-path-element'>{item}</span>
					<span className='rc-path-delimiter'>{delimiter}</span>
				</label>, 
			), []
		);

	return (<div id={id} {...attributes}>{children}</div>);
};

Path.propTypes = propTypes;

// ========================================================================= //