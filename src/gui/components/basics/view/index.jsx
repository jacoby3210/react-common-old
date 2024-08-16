import React, { useEffect, useMemo, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// View area for render multiple repetitive data.
// ========================================================================= //

export const View = receivedProps => {

	// initial data
	const {
		id,
		from,
		length,
		src,
		TemplateViewItem,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// render
	const children = src.slice(from, from + length).map(
		(item, i) => 
			<TemplateViewItem 
				key={item.id || i}
				className={`${DEFAULT_CLASS}-item`} 
				meta={item} 
		/>);
	
	return (
		<div id={id} {...attributes} from={from} length={length} >
			{children}
		</div>
	);
};

View.propTypes = propTypes;

// ========================================================================= //