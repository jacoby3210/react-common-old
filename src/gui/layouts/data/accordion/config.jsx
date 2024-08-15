import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-accordion';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	mode: 'single', 										// mode for toggle sections: single - only one section, multiple - several sections.
	src: [],														// source data array provider for mapping.
	values: [],													// array of values, includes keys of open folds.
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
	mode: PropTypes.string,
	src: PropTypes.array,
	values: PropTypes.array,
};

// ========================================================================= //