import {CheckBox} 		from '../../components/mouse/checkbox';
import {Range} 				from '../../components/mouse/range';
import {Slider} 			from '../../components/mouse/slider';
import {Advisor} 			from '../../components/text/advisor'
import {Paragraph}	 	from '../../components/text/paragraph';
import {Select} 			from '../../components/text/select'
import {Switcher} 		from '../../components/text/switcher'
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const Field = receivedProps => {
	const { children, label} = receivedProps;
	return (
		<div className="rc-form-field">
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

export const line = ({key, value, onChange, ...props}) => (
	<Advisor name={key} value={value} {...props}/>
);

export const paragraph = ({key, value, onChange, ...props}) => (
	<Paragraph name={key} value={value} {...props}/>
);

export const select = ({key, value, onChange, ...props}) => (
	<Select name={key} value={value} {...props}/>
);

export const switcher = ({key, value, onChange, ...props}) => (
	<Switcher name={key} value={value} {...props}/>
);

// export api
export const relations = {
	
  /* bool & numbers fields */
	checkbox,
	number,
	range, 
	slider,
	
	// enums & text
	line,
	paragraph,
	select,
	switcher,

  // array: arrayField,
  // cloud: cloudField,
};

// ========================================================================= //