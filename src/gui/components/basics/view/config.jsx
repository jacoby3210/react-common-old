import PropTypes from 'prop-types';
import {TemplateViewItemDefault} from "./helpers"
// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-view';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	from: 0,																				// start index to display elements.
	length: 0,																			// length of items to display (count).
	src: [],																				// source data array provider for mapping.
	TemplateViewItem: TemplateViewItemDefault, 			// template to generate a gui for an individual item in an array.
	templateViewProps: {},													// additional properties common to all child elements.
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
	from: PropTypes.number,
	length: PropTypes.number,
	src: PropTypes.array,
	TemplateViewItem: PropTypes.func,
	templateViewProps: PropTypes.func,
};

// ========================================================================= //