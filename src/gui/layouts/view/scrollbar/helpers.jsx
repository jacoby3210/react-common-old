import { DEFAULT_CLASS } from "./config";
// ========================================================================= //
// Helper functions.																												 //
// ========================================================================= //

export const horizontalProps = {
	axis: "horizontal",
	cursor: "clientX",
	offset: "x",
	size: "width",
}

export const verticalProps = {
	axis: "vertical",
	componentSize: "offsetHeight",
	scrollDirect: "top",
	scrollOffset: "scrollTop",
	scrollSize: "scrollHeight",
}

export const valueToPosition = (area, props, value) => {
	return (area[props.scrollSize] - area[props.componentSize]) * value
}

export const valueFromPosition = (area, props)=>{
	return area[props.scrollOffset] / (area[props.scrollSize] - area[props.componentSize]);
}

// ========================================================================= //