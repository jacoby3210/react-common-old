import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component that can take over dragged components within an Area.		 //
// ========================================================================= //

export const Drop = React.forwardRef((receivedProps, ref) => {

	// initial data
	const {
		id,
		children,
		className,
		types,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [dragOverState, setDragOverState] = useState(false);

	// input from user
	const handleDragEnter = (e) => {
		if(!(e.detail.cursorRef.current.classList.contains("rc-drag"))) return;
		const type =  e.detail.cursorRef.current.attributes["type"].value;
		const isAccept = types.includes(type);
		setDragOverState(isAccept); 
		onDragEnter(e); 
	};

  const handleDragLeave = (e) => {
		onDragLeave(e); 
		setDragOverState(false);
	};
  const handleDragOver = (e) => {
		onDragOver(e)
	};

	const handleDrop = (e) => {
		if(!dragOverState) {e.preventDefault(); return false;}
		setDragOverState(false); 
		if(!onDrop(e)) {e.preventDefault(); return false;}
	}

	// render 
	return (
    <div
			id={id}
			className={cx(className, {[`${DEFAULT_CLASS}-accept`]: dragOverState,})}
			ref={ref}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
			{...attributes}
    >
			{children}
    </div>
  );
});

Drop.propTypes = propTypes;