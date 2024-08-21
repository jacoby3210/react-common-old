import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-checkbox';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	value: false,																		// current value.
	whenUpdateValueState: (next, prev) => next,			// callback to handle the value state update.
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
	value: PropTypes.bool,
	whenUpdateValueState: PropTypes.func,
};

// ========================================================================= //