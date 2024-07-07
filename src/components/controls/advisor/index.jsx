import React, { useEffect, useRef, useState } from 'react';
import { Popup } from "../../basics/popup"
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"

// ========================================================================= //
// Component 
// ========================================================================= //

export const Advisor = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		RenderElement,
		data,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [shownState, setShownState] = useState(false);
	const [valueState, setValueState] = useState(value);
	useEffect(() => { setValueState(value); }, [data, value]);

	const handleChange = (evt) => { setValueState(evt.target.value); }
	const handleFocus = (evt) => { setShownState(true); }

	// render 
	const inputOptions = {
		className: 'common-ui-advisor-input',
		onChange: handleChange,
		value: valueState
	};
	const popupOptions = {
		shown: shownState,
		updateShownState: setShownState,
	};

	const OptionList = () =>
		<ul className={'common-ui-advisor-option-list'}>
			{
				data
					.filter((element) => element.caption.includes(valueState))
					.map((option, i) => <RenderElement key={i} {...option} />)
			}
		</ul>;

	return (
		<div
			id={id}
			className={className}
			{...attributes}>
			{
				shownState ?
					<Popup {...popupOptions}><input  {...inputOptions} /><OptionList /></Popup> :
					<input onFocus={handleFocus} {...inputOptions} />
			}
		</div >
	);
};

Advisor.propTypes = propTypes;