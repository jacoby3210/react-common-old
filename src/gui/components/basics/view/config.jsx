import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-view';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	from: 0,												// start index to display elements.
	length: 0,											// length of items to display (count).
	src: [],												// source data array provider for mapping.
	RenderElement: receivedProps => // template for forming a gui by metadata.
	{
		const {meta, ...attributes} = receivedProps;
		return (<li {...attributes}>{meta.text}</li>);
	}, 
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
	RenderComponent: PropTypes.func,
};

// ========================================================================= //