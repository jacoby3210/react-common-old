import PropTypes from 'prop-types';
import { Drag } from '../drag';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-slot';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	types: ["all"],																	// types of drags available drop into a slot.
	value: -1,																			// initial value.
	onDrop:(e) => true, 														// is called when a dragged item is added to a slot
	TemplateDragComponent: Drag,										// template for render drag component.
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
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onDrop: PropTypes.func,
	TemplateDragComponent: PropTypes.func,
};

// ========================================================================= //