import React, { useEffect, useRef, useState} from 'react';
import { mergeProps } from 'react-aria';
import {defaultProps, propTypes} from "./config"
// ========================================================================= //
// Component 
// ========================================================================= //

export const Scroll = (
	receivedProps
) => {

	// unpack properties
	const {
		children,
		className,
		id,
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
    console.log(target.current)
    scrollFn();
    scrollTimeoutRef.current = setInterval(scrollFn, 100);
  };
  const scrollToPosition = () => {target.current.scrollTo({ top: position, behavior: 'smooth' });};

  const toStartProps = {
    onDoubleClick: ()=>{target.current.scrollTo({ top: 0, behavior: 'smooth' });},
    onMouseDown: () => handleMouseDown(() => target.current.scrollBy(0, -100)),
    onMouseUp: () => {clearInterval(scrollTimeoutRef.current);},
  }

  const toEndProps = {
    onDoubleClick: ()=>{target.current.scrollTo({ top: target.current.scrollHeight, behavior: 'smooth' });},
    onMouseDown: () => handleMouseDown(() => window.scrollBy(0, 100)),
    onMouseUp: () => {clearInterval(scrollTimeoutRef.current);},
  }


	// render 
	console.log(target.current)
	return (
		<div
			id={id}
			className={className}
			ref={self}
			{...attributes}>
			<div>{children}</div>
			<div>
				<button className={`${className}-button-to-start`} {...toStartProps}></button>
				<div className={`${className}-panel`}>
					<div className={`${className}-cursor`}></div>
				</div>
				<button className={`${className}-button-to-end`} {...toEndProps}></button>
			</div>
		</div>
	);
};

Scroll.propTypes = propTypes;