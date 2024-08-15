import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-indicator';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	colors: [],																			// available fill colors of the value indicator.
	levels: [],																			// available fill levels of the value indicator.
	max: 100,																				// display max value (min value always 0).
	value: 100,																			// current display value.
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
	colors: PropTypes.array,
	levels: PropTypes.array,
	max: PropTypes.number,
	value: PropTypes.number,
};

// ========================================================================= //