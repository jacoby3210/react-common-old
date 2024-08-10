import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {Drop} from '/src/gui/layouts/dnd/drop'
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
import {createCursor, valuesToComponents } from './helpers';
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
	const cursor = useMemo(() => createCursor(RenderElement), [RenderElement]);

	// hooks
	const selfRef = useRef(null), cursorRef = useRef(null); 
	const [valuesState, setValuesState] = useState(values);
	// const [childComponentsState, setChildComponentsState] = useState(
	// 	values.map((item,i) => <RenderElement key={item} value={item}/>)
	// );
	// useEffect(() => {handleUpdateValues(values);}, [values])
	const childComponentsState = useMemo(
		() => valuesToComponents(valuesState, RenderElement), 
		[valuesState, RenderElement]
	);
	useEffect(() => {setValuesState(values);}, [values]);


	// input from user
  const handleDragEnter = useCallback(() => {
    setValuesState(prevValues => [...prevValues, 'cursor']);
  }, []);

  const handleDragLeave = useCallback(() => {
    setValuesState(prevValues => prevValues.filter(value => value !== 'cursor'));
  }, []);

  const handleDragOver = useCallback(e => {
    const targetKey = e.detail.target.attributes['value']?.value;
    if (targetKey === 'cursor') return;

    const newValues = [...valuesState];
    const cursorIndex = newValues.indexOf('cursor');
    const targetIndex = newValues.indexOf(targetKey);

    if (cursorIndex === -1 || targetIndex === -1) return;

    [newValues[cursorIndex], newValues[targetIndex]] = [newValues[targetIndex], newValues[cursorIndex]];
    setValuesState(newValues);
  }, [valuesState]);

  const handleDrop = useCallback(e => {
    const targetKey = e.detail.dragRef.current.attributes['value']?.value;
    if (targetKey) {
      setValuesState(prevValues => [...prevValues.filter(value => value !== 'cursor'), targetKey]);
    }
  }, []);

	// input from user
	// const handleUpdateValues = (values) => {
	// 	setValuesState(values);
		// setChildComponentsState(valuesToComponents(values, RenderElement));
	// }
	
	// const handleDragEnter = (e) => {
  //   setChildComponentsState([...childComponentsState, cursor]);
	// }
	
	// const handleDragLeave = (e) => {
	// 	setChildComponentsState(valuesToComponents(valuesState, RenderElement));
	// }
	
	// const handleDragOver = (e) => {
	// 	const targetKey = e.detail.target.attributes["value"]?.value;
	// 	if(targetKey == cursor.key) return;
	// 	const cursorIndex = childComponentsState.findIndex(item => item?.key == 'cursor');
	// 	const targetIndex = childComponentsState.findIndex(item => item?.key == targetKey);
	// 	if (valuesState.length == 0 || Math.min(cursorIndex, targetIndex) < 0) return;
	
	// 	const newItems = [...childComponentsState];
	// 	[newItems[cursorIndex], newItems[targetIndex]] = [newItems[targetIndex], newItems[cursorIndex]];
	// 	setChildComponentsState(newItems);
	// };

	// const handleDrop = (e) => {
	// 	const targetKey = e.detail.dragRef.current.attributes["value"]?.value;
	// 	handleUpdateValues([...valuesState, targetKey]);
	// }
	
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
    </Drop>
  );
};

Store.propTypes = propTypes;

// ========================================================================= //