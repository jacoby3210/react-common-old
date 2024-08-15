
import React, { useState } from 'react';
import { ExamplePart1 } from './layouts/part-1';
import { ExamplePart2 } from './layouts/part-2';
import { ExamplePart3 } from './layouts/part-3';
import "./index.css"
// ========================================================================= //
// Showcase Application Page.																								 //
// It is used to demonstrate the operation of components / layers / pages 	 //
// of the application in artificial conditions.															 //
// ========================================================================= //

const ShowcasePage = receivedProps => {

	// render
	return (
		<>
			<ExamplePart1/>
			{/* <ExamplePart2/> */}
			{/* <ExamplePart3/> */}
		</>
	);
}

export default ShowcasePage;

// ========================================================================= //