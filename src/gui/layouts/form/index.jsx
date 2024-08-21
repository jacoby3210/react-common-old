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
    if (schema) {
      const initialData = schema.reduce((acc, field) => {
        acc[field.label] = field.defaultValue || "";
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [schema]);

	// input from user
  const handleChange = (label, value) => {
		console.log(value)
		setFormData( (prevData) => {
			// console.log(prevData, { ...prevData, [label]: value })
			return { ...prevData, [label]: value };
		});
  };

  // render
  const renderField = (field) => {
    const {label, name, type} = field;

		const fieldProps = {
			value: formData[label],
			onChange: (e) => handleChange(label, e.target.value),
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