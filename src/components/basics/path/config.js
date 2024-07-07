import PropTypes from 'prop-types';
// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-path';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: "/",
	delimiter: "/",
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