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
		whenInputSubmit,
		TemplateAdvisorOption,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const selfRef = useRef(null);
	const [cursorIndexState, setCursorIndexState] = useState(0);
	const [shownState, setShownState] = useState(false);
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value]);

	// input from user
	const handleInputSubmit = (next, prev = value) => {
		setValueState (
			prev => {
				next = whenInputSubmit(next, prev);
				return next;
			}
		);
		setShownState(false);
	}

	const handleChange = (evt) => {
		setValueState(evt.target.value);
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
			handleInputSubmit(src[cursorIndexState].caption);
		}
	};

	const handleAdvisorOptionClick = (evt) => {
		handleInputSubmit(evt.currentTarget.value);
	}

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
			onClick: handleAdvisorOptionClick,
			cursorIndexState,
		}, 
		valueState
	} 

	return (
		<div id={id} ref={selfRef} {...attributes}>
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