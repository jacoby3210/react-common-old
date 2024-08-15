import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-popup';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	shown: false,																		// initial state popup ui.
	whenUpdateShownState: () => { }									// callback to handle the shown state update.
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
	whenUpdateShownState: PropTypes.func,
};

// ========================================================================= //