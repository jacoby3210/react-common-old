import React, { useEffect, useRef, useState } from 'react';
import {DnD} from "/index.js"
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
		<DnD.Area>
			<DnD.Drag value={15}>{"Drag me"}</DnD.Drag>
			<DnD.Drag value={1}>{"Drag me"}</DnD.Drag>
			<DnD.Drag value={13}>{"Drag me"}</DnD.Drag>
			<DnD.Drag value={12}>{"Drag me"}</DnD.Drag>
			<DnD.Drag {...dragProps2}>{"Drag me"}</DnD.Drag>
			<DnD.Slot/>
			<DnD.Slot types={["special"]}/>
			<DnD.Store />
		</DnD.Area>
	);
};