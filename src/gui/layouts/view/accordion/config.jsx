import PropTypes from 'prop-types';
// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'common-ui-accordion';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	policy: 'single', 									// Policy for opening mode: single - only one section, multiple - several sections.
	src: [],														//
	values: [],													//
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
	policy: PropTypes.string,
	src: PropTypes.array,
	values: PropTypes.array,
};

// ========================================================================= //