import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-tab-controller';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: [],														// array of initial data for forming the tab controller interface.
	value: -1, 													// the current tab id.
	onChangeCallback: (tabId) => { }, 	// handling a child component's state change in the parent component.
	RenderComponent: ({ meta, ...attrs }) => <option {...attrs}>{meta.caption}</option>,
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
	data: PropTypes.array,
	RenderElement: PropTypes.func,
	value: PropTypes.any,
};

// ========================================================================= //