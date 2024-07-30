export const horizontalProps = {}
export const verticalProps = {}
export const crossProps = {}

export const calcPosition = (e, boundary, axis, defaultPosition) => {
	const {minX, minY, maxX, maxY} = boundary;
	const x = axis.includes('x') 
		? Math.min(Math.max(e.clientX - minX, 0), maxX)
		: defaultPosition.x;
	const y = axis.includes('y') 
		? Math.min(Math.max(e.clientY - minY, 0), maxY)
		: defaultPosition.y;
	return {x, y};
}

// operations with clone
export const cloneDrag = (e, position) => {
	const clone = e.currentTarget.cloneNode(true);
		clone.style.position = 'absolute';
		clone.style.pointerEvents = 'none';
		clone.style.transform = `translate(${position.left}px, ${position.top}px)`;
		e.currentTarget.parentNode.appendChild(clone);
	return clone;
}

export const deleteDrag = ref => {
	ref.current.parentNode.removeChild(ref.current);
	return null;
}

export const dropScan = (srcEvent, self, oldTarget) => {
	self.current.hidden = true;
	let target = document.elementFromPoint(srcEvent.clientX, srcEvent.clientY);
	if(oldTarget != target && oldTarget != undefined) {
		let mouseLeaveEvent = new MouseEvent("mouseout", {bubbles:true, cancelable: true});
		oldTarget.dispatchEvent(mouseLeaveEvent);
	}
	let mouseOverEvent = new MouseEvent("mouseover", {bubbles:true, cancelable: true});
	target.dispatchEvent(mouseOverEvent);
	self.current.hidden = false;
	return target;
}