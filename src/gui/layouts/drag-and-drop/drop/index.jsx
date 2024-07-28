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
	const handleDragOver = (e) => {
		e.preventDefault(); 
		const isAccept = types.includes(Drag.current.type)
		setDragOverState(isAccept); 
		return isAccept
	};
  const handleDragLeave = () => {setDragOverState(false);};
  const handleDrop = (e) => {
    e.preventDefault();
		// const dataType = e.dataTransfer.getData('type');
		// console.log(dataType,1)
    // const data = e.dataTransfer.getData("item");
		// if(policy == "single") setValueState([data])
		// else setValueState({...valueState, data})
    setDragOverState(false);
  };

	// render 
	return (
    <div
			id={id}
			className={cx(className, {[`${DEFAULT_CLASS}-accept`]: dragOverState,})}
			{...attributes}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
			{valueState.map((item,i) => <RenderElement data={item} key={item.id|i}/>)}
    </div>
  );
};

Drop.propTypes = propTypes;