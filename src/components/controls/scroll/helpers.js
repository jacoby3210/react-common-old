export const positionToValue = (target, position) => {
	if(!target) return 0;
	return position / (target.current.scrollHeight - target.current.offsetHeight);
}

export const valueToPosition = (target, value) => {
	if(!target) return 0;
	return (target.current.scrollHeight - target.current.offsetHeight) * value;
}

export const verticalProps = {
	
}