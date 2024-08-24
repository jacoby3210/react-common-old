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
		schemaEntry("lineField", "7", "line"),
		schemaEntry("paragraphField", "8", "paragraph"),
		schemaEntry("objectField", "9", "object", {
			schema: [
				schemaEntry("checkboxField", "01", "checkbox"),
				schemaEntry("numberField", "02", "number"),
				schemaEntry("rangeField", "03", "range"),
				schemaEntry("sliderField", "04", "slider"),
				
				schemaEntry("selectField", "05", "select", {src}),
				schemaEntry("switcherField", "06", "switcher", {src}),
				schemaEntry("lineField", "7", "line"),
				schemaEntry("paragraphField", "8", "paragraph"),
			]
		}),
	]
	
	const valueBase = {
		checkboxField: true,
		numberField: 15,
		rangeField: 15,
		sliderField: 15,

		selectField: 1,
		switcherField: 1,
		lineField: "test at one",
		paragraphField: "test at one zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
	}
	const value = {...valueBase, objectField: valueBase,};
	const formProps = {schema, value}
	
	return (<Form {...formProps}/>);
};