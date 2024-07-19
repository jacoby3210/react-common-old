import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-scroll';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	mode: "smooth",		// scrolling mode (using by DOM API methods)
	speed: 10,				// 
	target: null,			// scrolling target element.
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
	speed: PropTypes.number,
	target: PropTypes.object,
};

// ========================================================================= //