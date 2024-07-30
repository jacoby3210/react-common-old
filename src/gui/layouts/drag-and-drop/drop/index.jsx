import cx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { Drag } from '../drag';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Component 
// ========================================================================= //

export const Drop = receivedProps => {

	// initial data
	const {
		id,
		className,
		policy,
		types,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const [valueState, setValueState] = useState([]);									//
	const [dragOverState, setDragOverState] = useState(false);				//

	// input from user
	const handleMouseOver = (e) => { 
		if(!Drag.current) return;
		const isAccept = types.includes(Drag.current.type);
		setDragOverState(isAccept); 
	};
  const handleMouseLeave = (e) => {setDragOverState(false);};
	const handleMouseUp = (e) => {
		
	}

	// render 
	return (
    <div
			id={id}
			className={cx(className, {[`${DEFAULT_CLASS}-accept`]: dragOverState,})}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseLeave}
      onMouseUp={handleMouseUp}
			{...attributes}
    >
			{valueState.map((item,i) => <RenderElement data={item} key={item.id|i}/>)}
    </div>
  );
};

Drop.propTypes = propTypes;