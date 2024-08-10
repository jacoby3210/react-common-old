import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// create an auxiliary element acting as a cursor in store
export const createCursor = (RenderElement) => {
	return <RenderElement key={'cursor'} className={'rc-drop-cursor'}/>
}

// create cell aroud element5 for optimize 
export const StoreCell = receivedProps => {
	const {
		children
	} = receivedProps;

	return ( 
		// <div>
			children
		// </div>
	)
}

// 
export const valuesToComponents = (values, RenderElement) => {
	return values.map(
		(item) => 
			<StoreCell key={item}>
				<RenderElement 
					className={`${DEFAULT_CLASS}-in`} 
					value={item}
				/>	
			</StoreCell>
	);
}
// ========================================================================= //