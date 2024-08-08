import PropTypes from 'prop-types';
import { Drag } from '../drag';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-slot';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	types: ["all"],							// types of drags available drop into a slot.
	value: -1,									// initial value.
	onDrop:() => true, 					// is called when a dragged item is added to a slot
	RenderElement: Drag,  			// render inline component.
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
	onDrop: PropTypes.func,
	RenderElement: PropTypes.func,
};

// ========================================================================= //