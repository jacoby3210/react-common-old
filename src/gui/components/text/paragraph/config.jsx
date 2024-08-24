import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-paragraph';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	value: "",																			// current display text.
	whenUpdateValueState: (next, prev) => next,			// value change handler.
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
	value: PropTypes.string,
	whenUpdateValueState: PropTypes.func,
};

// ========================================================================= //