import { DEFAULT_CLASS } from "./config";

export const horizontalProps = {
	axis: "horizontal",
	cursor: "clientX",
	offset: "x",
	size: "width",
}

export const verticalProps = {
	axis: "vertical",
	componentSize: "offsetHeight",
	scrollOffset: "scrollTop",
	s:
		"top",
	scrollSize: "scrollHeight",
}

export const calcPosition = (el, props) => {
	return el[props.scrollOffset] / (el[props.scrollSize] - el[props.componentSize]);
}

export const ScrollButton = receivedProps => {
	return (
		<button
			className={`${DEFAULT_CLASS}-button-to-start`}
		>

		</button >
	);
}