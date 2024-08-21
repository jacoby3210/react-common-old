// formFields.js

export const Field = receivedProps => {
	const { children, label} = receivedProps;
	return (
		<div  className="rc-form-field">
    	<label>{label}</label>
			{children}
		</div>
	);
}

export const checkbox = ({key, value, ...props}) => (
	<input name={key} type="checkbox" defaultChecked={value} value={value} {...props}/>
);

export const number = ({key, value, ...props}) => (
	<input name={key} type="number" value={value} {...props}/>
);

// export api
export const relations = {
  /* mouse fields */
	checkbox,
	// range, 
	// slider,
	// switcher,

	// kb fields
	number,
  /* complex data*/
  // array: arrayField,
  // object: objectField,
};