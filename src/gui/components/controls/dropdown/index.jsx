import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Popup } from '../../basics/popup';
import { View } from '../../basics/view';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { DropdownButton } from './helpers';
// ========================================================================= //
// React Component for rendering a drop-down option.
// ========================================================================= //

export const Dropdown = receivedProps => {

	// initial data
	const {
		id,
		caption,
		src,
		value,
		TemplateDropdownOption,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef(null);
	const [shownState, setShownState] = useState(false);
	
	// input from user
	const handleClick = (evt) => setShownState((prev) => false);
	const handleButtonClick = (evt) => {
		evt.stopPropagation();
		setShownState((prev) => !prev);
	}

	// render 
	const popupProps = {shown: true, whenUpdateShownState: setShownState,};
	const viewProps = {
		className:`${DEFAULT_CLASS}-list-options`, 
		from: 0, 
		length: src.length, 
		src: src,
		TemplateViewItem: TemplateDropdownOption,
	}

	return (
		<div id={id} ref={self} {...attributes} onClick={handleClick}>
			{
				shownState ?
					<Popup {...popupProps}>
						<DropdownButton onClick={handleButtonClick} />
						<View {...viewProps} />
					</Popup> :
					<DropdownButton onClick={handleButtonClick} />
			}
		</div>
	);
};

Dropdown.propTypes = propTypes;

// ========================================================================= //