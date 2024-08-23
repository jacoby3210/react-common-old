import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'prefix-component';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	options: [],    																// source data array provider for mapping.
	value: 0,   																		// 
	whenUpdateValueState: (next, prev) => next			// value change handler.
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
	options: PropTypes.array,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	whenUpdateValueState: PropTypes.func,
};

// ========================================================================= //