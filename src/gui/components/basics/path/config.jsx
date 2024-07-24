import PropTypes from 'prop-types';
// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-path';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: "/",				// data to be displayed in the component(url as string).
	delimiter: "/",		// symbol(or substring) for dividing data into parts.
};

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	id: PropTypes.string,
	data: PropTypes.string,
	delimiter: PropTypes.string,
};

// ========================================================================= //