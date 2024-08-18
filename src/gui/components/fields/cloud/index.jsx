import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { View } from '../../basics/view';
import { Advisor } from '../advisor';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { TemplateCloudSelectTag } from './helpers';
import { TemplateViewItemDefault } from '../../basics/view/helpers';
// ========================================================================= //
// React Component for displaying the add/remove tags interface. 
// ========================================================================= //

export const Cloud = receivedProps => {

	// initial data
	const {
		id,
		src,
		values,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef(null);
	const [valuesState, setValuesState] = useState(values);
	useEffect(() => {setValuesState(values);}, [src, values]);

	// input from user
	const handleTagButtonClick = (evt) => {
		if(evt.target.tagName != "BUTTON") return;
		const i = values.findIndex(
			item => item.text === evt.currentTarget.children[0].innerText
		);
		// console.log("click", i, values, evt.currentTarget.children[0].innerText)
		setValuesState(prev => [...valuesState, src[i]]);
	}

	// render 
	const whenInputSubmit = (next, prev) => {
		const i = src.findIndex(item => item.caption == next);
		setValuesState([...valuesState, src[i]]);
	};
	const advisorProps = {src: src, whenInputSubmit};
	const viewProps = {
		length: valuesState.length, 
		src:valuesState,
		TemplateViewItem: TemplateCloudSelectTag,
		templateViewItemProps: {onClick: handleTagButtonClick}
	}

	return (
		<div id={id} ref={selfRef} {...attributes} >
			<Advisor {...advisorProps} />
			<View {...viewProps} />
		</div>
	);
};

Cloud.propTypes = propTypes;

// ========================================================================= //