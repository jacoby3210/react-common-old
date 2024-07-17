import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Range } from '../range';
import { defaultProps, propTypes } from "./config"
// ========================================================================= //
// React component represents universal customizable content scroller.
// ========================================================================= //

export const Scroll = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
		mode,
		speed,
		target,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const self = useRef();
	const [position, setPosition] = useState(0);
	const scrollTimeoutRef = useRef(null);

	const handleInputChange = (e) => {
		setPosition(Number(e.target.value));
	};

	const handleMouseDown = (scrollFn) => {
		scrollFn();
		scrollTimeoutRef.current = setInterval(scrollFn, 10);
	};
	const scrollToPosition = () => { };

	const cursorProps = {
		className: `${className}-cursor`,
		onMouseDown: null,
		onMouseUp: null,
		onMouseMove: null,
	}

	const toStartProps = {
		className: `${className}-button-to-start`,
		onDoubleClick: () => { target.current.scrollTo({ top: 0, behavior: 'smooth' }); },
		onMouseDown: () => handleMouseDown(() => { target.current.scrollBy(0, -speed); }),
		onMouseUp: () => { clearInterval(scrollTimeoutRef.current); },
	}

	const toEndProps = {
		className: `${className}-button-to-end`,
		onDoubleClick: () => { target.current.scrollTo({ top: target.current.scrollHeight, behavior: 'smooth' }); },
		onMouseDown: () => handleMouseDown(() => { target.current.scrollBy(0, speed) }),
		onMouseUp: () => { clearInterval(scrollTimeoutRef.current); },
	}

	const inputRangeProps = {
		min: 0.0,
		max: 1.0,
		step: speed / 1000,
		type: "range",
		onChange: (value) => {
			const newPosition = (target.current.scrollHeight - target.current.offsetHeight) * value;
			setPosition(newPosition);
			target.current.scrollTo({ top: newPosition });
		},
	}

	// render 
	return (
		<div
			id={id}
			className={className}
			ref={self}
			{...attributes}
		>
			<button {...toStartProps}></button>
			<Range {...inputRangeProps} />
			{/* <input {...inputRangeProps} /> */}
			<button {...toEndProps}></button>
		</div>
	);
};

Scroll.propTypes = propTypes;