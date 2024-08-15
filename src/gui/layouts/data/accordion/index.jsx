import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {View} from "../../../components/basics/view"
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Accordion consists of a list of headers and their associated content.
// ========================================================================= //

export const Accordion = receivedProps => {

	// initial data
	const {
		id,
		mode,
		src,
		values,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valuesState, setValuesState] = useState(values);
	useEffect(() => {setValuesState(values)}, [values])

	// input from user
	const handleToggle = useCallback((evt, index) => {
		const isShown = valuesState.includes(index);
		if (isShown) {
			setValuesState(valuesState.filter(idx => idx !== index));
		} else {
			if (mode === 'single') setValuesState([index]);
			else setValuesState([...valuesState, index]);
		}
		evt.stopPropagation();
	}, []);

	// render 
	const TemplateViewItem = ({index, meta}) => 
		<details open={valuesState.includes(index)}>
			<summary onClick={(evt) => handleToggle(evt, index)} >
				{meta.caption}
			</summary>
			<p>{meta.content}</p>
		</details>;

	const viewProps ={from:0, length: src.length, src, TemplateViewItem}
	return (<View id={id} {...attributes} {...viewProps}/>);
};

Accordion.propTypes = propTypes;

// ========================================================================= //