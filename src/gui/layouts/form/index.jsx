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
  const self = useRef();
  const [formData, setFormData] = useState(value);
  useEffect(() => {
  }, [schema]);

	// input from user
  const handleChange = (label, value) => {
		setFormData( (prevData) => {
			return { ...prevData, [label]: value };
		});
  };

  // render
  const renderField = (field) => {
    const {label, name, type} = field;

		const fieldProps = {
			value: formData[label],
			whenUpdateValueState: (next, prev) => {handleChange(label, next); return next;},
			onChange: (evt) => {handleChange(label, evt.target.value)},
			disabled: !isEditable,
		}
    return <Field key={name} {...field}>
	    {relations[type](fieldProps)}
		</Field>;
  };

  return (
    <div id={id} ref={self} {...attributes}>
      {schema && schema.map((field) => renderField(field))}
    </div>
  );
};

Form.propTypes = propTypes;

// ========================================================================= //