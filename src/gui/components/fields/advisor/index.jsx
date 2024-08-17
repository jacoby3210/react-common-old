import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {Popup} from '../../basics/popup'
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { AdvisorList } from './helpers';
// ========================================================================= //
// React component rendering  basic text filed with input suggestions.
// ========================================================================= //

export const Advisor = receivedProps => {

	// initial data
	const {
		id,
		data,
		value,
		TemplateOption,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [shownState, setShownState] = useState(false);
	const [valueState, setValueState] = useState(value);
	useEffect(() => { setValueState(value); }, [data, value]);

	// input from user
	const handleChange = (evt) => { setValueState(evt.target.value); }
	const handleClick = () => {setValueState(0);}
	const handleFocus = (evt) => {setShownState(true);}

	// render 
	const inputOptions = {
		className: `${DEFAULT_CLASS}-input`,
		onChange: handleChange,
		value: valueState
	};
	const popupOptions = {
		shown: shownState,
		whenUpdateShownState: setShownState,
	};

	const advisorListProps = {data, TemplateOption, valueState} 
	return (
		<div id={id} {...attributes}>
			{
				shownState ?
					<Popup {...popupOptions}>
						<input {...inputOptions} />
						<AdvisorList {...advisorListProps} />
					</Popup> :
					<input onFocus={handleFocus} {...inputOptions} />
			}
		</div >
	);
};

Advisor.propTypes = propTypes;

// ========================================================================= //