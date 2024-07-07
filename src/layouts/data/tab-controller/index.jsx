import cx from 'clsx';
import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config"

// ========================================================================= //
// Component 
// ========================================================================= //

export const TabController = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		data,
		onChangeCallback,
		RenderComponent,
		value,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState(value);
	const handleToTab = (tabId) => {
		onChangeCallback((tabId));
		setValueState((prevTabId) => tabId);
	}

	// render 
	const tabProps = (el, i) => {
		return {
			className: `${className}-button`,
			index: i,
			meta: el,
			value: el.id,
			current: value == el.id ? true : undefined,
			onClick:() => { handleToTab(el.id); },
		}
	}

	return (
		<div 
			id={id}
			className={className}
			{...attributes}
		>
			<div className={'ui-tab-controller-buttons'}>
				{data.map((el, i) => <RenderComponent key={i} {...tabProps(el, i)}	/>)}
			</div>
		</div>
	);
};

TabController.propTypes = propTypes;