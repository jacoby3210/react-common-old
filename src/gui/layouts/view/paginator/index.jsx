import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import { Navigator } from '../navigator';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"

// ========================================================================= //
// Controls the switching of displayed page in the viewing area.
// ========================================================================= //

export const Paginator = receivedProps => {

	// unpack properties
	const {
		id,
		buttons,
		count,
		offset,
		value,
		onChangeCallback,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	const handleValueChanged = (page) => {
		onChangeCallback((page - offset));
		setValueState((prevPage) => page - offset);
	}

	// input from user
	const firstPageButton = Math.min(
		Math.max(valueState - Math.floor(buttons / 2), offset),
		count - buttons + offset
	);

	// render 

	const buttonProps = (index) => {
		return {
			className: `rc-page-controller-button`,
			onClick:() => { handleValueChanged(index); },
		}
	}
	const buttonList = Array.from(new Array(buttons), (v, index) => {
		const trueIndex = firstPageButton + index;
		return <button key={trueIndex} {...buttonProps(trueIndex)}>{trueIndex}</button>; 
	})

	const navigatorControllerProps = {
		onChangeCallback:handleValueChanged,
		count: count,
		offset: offset,
		value: valueState + offset,
	}

	return (
		<div 
		id={id}
		{...attributes}
		>
			<Navigator {...navigatorControllerProps}/>
			<div className={'rc-page-controller-buttons'}>{buttonList}</div>
		</div>
	);
};

Paginator.propTypes = propTypes;