import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"
// ========================================================================= //
// Controls the switching of displayed block in the viewing area.
// ========================================================================= //

export const Browser = receivedProps => {

	// unpack properties
	const {
		id,
		buttons,
		count,
		offset,
		src,
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

	const firstPageButton = Math.min(
		Math.max(valueState - Math.floor(buttons / 2), offset),
		count - buttons + offset
	);

	// render 
	const buttonProps = (index) => {
		return {
			className: `rc-browse-button`,
			onClick:() => { handleValueChanged(index); },
		}
	}

	const Button = ({index})=>{
		const trueIndex = firstPageButton + index;
		return (<button key={trueIndex} {...buttonProps(trueIndex)}>{src[index].caption || trueIndex}</button>);
	}
	console.log(src);
	const buttonList = Array.from(new Array(buttons), (v, index) => <Button key={index} index={index}/>);

	return (<div id={id} {...attributes}>{buttonList}</div>);
};

Browser.propTypes = propTypes;