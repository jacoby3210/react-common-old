import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Browser } from '../browser';
import { Navigator } from '../navigator';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Switching of displayed page in the viewing area.
// ========================================================================= //

export const Paginator = receivedProps => {

	// initial data
	const {
		id,
		lengthBrowser,
		lengthNavigator,
		src,
		value,
		whenUpdateValueState,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	const handleValueChanged = useCallback(newValue => {
		setValueState(
			prevValue => {
				whenUpdateValueState(newValue, prevValue); 
				return newValue;
			}
		);
	}, []);

	// render 
	const browserControllerProps = {
		length:lengthBrowser, 
		src,
		value: valueState,
		whenUpdateValueState:handleValueChanged,
	}

	const navigatorControllerProps = {
		length:lengthNavigator, 
		value: valueState ,
		whenUpdateValueState:handleValueChanged,
	}

	return (
		<div id={id} {...attributes} value={valueState}>
			<Navigator {...navigatorControllerProps}/>
			<Browser {...browserControllerProps}/>
		</div>
	);
};

Paginator.propTypes = propTypes;

// ========================================================================= //