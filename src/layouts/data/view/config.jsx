import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

const DEFAULT_CLASS = 'common-ui-data-view';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: [],												// data provider for mapping.
	from: 0,												// display elements from the element with the specified index.
	range: 0,												// range of items to display (count).
	RenderComponent: ({meta}) => <li className='common-ui-data-view-element'>{meta.text}</li>, 
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
	from: PropTypes.number,
	range: PropTypes.number,
	RenderComponent: PropTypes.func,
};

// ========================================================================= //