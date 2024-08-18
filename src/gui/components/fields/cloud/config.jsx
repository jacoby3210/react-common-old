import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-cloud';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	src: [],																				//
	values: [],																			//
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
	values: PropTypes.array,
};

// ========================================================================= //