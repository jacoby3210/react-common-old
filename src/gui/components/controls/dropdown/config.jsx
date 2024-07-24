import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-dropdown';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	caption: "dropdown",		//
	src: [],								//
	value: 0,								//
	RenderElement: ({ caption, value }) => <option value={value}>{caption}</option>,
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
	caption: PropTypes.string,
	data: PropTypes.array,
	RenderElement: PropTypes.func,
	value: PropTypes.any,
};

// ========================================================================= //