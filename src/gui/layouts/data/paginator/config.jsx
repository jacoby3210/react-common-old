import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-paginator';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	lengthBrowser: 0,																// length of simultaneously displayed buttons for page switching.
	lengthNavigator: 0,															// number of available child elements.
	src: [],																				// source data array provider for mapping.
	value: -1,																			// index of the displayed page.
	whenUpdateValueState: (value) => { }, 					// handling a child component's state change in the parent component.
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
	lengthBrowser: PropTypes.number,
	lengthNavigator: PropTypes.number,
	src: PropTypes.array,
	value: PropTypes.number,
	whenUpdateValueState: PropTypes.func,
};

// ========================================================================= //