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
	const schemaEntry = (label, name, type, props) => 
		({label, name, type, props});
	
	const src = [
		{caption: "Test 0", value: 0}, 
		{caption: "Test 1", value: 1}, 
		{caption: "Test 2", value: 2},
	]

	const schema = [
		schemaEntry("checkboxField", "1", "checkbox"),
		schemaEntry("numberField", "2", "number"),
		schemaEntry("rangeField", "3", "range"),
		schemaEntry("sliderField", "4", "slider"),
		
		schemaEntry("selectField", "5", "select", {src}),
		schemaEntry("switcherField", "6", "switcher", {src}),
		schemaEntry("textField", "7", "text"),
		// schemaEntry("groupField", "9", "group", [
		// 	schemaEntry("checkboxField", "1", "checkbox"),
		// 	schemaEntry("numberField", "2", "number"),
		// 	schemaEntry("rangeField", "3", "range"),
		// 	schemaEntry("sliderField", "4", "slider"),
			
		// 	schemaEntry("selectField", "5", "select", {src}),
		// 	schemaEntry("switcherField", "6", "switcher", {src}),
		// 	schemaEntry("textField", "7", "text"),
		// ]),
	]
	
	const valueBase = {
		checkboxField: true,
		numberField: 15,
		rangeField: 15,
		sliderField: 15,

		selectField: 1,
		switcherField: 1,
		textField: "test at one",

	}
	const value = {...valueBase, groupField: valueBase,};
	
	const formProps = {schema, value}
	
	return (<Form {...formProps}/>);
};