import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Dropdown } from '../../controls/dropdown';
import { View } from '../../basics/view';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component for selection one option from the source list.
// ========================================================================= //

export const Select = receivedProps => {

	// initial data
	const {
		id,
		caption,
		src,
		value,
		TemplateSelectOption,
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
		TemplateViewItem: TemplateSelectOption,
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

Select.propTypes = propTypes;

// ========================================================================= //