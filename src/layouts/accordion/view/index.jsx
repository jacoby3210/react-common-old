import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"

// ========================================================================= //
// Accordion is a UI compоnent that is used to organize content on layout.
// It consists of a list of headers and their associated content.
// The user can click on a header to expand the content or collapse it back.
// ========================================================================= //

export const AccordionView = (
	receivedProps
) => {

	// unpack properties
	const {
		id,
		className,
		data,
		policy,
		template,
		values,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valuesState, setValuesState] = useState(values);

	// input from user
	const handleToggle = (evt, index) => {
		const isShown = valuesState.includes(index);
		if (isShown) {
			setValuesState(valuesState.filter(idx => idx !== index));
		} else {
			if (policy === 'single') setValuesState([index]);
			else setValuesState([...valuesState, index]);
		}
		evt.stopPropagation();
	};

	// render 
	const sectionProps = (item, index) => {
		return {
			data: item,
			index: index,
			key: index,
			shown: valuesState.includes(index),
			onClick: (evt) => handleToggle(evt, index),
		}
	}

	return (
		<div id={id} className={className} {...attributes}>
			{data.map((item, i) => template(sectionProps(item, i)))}
		</div>
	);
};

AccordionView.propTypes = propTypes;