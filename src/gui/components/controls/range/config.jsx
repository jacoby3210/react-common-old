import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-range';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	axis: false,		// axis in the depth of which the GUI component is located.
	min: 0,					// minimum value available for choice.
	max: 100,				// maximum value available for choice.
	speed: 0.01, 		// speed of slider movement on the track.
	step: 0.01,			// minimum step to change the value.
	value: 0,				// current setup value.
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