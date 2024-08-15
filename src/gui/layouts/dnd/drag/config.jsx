import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-drag';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	mode: "self",																		// determines what will be moved: the element itself or its clone.
	type: "all",																		// type defining available slots.
	value: 0,																				// default value id.
	onDropSuccess: (v) => {},												// is called when a process of drag item has been success. 
	onDropFailure: (v) => {},												// is called when a process of drag item has been failure.
	onDragStart: (v) => {},													// is called when a process of drag item started. 
	onDragEnd: (v) => {},														// is called when a process of drag item ended. 
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
	axis:PropTypes.string,
	mode:PropTypes.string,
	position: PropTypes.object,
	src: PropTypes.object,
	type:PropTypes.string,
};

// ========================================================================= //