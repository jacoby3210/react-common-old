import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-browser';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	length: 5,												// length of simultaneously displayed buttons for page switching.
	src:[],														// source data array provider for mapping.
	value: -1,												// index of the displayed page.
	onStateUpdate: (index) => { }, // handling a child component's state change in the parent component.
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
	length: PropTypes.number,
	src: PropTypes.array,
	value: PropTypes.number,
	onStateUpdate: PropTypes.func,
};

// ========================================================================= //