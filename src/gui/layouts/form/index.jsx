import React, { useEffect, useRef, useState } from "react";
import { mergeProps } from "react-aria";
import { DEFAULT_CLASS, defaultProps, propTypes } from "./config";
import {Field, relations as relationsDefault } from "./helpers"; 
// ========================================================================= //
// React Component
// ========================================================================= //

export const Form = receivedProps => {

  // initial data
  const {
    id,
    isEditable = true,
    relations,
    schema,
		value,
    ...attributes
  } = mergeProps(defaultProps, receivedProps);

  // hooks
  const self = useRef(), valueRef = useRef(value);
  useEffect(() => { }, [schema]);
	const [, forceUpdate] = React.useReducer(x => x + 1, 0);
	
	// input from user
  const handleChange = (label, value) => {
		valueRef.current[label] = value;
		forceUpdate() // need for property with number type.
  };

  // render
	const renderField = (obj, property) => {
    const {label, name, type, props} = property;

		if(type == 'object') {
			return <fieldset>
				<legend>{label}</legend>
				{props.schema.map((property) => renderField(obj[label], property))}
			</fieldset>
		}

		const fieldProps = {
			value: obj[label],
			whenUpdateValueState: (next, prev) => {handleChange(label, next); return next;},
			onChange: (evt) => {handleChange(label, evt.target.value)},
			disabled: !isEditable,
			...props,
		}

		return <Field key={name}> {relations[type](fieldProps)} </Field>;
	}

  return (
    <div id={id} ref={self} {...attributes}>
      {schema && schema.map((field) => renderField(valueRef.current, field))}
    </div>
  );
};

Form.propTypes = propTypes;

// ========================================================================= //