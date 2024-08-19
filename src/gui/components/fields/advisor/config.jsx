import PropTypes from 'prop-types';
import { TemplateAdvisorOptionDefault } from './helpers';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-advisor';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	src: [],																									// source data array available suggestions.
	value: 0,																									// current display text.
	whenInputSubmit: (next, prev) => next,										// to handle submit of user input.
	TemplateAdvisorOption: TemplateAdvisorOptionDefault,			// template to generate a gui for an individual suggestion.
};

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
		PropTypes.any,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	id: PropTypes.string,
	src: PropTypes.array,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	whenInputSubmit: PropTypes.func,
	TemplateAdvisorOption: PropTypes.func,
};

// ========================================================================= //