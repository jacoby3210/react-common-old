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
	const [cursorIndexState, setCursorIndexState] = useState(0);
	const [shownState, setShownState] = useState(false);
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value]);

	// input from user
	const handleChange = (evt) => { setValueState(evt.target.value); }
	const handleClick = (evt) => {
		setValueState(prev => evt.currentTarget.value);
		setShownState(false);
	}
	const handleFocus = (evt) => {
		setCursorIndexState(0); 
		setShownState(true);
	}
	const handleKeyDown = (evt) => {
		if (evt.key === 'ArrowDown') {
			setCursorIndexState(prev => prev < src.length - 1 ? prev + 1 : prev);
		} else if (evt.key === 'ArrowUp') {
			setCursorIndexState(prev => prev > 0 ? prevIndex - 1 : prev);
		} else if (evt.key === 'Enter' && cursorIndexState >= 0) {
			setValueState(src[cursorIndexState].caption);
			setShownState(false);
		}
	};

	// render 
	const inputProps = {
		className: `${DEFAULT_CLASS}-input`,
		onChange: handleChange,
		onKeyDown: handleKeyDown,
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
			onClick: handleClick,
			cursorIndexState,
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