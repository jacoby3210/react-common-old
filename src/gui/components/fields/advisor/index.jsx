import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {Popup} from '../../basics/popup'
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import { AdvisorList, TemplateAdvisorOptionDefault } from './helpers';
// ========================================================================= //
// React component rendering  basic text filed with input suggestions.
// ========================================================================= //

export const Advisor = receivedProps => {

	// initial data
	const {
		id,
		src,
		value,
		TemplateAdvisorOption,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const inputRef = useRef(null);
	const [shownState, setShownState] = useState(false);
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value]);

	// input from user
	const handleChange = (evt) => { setValueState(evt.target.value); }
	const handleClick = (evt) => {
		setValueState(prev => evt.currentTarget.value);
		setShownState(false);
	}
	const handleFocus = (evt) => {setShownState(true);}

	// render 
	const inputProps = {
		className: `${DEFAULT_CLASS}-input`,
		onChange: handleChange,
		value: valueState
	};
	const popupProps = {
		shown: shownState,
		whenUpdateShownState: setShownState,
	};

	const advisorListProps = {
		src, 
		TemplateAdvisorOption, 
		templateAdvisorOptionProps: {
			className: `${DEFAULT_CLASS}-list-option`,
			onClick: handleClick
		}, 
		valueState
	} 

	return (
		<div id={id} {...attributes}>
			{
				shownState ?
					<Popup {...popupProps}>
						<input autoFocus {...inputProps} />
						<AdvisorList {...advisorListProps} />
					</Popup> :
					<input onFocus={handleFocus} {...inputProps} />
			}
		</div >
	);
};

Advisor.propTypes = propTypes;

// ========================================================================= //