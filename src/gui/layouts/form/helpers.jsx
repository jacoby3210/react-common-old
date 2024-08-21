import { CheckBox } from '../../components/mouse/checkbox';
import { Range } from '../../components/mouse/range';
import { Slider } from '../../components/mouse/slider';
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const Field = receivedProps => {
	const { children, label} = receivedProps;
	return (
		<div  className="rc-form-field">
    	<label>{label}</label>
			{children}
		</div>
	);
}

export const checkbox = ({key, value, onChange, ...props}) => (
	<CheckBox name={key} value={value} {...props}/>
);

export const number = ({key, value, whenUpdateValueState, ...props}) => (
	<input name={key} type="number" value={value} {...props}/>
);

export const range = ({key, value, onChange, ...props}) => (
	<Range name={key} value={value} {...props}/>
);

export const slider = ({key, value, onChange, ...props}) => (
	<Slider name={key} value={value} {...props}/>
);

// export api
export const relations = {
  /* mouse fields */
	checkbox,
	range, 
	slider,
	// switcher,

	// kb fields
	number,
  /* complex data*/
  // array: arrayField,
  // object: objectField,
};

// ========================================================================= //