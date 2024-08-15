// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// default template
export const TemplateClickerChildDefault = receivedProps => {

	const {
		apiClick,
		scoreState,
	} = receivedProps;

	// render 
	return (
		<>
      <button onClick={apiClick}>Click me</button>
      <p>You clicked {scoreState} times</p>
		</>
	)
}

// ========================================================================= //