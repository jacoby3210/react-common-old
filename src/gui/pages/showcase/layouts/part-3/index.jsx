import React, { useEffect, useRef, useState } from 'react';
import Common from "/index.js"
// import {defaultProps } from "./config"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart3 = receivedProps => {

	// input from user
	const dragProps2 = {
		axis:"x", mode: "clone", type: "special", 
		style: {transform: "translate(200px, 100px)"}
	}

	return (
		<Common.Area>
			<Common.Drag value={15}>{"Drag me"}</Common.Drag>
			<Common.Drag value={1}>{"Drag me"}</Common.Drag>
			<Common.Drag value={13}>{"Drag me"}</Common.Drag>
			<Common.Drag value={12}>{"Drag me"}</Common.Drag>
			<Common.Drag {...dragProps2}>{"Drag me"}</Common.Drag>
			{/* <Common.DropSlot/> */}
			{/* <Common.DropSlot types={["special"]}/> */}
			{/* <Common.DropStore /> */}
		</Common.Area>
	);
};