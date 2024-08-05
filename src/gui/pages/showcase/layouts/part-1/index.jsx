import Common from "/index.js"
import { defaultProps } from "./config";
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart1 = receivedProps => {

	return (
		<>
			{/* basics */}
			<Common.Indicator {...defaultProps.indicator}/>
			<Common.Path {...defaultProps.path}/>
			<Common.Popup {...defaultProps.popup}>
				<span>{"Its Alive!"}</span>
			</Common.Popup>
			{/* <Common.View {...defaultProps.view}/> */}
			
			{/* controls */}
			{/* <Common.Dropdown {...defaultProps.dropdown} /> */}
			{/* <Common.Range {... defaultProps.rangeHorizontal} /> */}
			{/* <Common.Range {... defaultProps.rangeVertical} /> */}
			{/* <Common.Slider {...defaultProps.slider} /> */}
		</>
	);
};

// ========================================================================= //