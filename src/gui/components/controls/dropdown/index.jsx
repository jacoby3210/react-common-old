import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Popup } from "../../basics/popup"
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Сomponent for rendering a drop-down menu (select).
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
	const handleClick = (evt) => { setShownState((prev) => !prev) }
	// useEffect(() => { }, [data, value]);

	// render 
	const popupOptions = { shown: true, updateShownState: setShownState };

	const Button = () =>
		<button className={'rc-dropdown-button'} onClick={handleClick}>
			<span className={'rc-dropdown-button-arrow'}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className='rc-dropdown-button-caption'>{ }</span>
		</button>;

	const OptionList = () =>
		<ul className={'rc-dropdown-options'}>
			{src.map((optionProps, i) => <RenderElement key={i} {...optionProps} />)}
		</ul>;

	return (
		<div id={id} ref={self} {...attributes}>
			{
				shownState ?
					<Popup {...popupOptions}><Button /><OptionList /></Popup> :
					<Button />
			}
		</div>
	);
};

Dropdown.propTypes = propTypes;