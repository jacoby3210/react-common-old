import {Components} from "/index.js"
import {defaultProps} from "./config";
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart1 = receivedProps => {

	return (
		<>
			{/* basics */}
			<Components.Indicator {...defaultProps.indicator}/>
			<Components.Path {...defaultProps.path}/>
			<Components.Popup {...defaultProps.popup}>
				<span>{"Its Alive!"}</span>
			</Components.Popup>
			<Components.Timer {...defaultProps.timer}/>
			<Components.View {...defaultProps.view}/>
			
			{/* composition */}
			<Components.Dropdown>
				<Components.View {...defaultProps.dropdown}/>
			</Components.Dropdown>

			{/* controls */}
			<Components.CheckBox/>
			<Components.Clicker />
			<Components.RadioBar {...defaultProps.radioBar}/>
			<Components.Range {... defaultProps.rangeHorizontal} />
			<Components.Range {... defaultProps.rangeVertical} />
			<Components.Slider {...defaultProps.slider} />

			{/* fields */}
			<Components.Advisor {...defaultProps.advisor}/>
			<Components.Cloud {...defaultProps.cloud}/>
			<Components.Select {...defaultProps.select}/>
			<Components.Switcher {...defaultProps.select}/>
		</>
	);
};

// ========================================================================= //