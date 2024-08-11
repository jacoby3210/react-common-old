import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {Drop} from '/src/gui/layouts/dnd/drop'
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {StoreCursor, valuesToComponents } from './helpers';
// ========================================================================= //
// React Component that can take over dragged a few components.							 //
// ========================================================================= //

export const Store = receivedProps => {

	// initial data
	const {
		id,
		types,
		values,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		RenderElement,
		...attributes
	} = mergeProps(defaultProps, receivedProps);
	
	// hooks
	const selfRef = useRef(null), cursorRef = useRef(null); 
	const [cursorState, setCursorState] = useState(false);
	const [cursorOrderState, setCursorOrderState] = useState(-1);
	const [valuesState, setValuesState] = useState(values);

	const childComponentsState = useMemo(
		() => valuesToComponents(valuesState, RenderElement), 
		[valuesState, RenderElement]
	);
	useEffect(() => {setValuesState(values);}, [values, RenderElement]);

	// input from user
  const handleDragEnter = useCallback(() => {setCursorState(true);}, []);
  const handleDragLeave = useCallback(() => {setCursorState(false);}, []);
  const handleDragOver = useCallback(e => {
		const slot = e.detail.target.closest(`.${DEFAULT_CLASS}-slot`);
		if(!slot || slot.classList.contains(`${DEFAULT_CLASS}-cursor`)) return;
		const slotOrder = Number(slot.attributes['order'].value)
		setCursorOrderState(prevValue => {
			return slotOrder < prevValue ?  slotOrder - 1 : slotOrder + 1;
		});
  }, []);
	
  const handleDrop = useCallback(e => {
    const targetKey = e.detail.dragRef.current.attributes['value']?.value;
    if (targetKey) setValuesState(prevValues => [...prevValues, targetKey]);
		setCursorState(false);
  }, []);

	// render 
	return (
    <Drop
			id={id}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
			ref={selfRef}
			{...attributes}
    >
			{childComponentsState}
			{cursorState && <StoreCursor order={cursorOrderState} RenderElement={RenderElement} />}
    </Drop>
  );
};

Store.propTypes = propTypes;

// ========================================================================= //