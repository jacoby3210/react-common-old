import PropTypes from 'prop-types';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-advisor';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	data: [],
	value: 0,
	TemplateOption: receivedProps => {
		const {meta, ...attributes} = receivedProps;
		// console.log(meta)
		return <option 
			className={`${DEFAULT_CLASS}-list-option`} 
			value={meta.value}
			{...attributes}
		>
			{meta.caption}
		</option>
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
		PropTypes.any,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	id: PropTypes.string,
	data: PropTypes.array,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	TemplateOption: PropTypes.func,
};

// ========================================================================= //