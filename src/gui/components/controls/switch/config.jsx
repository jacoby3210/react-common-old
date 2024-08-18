import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-switch';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	name: "switch",																	//
	src: [],																				//
	value: null,																		//
	onChange: (next, prev) => {},										// 
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
	src: PropTypes.array,
	value: PropTypes.any,
	onChange: PropTypes.func,
};

// ========================================================================= //