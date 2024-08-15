import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-drop';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	types: ["all"],																	// types of things available drop into a slot.
	onDragEnter: (e) => true, 											// is called when a dragged item is enter in drop.
	onDragLeave: (e) => true, 											// is called when a dragged item is leave out drop.
	onDragOver: (e) => true, 												// is called when a dragged item is moved on drop.
	onDrop: (e) => true,														// is called when a dragged item is added to a drop.
};

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
		PropTypes.any,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	id: PropTypes.string,
	onDragEnter: PropTypes.func,
	onDragLeave: PropTypes.func,
	onDragOver: PropTypes.func,
	onDrop: PropTypes.func,
};

// ========================================================================= //