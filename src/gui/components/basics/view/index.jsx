import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config"

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
		RenderComponent,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// render 
	const renderItem = (item, i) => <RenderComponent key={item.id || i} meta={item} />;
	return (
		<div id={id} from={from} length={length} {...attributes}>
			{src.slice(from, from + length).map(renderItem)}
		</div>
	);
};

View.propTypes = propTypes;