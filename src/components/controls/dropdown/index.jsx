import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Popup } from "../../basics/popup"
import { defaultProps, propTypes } from "./config.jsx"

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
		caption,
		dataSource,
		shown,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [shownState, setShownState] = useState(false);
	useEffect(() => { }, [dataSource, value]);

	// render 
	const Button = () =>
		<button className={'common-ui-dropdown-button'} >
			<span className={'common-ui-dropdown-button-arrow'}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className='common-ui-dropdown-button-caption'>{ }</span>
		</button>;

	const OptionList = () =>
		<ul className={'common-ui-dropdown-options'}>
			{dataSource.map((option, i) => <RenderElement key={i} {...option} />)}
		</ul>;

	return (
		<div
			id={id}
			ref={self}
			{...attributes}>
			{
				shownState ?
					<Popup shown={true}><Button /><OptionList /></Popup> :
					<Button />
			}
		</div>
	);
};

// Dropdown.propTypes = propTypes;