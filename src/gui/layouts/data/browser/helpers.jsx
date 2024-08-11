// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const TemplateBrowserButton = ({meta, index})=>{
	return (<button 
			className= {`rc-browse-button`}
			onClick= {handleValueChanged}
			{...meta}
		>
		{meta?.caption || trueIndex}
	</button>);
}

// ========================================================================= //