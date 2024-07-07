import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-page-controller';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	buttons: 5,												// number of simultaneously displayed buttons for page switching.
	count: 0,													// total number of pages displayed.
	offset: 1,												// offset from the start page.
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