import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-drag-item';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	area: document.body,				// area of the interface in which the drag and drop takes place.
	axis: "xy",									//
	src: {},										// data source associated with the interface element.
	type: "all",								// type defining available slots.
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
	src: PropTypes.object,
};

// ========================================================================= //