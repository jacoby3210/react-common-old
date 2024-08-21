import cx from 'clsx';
import {View} from '../../basics/view'
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// default template to generate a gui for an individual suggestion.
export const TemplateAdvisorOptionDefault = receivedProps => {
	const {className: classNameBase, meta, props:propsAll, ...attributes} = receivedProps;
	const {cursorIndexState, ...props} = propsAll;
	const className = cx(
		classNameBase, 
		'rc-advisor-list-option',
		{[`rc-advisor-list-cursor`]: cursorIndexState == meta.value}
	)

	return (
		<option 
			{...attributes}
			{...props}
			className={className} 
			value={meta.caption}
		>
			{meta.caption}
		</option>
	)
};

// customized View component for displaying the list of suggestions.
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