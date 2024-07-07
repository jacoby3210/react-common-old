import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-popup';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	shown: false,
	updateShownState: () => { }
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
	updateShownState: PropTypes.func,
};

// ========================================================================= //