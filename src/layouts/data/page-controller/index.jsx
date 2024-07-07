import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config.js"
import { SlideController } from '../slide-controller/index.jsx';

// ========================================================================= //
// Component 
// ========================================================================= //

export const PageController = (
	receivedProps
) => {

	// unpack properties
	const {
		className,
		id,
		buttons,
		pages,
		onChangeCallback,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	const handleValueChanged = (page) => {
		onChangeCallback((page));
		setValueState((prevPage) => page);
	}

	// input from user
	const firstPageButton = Math.min(
		Math.max(valueState - Math.floor(buttons / 2), 1),
		pages - buttons + 1
	);
	const lastPageButton = firstPageButton + buttons;

	// get page button for button render.
	const children = [];
	for (let index = firstPageButton; index < lastPageButton; index++) {
		children.push(
			<button key={index}
				className={`common-ui-page-controller-button${(valueState == index ? ' ui-page-controller-button-current' : '')}`}
				onClick={() => { handleValueChanged(index); }}
			>
				{index}
			</button>
		)
	}

	// render 
	return (
		<div 
		id={id}
		className={className}
		{...attributes}
		>
			<SlideController
				onChangeCallback={handleValueChanged}
				total={pages}
				value={valueState}
			/>
			<div className={'common-ui-page-controller-buttons'}>{children}</div>
		</div>
	);
};

// PageController.propTypes = propTypes;