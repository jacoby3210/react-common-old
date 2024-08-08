import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// 
export const createCursor = (RenderElement) => {
	return <RenderElement key={'cursor'} className={'rc-drop-cursor'}/>
}

//
export const deleteCursor= () => {}

//
export const valuesToComponents = (values, RenderElement) => {
	return values.map(
		(item) => 
			<RenderElement 
				className={`${DEFAULT_CLASS}-in`} 
				key={item} 
				value={item}
			/>	
	);
}
// ========================================================================= //