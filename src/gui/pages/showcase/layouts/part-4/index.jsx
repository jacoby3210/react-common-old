import React, { useEffect, useRef, useState } from 'react';
import { Form } from "/index.js"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart4 = receivedProps => {

	// input from user
	const dragProps2 = {
		axis:"x", mode: "clone", type: "special", 
		style: {transform: "translate(200px, 100px)"}
	}
	const schemaEntry = (label, name, type) => ({label, name, type});
	const schema = [
		schemaEntry("checkboxField", "1", "checkbox"),
		schemaEntry("numberField", "2", "number"),
	]

	const value = {
		checkboxField: true,
		numberField: 15,
	}
	const props = {schema, value}
	return (
		<Form {...props}/>
	);
};