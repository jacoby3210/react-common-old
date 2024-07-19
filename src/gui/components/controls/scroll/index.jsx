import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Range } from '../range';
import { defaultProps, propTypes } from "./config"
import { horizontalProps, verticalProps, calcPosition } from './helpers';
// ========================================================================= //
// React component represents universal customizable content scroller.
// ========================================================================= //

export const Scroll = receivedProps => {

	// unpack properties
	const {
		children,
		className,
		id,
		axis,
		mode,
		speed,
		target,
		...attributes
	} = mergeProps(defaultProps, receivedProps);
	const props = axis ? horizontalProps : verticalProps;

	// hooks
	const self = useRef(null), scrollTimeoutRef = useRef(null);
	const [positionState, setPositionState] = useState(0);

	// inputs
	const handleMouseDown = (scrollFn) => {
		scrollFn();
		scrollTimeoutRef.current = setInterval(scrollFn, 10);
	};

	const handleButtonMouseDown = (offset) => {
		target.current.scrollBy(0, offset);
		setPositionState(prev => calcPosition(target.current, props));
	}

	const handleMouseDoubleClick = (value) => {
		target.current.scrollTo({ top: value, behavior: 'smooth' });
		setPositionState(prev => value / target.current[props.scrollSize]);
	}

	// render 
	const toStartProps = {
		className: `${className}-button-to-start`,
		onDoubleClick: () => { handleMouseDoubleClick(0); },
		onMouseDown: () => handleMouseDown(() => handleButtonMouseDown(-1)),
		onMouseUp: () => { clearInterval(scrollTimeoutRef.current); },
	}

	const toEndProps = {
		className: `${className}-button-to-end`,
		onDoubleClick: () => { handleMouseDoubleClick(target.current[props.scrollSize]); },
		onMouseDown: () => handleMouseDown(() => handleButtonMouseDown(1)),
		onMouseUp: () => { clearInterval(scrollTimeoutRef.current); },
	}

	const inputRangeProps = {
		axis,
		min: 0.0,
		max: 1.0,
		step: speed / 1000,
		value: positionState,
		onChange: (value) => {
			const newPosition = (target.current[props.scrollSize] - target.current.offsetHeight) * value;
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