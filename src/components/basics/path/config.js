import PropTypes from 'prop-types';
// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-path';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	delimiter: "/",
	value: "/"
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
	delimiter: PropTypes.string,
	value: PropTypes.string,
};

// ========================================================================= //