// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const produceEntries = (count, func) => Array.from(new Array(count), func);

export const defaultProps = {
	// basics
	indicator : {
		colors: ["green", "orange", "red"],
		levels: [100, 60, 25],
		value: 50
	},
	path: { data: "/test/3", },
	popup: { shown: true, },
	view: {
		from: 0,
		length: 10,
		src: produceEntries(10, (_, i) => { return { text: `string_${i}`}}),
	},
	timer: {},

	// controls
	dropdown: {
		length: 5,
		src: produceEntries(5, (v, i) => { 
			return { 
				caption: `Option #${i}`, 
				value: i,
				onClick: (e) => {console.log(`Option #${i}`); return false;} 
			} 
		}),
		TemplateViewItem: receivedProps => 				
		{
			const {meta, ...attributes} = receivedProps;
			return (
				<button 
					className={`test-option`} 
					onClick={meta?.onClick} 
					{...attributes}
				>
					{meta.caption}
				</button>
			);
		},
	},
	rangeHorizontal: { axis: true, min: 0, max: 10, step: 0.0001, value: 5 },
	rangeVertical: { min: 0, max: 50, step: 0.1, value: 5 },
	slider: { min: 0, max: 50, step: 0.1, value: 5 },
	switch: {
		src: produceEntries(5, (v, i) => {
			return {label: `Option #${i}`, value: i}
		}),
	},

	// fields
	advisor: {
		src: produceEntries(5, (v, i) => {
			return {caption: `Option #${i}`, value: i}
		}),
	},
	select: {
		length: 5,
		src: produceEntries(5, (v, i) => { 
			return { 
				caption: `Option #${i}`, 
				value: i,
				onClick: (e) => {console.log(`Option #${i}`); return false;} 
			} 
		}),
		value: 0,
	},
};

// ========================================================================= //