import {View} from '../../basics/view'
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const AdvisorList = ({data, TemplateOption, valueState}) => {
	const selection = data.filter((element) => element.caption.includes(valueState))
	const viewProps = {
		from: 0, 
		length: selection.length, 
		src: selection, 
		TemplateViewItem: TemplateOption
	}
	return <View {...viewProps}/>;
}

// ========================================================================= //