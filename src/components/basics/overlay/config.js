import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'react-component-example';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	shown: false,
	timer: 0,
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
	shown: PropTypes.bool,
	timer: PropTypes.number,
};

// ========================================================================= //