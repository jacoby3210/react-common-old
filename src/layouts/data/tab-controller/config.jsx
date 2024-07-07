import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-tab-controller';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: [],
	RenderComponent: ({ meta, ...attrs }) => <option {...attrs}>{meta.caption}</option>,
	onChangeCallback: (value)=>{}
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
	data: PropTypes.array,
	onChangeCallback: PropTypes.func,
	RenderElement: PropTypes.func,
	value: PropTypes.any,
};

// ========================================================================= //