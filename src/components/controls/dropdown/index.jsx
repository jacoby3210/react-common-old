import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {Popup} from "../../basics/popup"
import {defaultProps, propTypes} from "./config.js"

// ========================================================================= //
// Component 
// ========================================================================= //

export const Dropdown = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		RenderElement,
		shown,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [shownState, setShownState] = useState(false);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [value]);

	// input from user
	const handleClick = (evt) => { setShownState((prev) => !prev) }
	const handleClickOutside = (event) => {
		if (self.current && !self.current.contains(event.target)) {
			setShownState(false);
		}
	};

	// render 
	const Button = (
		<button className={'common-ui-dropdown-button'} onClick={handleClick}>
				<span className={'common-ui-dropdown-button-arrow'}>
					<i className={'fa-solid fa-chevron-down'}></i>
				</span>
				<span className='common-ui-dropdown-button-caption'>{caption}</span>
			</button>
	);
	const OptionList = (
		<ul className={'select-options'}>
			{options.map((option, i) => <RenderElement key={i} {...option} />)}
		</ul>
	)

	return (
		<div 
			id={id}
			ref={self}
			{...attributes}>
				{
					shownState ?
					<Popup><Button/><OptionList/></Popup> :
					<Button/> 
				}
		</div>
	);
};

Dropdown.propTypes = propTypes;