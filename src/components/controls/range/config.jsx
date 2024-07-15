import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-range';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	axis: false,
	min: 0,
	max: 0,
	step: 0.01,
	value: 0,
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
	axis: PropTypes.bool,
};

// ========================================================================= //