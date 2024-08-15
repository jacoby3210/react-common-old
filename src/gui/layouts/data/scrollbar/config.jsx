import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-scrollbar';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	axis: false,																		// axis in the depth of which the GUI component is located.
	mode: "smooth",																	// scrolling mode (using by DOM API methods)
	speed: 0.01, 																		// speed of slider movement on the track.
	target: null,																		// scrolling target element.
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