import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-drag';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	area: document.body,						// area of the interface in which the drag and drop takes place.
	axis: "xy",											// axis along which the element will move.
	mode: "self",										// determines what will be moved: the element itself or its clone.
	src: {},												// data source associated with the interface element.
	position:{"x": 0, "y": 0},			// initial position.
	type: "all",										// type defining available slots.
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
	axis:PropTypes.string,
	mode:PropTypes.string,
	position: PropTypes.object,
	src: PropTypes.object,
	type:PropTypes.string,
};

// ========================================================================= //