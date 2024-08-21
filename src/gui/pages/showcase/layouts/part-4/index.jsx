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
	const schemaEntry = (label, name, type, ...props) => 
		({label, name, type, ...props});
	
	const schema = [
		schemaEntry("checkboxField", "1", "checkbox"),
		schemaEntry("numberField", "2", "number"),
		schemaEntry("rangeField", "3", "range"),
		schemaEntry("sliderField", "4", "slider"),
	]

	const value = {
		checkboxField: true,
		numberField: 15,
		rangeField: 15,
		sliderField: 15,
		switcherField: 1,
	}
	const props = {schema, value}
	return (
		<Form {...props}/>
	);
};