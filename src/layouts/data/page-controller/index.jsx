import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config"
import { CarouselController } from '../carousel-controller';

// ========================================================================= //
// Controls the switching of displayed page in the viewing area.
// ========================================================================= //

export const PageController = (
	receivedProps
) => {

	// unpack properties
	const {
		className,
		id,
		onChangeCallback,
		buttons,
		count,
		offset,
		value,
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
			className: `common-ui-page-controller-button`,
			onClick:() => { handleValueChanged(index); },
		}
	}
	const buttonList = Array.from(new Array(buttons), (v, index) => {
		const trueIndex = firstPageButton + index;
		return <button key={trueIndex} {...buttonProps(trueIndex)}>{trueIndex}</button>; 
	})

	const carouselControllerProps = {
		onChangeCallback:handleValueChanged,
		count:count,
		offset:offset,
		value:valueState + offset,
	}

	return (
		<div 
		id={id}
		className={className}
		{...attributes}
		>
			<CarouselController {...carouselControllerProps}/>
			<div className={'common-ui-page-controller-buttons'}>{buttonList}</div>
		</div>
	);
};

// PageController.propTypes = propTypes;