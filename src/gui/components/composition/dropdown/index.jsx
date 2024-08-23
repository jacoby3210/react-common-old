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
		children,
		caption,
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
console.log(caption)
	// render 
	const popupProps = {shown: true, whenUpdateShownState: setShownState,};
	return (
		<div id={id} ref={self} {...attributes} onClick={handleClick}>
			{
				shownState 
					? <Popup {...popupProps}>
							<DropdownButton caption={caption} onClick={handleButtonClick} />
							{children}
						</Popup> 
					: <DropdownButton caption={caption} onClick={handleButtonClick} />
			}
		</div>
	);
};

Dropdown.propTypes = propTypes;

// ========================================================================= //