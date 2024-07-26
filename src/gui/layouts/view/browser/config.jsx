import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-browser';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	buttons: 5,												// number of simultaneously displayed buttons for page switching.
	count: 5,													// total number of pages displayed.
	offset: 1,												// offset from the start page.
	src:[],														// source data array provider for mapping.
	value: -1,												// index of the displayed page.
	onChangeCallback: (index) => { }, // handling a child component's state change in the parent component.
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
	onChangeCallback: PropTypes.func,
	buttons: PropTypes.number,
	count: PropTypes.number,
	offset: PropTypes.number,
	value: PropTypes.number,
};

// ========================================================================= //