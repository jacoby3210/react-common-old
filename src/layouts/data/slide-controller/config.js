import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'common-ui-slider-controller';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	infinity: false,									//
	onChangeCallback: (index) => { }, // Sync external layout with internal data.
	total: 0,													//
	value: 0, 												// The current element index.
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
	infinity: PropTypes.bool,
	onChangeCallback: PropTypes.func,
	value: PropTypes.number,
};

// ========================================================================= //