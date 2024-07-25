import PropTypes from 'prop-types';
// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-slider-controller';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	count: 0,									// number of available child elements.
	infinity: false,					// infinite scroll mode.
	offset: 0,								// offset from the start page.
	value: 0, 								// the current element index.
	onChange: (index) => { }, // handling a child component's state change in the parent component.
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
	count: PropTypes.number,
	infinity: PropTypes.bool,
	offset: PropTypes.number,
	value: PropTypes.number,
	onChangeCallback: PropTypes.func,
};

// ========================================================================= //