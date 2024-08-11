import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// create cell around element5 for optimize 
export const StoreCell = receivedProps => {
	const {
		children,
		...attributes
	} = receivedProps;
	return ( 
		<div {...attributes}>
			{children}
		</div>
	)
}

// create an auxiliary element acting as a cursor in store
export const StoreCursor = receivedProps => {
	// initial data
	const {
		order,
		value,
		RenderElement,
	} = receivedProps;

	const [cursorOrderState, setCursorOrderState] = useState(order);
	useEffect(() => {console.log(order); setCursorOrderState(order)}, [order])
	
	return (
		<StoreCell 
			key={'cursor'} 
			className={`${DEFAULT_CLASS}-slot ${DEFAULT_CLASS}-cursor`}
			order={cursorOrderState}
			style={{order:`${cursorOrderState}`}}
		>
			<RenderElement value={value}/>	
		</StoreCell>
	);
}

// render value into UI components.
export const valuesToComponents = (values, RenderElement) => {
	return values.map(
		(item, i) => 
			<StoreCell 
				key={item} 
				className={`${DEFAULT_CLASS}-slot`} 
				order={i * 2}
				style={{order:`${i * 2}`}}
			>
				<RenderElement value={item}/>	
			</StoreCell>
	);
}
// ========================================================================= //