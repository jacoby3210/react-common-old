import {View} from '../../basics/view'
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const AdvisorList = receivedProps => {
	const {data, TemplateOption, templateOptionProps, valueState} = receivedProps;
	const selection = data.filter((element) => element.caption.includes(valueState))
	const viewProps = {
		from: 0, 
		length: selection.length, 
		src: selection, 
		TemplateViewItem: TemplateOption,
		templateViewItemProps: templateOptionProps
	}
	return <View {...viewProps}/>;
}

// ========================================================================= //