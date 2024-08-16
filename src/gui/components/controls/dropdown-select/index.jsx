import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Dropdown } from '../dropdown';
import { View } from '../../basics/view';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const DropdownSelect = receivedProps => {

	// initial data
	const {
		id,
		caption,
		src,
		value,
		TemplateDropdownSelectOption,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [captionState, setCaptionState] = useState(caption);
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value]);

	// input from user
	const handleClick = (e) => {
		const el = e.target.closest("option");
		setCaptionState(el.innerText);
		setValueState(el.value);
	}

	// render 
	const viewProps = {
		className:'rc-dropdown-select-options', 
		from: 0, 
		length: src.length, 
		src: src,
		TemplateViewItem: TemplateDropdownSelectOption,
	}
	return (
		<Dropdown 
			id={id} 
			caption={captionState} 
			value={valueState} 
			{...attributes} 
		>
			<View {...viewProps} onClick={handleClick} />
		</Dropdown>
	);
};

DropdownSelect.propTypes = propTypes;

// ========================================================================= //