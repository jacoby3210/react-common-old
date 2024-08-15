import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-dropdown';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	caption: "dropdown",														// displayed text on the control button.
	src: [],																				// source data array provider for mapping.
	TemplateDropdownOption: receivedProps => 				// template to generate a gui for an individual option in an list.
	{
		const {meta, ...attributes} = receivedProps;
		return (
			<button 
				className={`${DEFAULT_CLASS}-option`} 
				onClick={meta?.onClick} 
				{...attributes}
			>
				{meta.caption}
			</button>
		);
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
	TemplateDropdownOption: PropTypes.func,
};

// ========================================================================= //