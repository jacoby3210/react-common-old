import PropTypes from 'prop-types';
import { AccordionSection } from '../section';
// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-accordion-view';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: [],
	policy: 'single', 						// Policy for opening mode: single - only one section, multiple - several sections.
	template: AccordionSection,		// JSX method to fill the accordion view.
	values: [],
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