import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import { Browser } from '../browser';
import { Navigator } from '../navigator';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"

// ========================================================================= //
// Controls the switching of displayed page in the viewing area.
// ========================================================================= //

export const Paginator = receivedProps => {

	// unpack properties
	const {
		id,
		lengthBrowser,
		lengthNavigator,
		src,
		value,
		onChangeCallback,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	const handleValueChanged = (newValue) => {
		setValueState(
			prevValue => {
				onChangeCallback(newValue, prevValue); 
				return newValue;
			}
		);
	}

	// render 
	const browserControllerProps = {
		length:lengthBrowser, 
		src,
		value: valueState,
		onChangeCallback:handleValueChanged,
	}
	const navigatorControllerProps = {
		length:lengthNavigator, 
		value: valueState ,
		onChangeCallback:handleValueChanged,
	}

	return (
		<div 
		id={id}
		value={valueState}
		{...attributes}
		>
			<Navigator {...navigatorControllerProps}/>
			<Browser {...browserControllerProps}/>
		</div>
	);
};

Paginator.propTypes = propTypes;