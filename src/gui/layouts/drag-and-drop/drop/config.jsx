import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-drop';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	policy: "single",						// policy for drop mode: single - only one item on slot, multiple - several sections.
	types: ["all"],							// types of things available drop into a slot.
	RenderElement:()=>{},				//
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
};

// ========================================================================= //