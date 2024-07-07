import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config"

// ========================================================================= //
// Component 
// ========================================================================= //

export const View = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		data,
		from,
		range,
		RenderComponent,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// render 
	return (
		<div 
		id={id}
		className={className}
		from={from} range={range}
		{...attributes} 
		>
			{
				data
					.slice(from, from + range)
					.map((item, i) => <RenderComponent key={i} meta={item} />)
			}
		</div>
	);
};

View.propTypes = propTypes;