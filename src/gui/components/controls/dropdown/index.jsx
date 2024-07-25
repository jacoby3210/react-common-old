import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Popup } from "../../basics/popup"
import {View} from "../../basics/view"
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component for rendering a drop-down view.
// ========================================================================= //

export const Dropdown = receivedProps => {

	// unpack properties
	const {
		id,
		caption,
		src,
		value,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef(null);
	const [shownState, setShownState] = useState(false);
	const handleClick = (evt) => {setShownState((prev) => !prev);}

	// render 
	const popupProps = {shown: true, updateShownState: setShownState,};
	const viewProps = {
		className:'rc-dropdown-options', 
		from: 0, length: src.length, src:src,
		RenderElement,
	}

	const Button = () =>
		<button className={'rc-dropdown-button'}>
			<span className={'rc-dropdown-button-arrow'}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className='rc-dropdown-button-caption'/>
		</button>;

	return (
		<div id={id} ref={self} onClick={handleClick} {...attributes}>
			{
				shownState ?
					<Popup {...popupProps}>
						<Button />
						<View {...viewProps} />
					</Popup> :
					<Button />
			}
		</div>
	);
};

Dropdown.propTypes = propTypes;