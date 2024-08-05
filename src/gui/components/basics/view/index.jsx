import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// View area for  render multiple repetitive data.
// ========================================================================= //

export const View = receivedProps => {

	// initial data
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
	const renderViewPart = (item, i) => 
		<RenderElement 
			key={item.id || i}
			className={`${DEFAULT_CLASS}-item`} 
			index={i}
			meta={item} 
		/>;

	return (
		<div id={id} {...attributes} from={from} length={length} >
			{src.slice(from, from + length).map(renderViewPart)}
		</div>
	);
};

View.propTypes = propTypes;

// ========================================================================= //