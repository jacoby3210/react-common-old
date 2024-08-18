import {View} from '../../basics/view'
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// default template to generate a gui for an individual suggestion.
export const 	TemplateAdvisorOptionDefault = receivedProps => {
	const {className, meta, props, ...attributes} = receivedProps;
	return (
		<option 
			{...attributes}
			{...props}
			className={`${className} rc-advisor-list-option`} 
			value={meta.caption}
		>
			{meta.caption}
		</option>
	)
};

//
export const AdvisorList = receivedProps => {

	// initial data
	const {
		src, 
		TemplateAdvisorOption, 
		templateAdvisorOptionProps, 
		valueState
	} = receivedProps;
	const selection = src.filter(
		(element) => 
			element.caption != valueState 
			&& element.caption.includes(valueState)
	);

	// render 
	const viewProps = {
		from: 0, 
		length: selection.length, 
		src: selection, 
		TemplateViewItem: TemplateAdvisorOption,
		templateViewItemProps: templateAdvisorOptionProps
	}
	return <View {...viewProps}/>;
}

// ========================================================================= //