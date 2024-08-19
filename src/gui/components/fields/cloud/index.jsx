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
		mode,
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
		const i = valuesState.findIndex(
			item => item.text === evt.currentTarget.children[0].innerText
		);
		setValuesState(
			prev => [
				...prev.slice(0, i),
				...prev.slice(i + 1),
			]
		);
	}

	// render 
	const whenInputSubmit = (next, prev) => {
		const i = src.findIndex(item => item.caption == next);
<<<<<<< HEAD
		if(i != -1) setValuesState([...valuesState, src[i]]);
		return '';
	};

	const advisorProps = {
		src: mode == "all" 
			? src 
			: src.filter(item => !valuesState.some(toRemove => toRemove.id === item.id)),
		value: '', 
		whenInputSubmit
	};
	
=======
		setValuesState([...valuesState, src[i]]);
		return '';
	};
	const advisorProps = {
		src: mode == "all" 
			? src 
			: src.filter(item => !valuesState.some(toRemove => toRemove.id === item.id)),
		value: '', 
		whenInputSubmit
	};
>>>>>>> 3582d49b6a55157bf17b53338a384a0affee7822
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