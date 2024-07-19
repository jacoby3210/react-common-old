import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Range } from '../range';
import { defaultProps, propTypes } from "./config"
import { positionToValue, valueToPosition } from './helpers';
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
	const self = useRef(null), scrollTimeoutRef = useRef(null);
	const [positionState, setPositionState] = useState(0);

	// inputs
	const handleMouseDown = (scrollFn) => {
		scrollFn();
		scrollTimeoutRef.current = setInterval(scrollFn, 10);
	};

	// render 
	const toStartProps = {
		className: `${className}-button-to-start`,
		onDoubleClick: () => { target.current.scrollTo({ top: 0, behavior: 'smooth' }); },
		onMouseDown: () => handleMouseDown(() => {
			target.current.scrollBy(0, -1);
			const newPosition = target.current.scrollTop / (target.current.scrollHeight - target.current.offsetHeight);
			setPositionState(newPosition);
		}),
		onMouseUp: () => { clearInterval(scrollTimeoutRef.current); },
	}

	const toEndProps = {
		className: `${className}-button-to-end`,
		onDoubleClick: () => { target.current.scrollTo({ top: target.current.scrollHeight, behavior: 'smooth' }); setPositionState(1.0); },
		onMouseDown: () => handleMouseDown(() => {
			target.current.scrollBy(0, 1);
			const newPosition = target.current.scrollTop / (target.current.scrollHeight - target.current.offsetHeight);
			setPositionState(newPosition);
		}),
		onMouseUp: () => { clearInterval(scrollTimeoutRef.current); },
	}

	const inputRangeProps = {
		min: 0.0,
		max: 1.0,
		step: speed / 1000,
		type: "range",
		value: positionState,
		onChange: (value) => {
			const newPosition = (target.current.scrollHeight - target.current.offsetHeight) * value;
			setPositionState(value);
			target.current.scrollTo({ top: newPosition });
		},
	}

	return (
		<div
			id={id}
			className={className}
			ref={self}
			position={positionState}
			{...attributes}
		>
			<button {...toStartProps}></button>
			<Range {...inputRangeProps} />
			<button {...toEndProps}></button>
		</div>
	);
};

Scroll.propTypes = propTypes;