import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import { Browser } from '../browser';
import { Navigator } from '../navigator';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"

// ========================================================================= //
// Switching of displayed page in the viewing area.
// ========================================================================= //

export const Paginator = receivedProps => {

	// unpack properties
	const {
		id,
		lengthBrowser,
		lengthNavigator,
		src,
		value,
		onStateUpdate,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	const handleValueChanged = (newValue) => {
		setValueState(
			prevValue => {
				onStateUpdate(newValue, prevValue); 
				return newValue;
			}
		);
	}

	// render 
	const browserControllerProps = {
		length:lengthBrowser, 
		src,
		value: valueState,
		onStateUpdate:handleValueChanged,
	}
	const navigatorControllerProps = {
		length:lengthNavigator, 
		value: valueState ,
		onStateUpdate:handleValueChanged,
	}

	return (
		<div 
		id={id}
		{...attributes}
		value={valueState}
		>
			<Navigator {...navigatorControllerProps}/>
			<Browser {...browserControllerProps}/>
		</div>
	);
};

Paginator.propTypes = propTypes;