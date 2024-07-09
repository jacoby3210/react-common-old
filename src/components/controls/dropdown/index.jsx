import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Popup } from "../../basics/popup"
import { defaultProps, propTypes } from "./config"

// ========================================================================= //
// Сomponent for rendering a drop-down menu (select).
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
		caption,
		data,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef(null);
	const [shownState, setShownState] = useState(false);
	const handleClick = (evt) => { setShownState((prev) => !prev) }
	useEffect(() => { }, [data, value]);

	// render 
	const popupOptions = { shown: true, updateShownState: setShownState, };

	const Button = () =>
		<button className={'common-ui-dropdown-button'} onClick={handleClick}>
			<span className={'common-ui-dropdown-button-arrow'}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className='common-ui-dropdown-button-caption'>{ }</span>
		</button>;

	const OptionList = () =>
		<ul className={'common-ui-dropdown-options'}>
			{data.map((option, i) => <RenderElement key={i} {...option} />)}
		</ul>;

	return (
		<div
			id={id}
			className={className}
			ref={self}
			{...attributes}>
			{
				shownState ?
					<Popup {...popupOptions}><Button /><OptionList /></Popup> :
					<Button />
			}
		</div>
	);
};

Dropdown.propTypes = propTypes;