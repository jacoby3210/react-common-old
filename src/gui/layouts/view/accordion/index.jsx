import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {View} from '../../../components/basics/view'
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"

// ========================================================================= //
// Accordion is a UI compоnent that is used to organize content on layout.
// It consists of a list of headers and their associated content.
// The user can click on a header to expand the content or collapse it back.
// ========================================================================= //

export const Accordion = receivedProps => {

	// unpack properties
	const {
		id,
		policy,
		src,
		values,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valuesState, setValuesState] = useState(values);
	useEffect(()=>{setValuesState(values)}, [values])

	// // input from user
	const handleToggle = (evt, index) => {
		const isShown = valuesState.includes(index);
		if (isShown) {
			setValuesState(valuesState.filter(idx => idx !== index));
		} else {
			if (policy === 'single') setValuesState([index]);
			else setValuesState([...valuesState, index]);
		}
		evt.stopPropagation();
	};

	// // render 
	const RenderElement = ({index, meta}) => 
		<details open={valuesState.includes(index)}>
			<summary onClick={(evt) => handleToggle(evt, index)} >{meta.caption}</summary>
			<p>{meta.content}</p>
		</details>;

	const viewProps ={from:0, length: src.length, src, RenderElement}
	return (<View id={id} {...attributes} {...viewProps}/>);
};

Accordion.propTypes = propTypes;