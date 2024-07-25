import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"

// ========================================================================= //
// Controls the switching of displayed slide in the viewing area. 
// ========================================================================= //

export const Navigator = receivedProps => {

	// unpack properties
	const {
		children,
		id,
		count,
		offset,
		infinity,
		value,
		onChangeCallback,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);

	// input from user
	const normalizeValue = (value) => infinity ? (value + count) % (count) : Math.min(value, count - 1);
	const handle = (v) => {setValueState(v); onChangeCallback(v);}

	// render 
	
	const btnFirstProps = {
		className: `${DEFAULT_CLASS}-first`,
		onClick: () => { handle(offset); },
		disabled: valueState === offset,
	}
	const btnPrevProps = {
		className: `${DEFAULT_CLASS}-first`,
		onClick: () => { handle(normalizeValue(valueState - 1)); },
		disabled: valueState === offset && !infinity,
	}
	const btnNextProps = {
		className: `${DEFAULT_CLASS}-next`,
		onClick: () => { handle(normalizeValue(valueState + 1)); },
		disabled: valueState === count + offset - 1 && !infinity,
	}
	const btnLastProps = {
		className: `${DEFAULT_CLASS}-last`,
		onClick: () => { handle(count - 1 + offset); },
		disabled: valueState === count + offset - 1,
	}

	return (
		<div id={id} {...attributes}>
			<button {...btnFirstProps} >
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button {...btnPrevProps}>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button {...btnNextProps}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button {...btnLastProps}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</div>
	);
};

Navigator.propTypes = propTypes;