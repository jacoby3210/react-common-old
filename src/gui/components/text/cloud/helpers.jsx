// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const TemplateCloudSelectTag = receivedProps => {
	const {meta, props, ...attributes} = receivedProps;
	return (
		<li {...attributes} {...props}>
			<span>{meta?.text}</span>
			<button>X</button>
		</li>
	);
}

// ========================================================================= //