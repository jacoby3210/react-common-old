export const horizontalProps = {}
export const verticalProps = {}
export const crossProps = {}

export const calcPosition = (e, boundary) => {
	const x = Math.min(Math.max(e.clientX - boundary.minX, 0), boundary.maxX);
	const y = Math.min(Math.max(e.clientY - boundary.minY, 0), boundary.maxY);
	return {x, y};
}