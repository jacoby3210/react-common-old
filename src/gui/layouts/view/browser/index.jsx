import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import { View } from '../../../components/basics/view';
import {DEFAULT_CLASS, defaultProps, propTypes} from "./config"
// ========================================================================= //
// Controls the switching of displayed data in the viewing area.
// ========================================================================= //

export const Browser = receivedProps => {

	// unpack properties
	const {
		id,
		length,
		src,
		value,
		onChangeCallback,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value); // id of current tab
	const handleValueChanged = (evt) => {
		const {id:newValue} = evt.currentTarget
		setValueState(
			prevValue => {
				onChangeCallback(newValue, prevValue); 
				return newValue;
			}
		);
	}
	
	// render 
	const firstDisplayButton = Math.max(
		Math.min(
			Math.max(valueState - Math.floor(length / 2), 0),
			src.length - length
	), 0);

	const RenderElement = ({meta, index})=>{
		return (<button 
				className= {`rc-browse-button`}
				onClick= {handleValueChanged}
				{...meta}
			>
			{meta?.caption || trueIndex}
		</button>);
	}
	const viewProps = {from:firstDisplayButton, length, src, RenderElement}
	return <View id={id} {...attributes}  {...viewProps}/>
};

Browser.propTypes = propTypes;