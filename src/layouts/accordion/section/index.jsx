import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { defaultProps, propTypes } from "./config"

// ========================================================================= //
// UI component, using by default to fill the accordion view.
// ========================================================================= //

export const AccordionSection = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		data,
		key,
		shown,
		onClick,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [shownState, setShownState] = useState(shown);

	// input from user

	// render 

	return (
		<div key={key}
			id={id}
			className={cx(className, { ["classname"]: false, })}
			{...attributes}
		>
			<h1 onClick={onClick}>{data.caption}</h1>
			{shown && <p>{data.content}</p>}
		</div>
	);
};

AccordionSection.propTypes = propTypes;