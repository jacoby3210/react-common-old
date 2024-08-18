// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// default template to generate a gui for an individual item in an array.
export const TemplateViewItemDefault = receivedProps => 							
{
		const {meta, ...attributes} = receivedProps;
		return (<li {...attributes}>{meta?.text}</li>);
};

// ========================================================================= //