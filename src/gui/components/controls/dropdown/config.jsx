import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-dropdown';

export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	caption: "dropdown",									// displayed text on the control button.
	src: [],															// source data array provider for mapping.
	RenderElement: (receivedProps) => {		// template for forming a gui by metadata.
		const {meta, ...attributes} = receivedProps;
		return <button className='dd' onClick={meta?.onClick} {...attributes}>{meta.caption}</button>;
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
	caption: PropTypes.string,
	src: PropTypes.array,
	RenderElement: PropTypes.func,
};

// ========================================================================= //