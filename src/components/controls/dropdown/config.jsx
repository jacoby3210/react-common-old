import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-select';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	caption: "dropdown",
	data: [],
	shown: false,
	RenderElement: ({ caption, value }) => <option value={value}>{caption}</option>,
	value: 0
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
	shown: PropTypes.bool,
	value: PropTypes.any,
};

// ========================================================================= //