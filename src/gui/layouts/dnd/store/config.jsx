import PropTypes from 'prop-types';
import {Drag} from '/src/gui/layouts/dnd/drag'
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-store';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	types: ["all"],																	// types of things available drop into a slot.
	values: [],																			//
	onDragEnter: (e) => true, 											// is called when a dragged item is enter in drop.
	onDragLeave: (e) => true,											 	// is called when a dragged item is leave out drop.
	onDragOver: (e) => true,										 		// is called when a dragged item is moved on drop.
	onDrop:() => true, 															// is called when a dragged item is added to a drop.
	TemplateDragComponent: Drag,					  				// template for render drag component.
};

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
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
	id: PropTypes.string,
	types: PropTypes.array,
	values: PropTypes.array,
	onDragEnter: PropTypes.func,
	onDragLeave: PropTypes.func,
	onDragOver: PropTypes.func,
	onDrop: PropTypes.func,
	TemplateDragComponent: PropTypes.func,
};

// ========================================================================= //