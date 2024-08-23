import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-dropdown-select';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	src: [],																				// source data array provider for mapping.
	TemplateSelectOption:receivedProps => {					// template for forming a gui by metadata.
		const {meta, ...attributes} = receivedProps;
		return (
			<option 
				{...attributes}
				className={`${DEFAULT_CLASS}-dropdown-select-option`} 
				onClick={meta?.onClick} 
				value={meta?.value}
			>
				{meta.caption}
			</option>
		);
	},
	whenUpdateValueState: (next, prev) => next			// value change handler.
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
	TemplateSelectOption: PropTypes.func,
	whenUpdateValueState: PropTypes.func
};

// ========================================================================= //