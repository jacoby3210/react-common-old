import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"

// ========================================================================= //
// View area for  render multiple repetitive data.
// ========================================================================= //

export const View = receivedProps => {

	// unpack properties
	const {
		children,
		id,
		data,
		from,
		length,
		src,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// render 
	const renderItem = (item, i) => 
		<RenderElement 
			key={item.id || i}
			className={`${DEFAULT_CLASS}-item`} 
			index={i}
			meta={item} 
		/>;
	return (
		<div id={id} from={from} length={length} {...attributes}>
			{src.slice(from, from + length).map(renderItem)}
		</div>
	);
};

View.propTypes = propTypes;