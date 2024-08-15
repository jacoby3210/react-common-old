// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

// default template
export const TemplateTimerChildDefault = receivedProps => {

	const {
		isRunningState,
		timeState,
		apiTimerStart,
		apiTimerPause,
		apiTimerReset,
		apiTimerToggle,
	} = receivedProps;

	// render 
	return (
		<>
			<h1>{timeState} сек.</h1>
			<button onClick={apiTimerToggle}>
				{isRunningState ? 'Пауза' : 'Продолжить'}
			</button>
			<button onClick={apiTimerReset}>Сбросить</button>
		</>
	)
}

// ========================================================================= //