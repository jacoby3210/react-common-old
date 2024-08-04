import PropTypes from 'prop-types';
import { Drag } from '../drag';
// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-drop-space';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	types: ["all"],							// types of things available drop into a slot.
	values: [],									//
	onDragEnter: (e) => true, 	// is called when a dragged item is enter in drop.
	onDragLeave: (e) => true, 	// is called when a dragged item is leave out drop.
	onDragOver: (e) => true, 		// is called when a dragged item is moved on drop.
	onDrop:() => true, 					// is called when a dragged item is added to a drop.
	RenderElement: Drag,  			// render inline component.
};

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	onDragOver: PropTypes.func,
	onDrop: PropTypes.func,
};

// ========================================================================= //