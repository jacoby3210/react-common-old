import {Components} from "/index.js"
import { defaultProps } from "./config";
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
			<Components.View {...defaultProps.view}/>
			
			{/* controls */}
			<Components.Dropdown {...defaultProps.dropdown} />
			<Components.Range {... defaultProps.rangeHorizontal} />
			<Components.Range {... defaultProps.rangeVertical} />
			<Components.Slider {...defaultProps.slider} />
		</>
	);
};

// ========================================================================= //