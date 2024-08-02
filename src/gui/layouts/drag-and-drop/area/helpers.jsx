export const horizontalProps = {}
export const verticalProps = {}
export const crossProps = {}

export const getTranslatePos = (e, axis, boundary) => {
	const {minX, minY, maxX, maxY} = boundary;
	const x = Math.min(Math.max(e.pageX - minX, 0), maxX);
	const y = Math.min(Math.max(e.pageY - minY, 0), maxY);
	return `translate(${x}px, ${y}px)`;
}

// operations with clone
export const cloneDrag = (e, areaRect, dragRect, selfRef) => {
	const x = areaRect.x - dragRect.x, y = dragRect.y - areaRect.y;
	const clone = e.target.cloneNode(true);
	clone.style.position = 'absolute';
	clone.style.transform = `translate(${x}px, ${y}px)`;
	selfRef.current.appendChild(clone);
	if(e.target.attributes['mode'].value == "self") e.target.hidden = true;
	return clone;
}

export const deleteDrag = ref => {
	ref.current.parentNode.removeChild(ref.current);
	return null;
}

export const dragDrop = (sourceRef, dropRef) => {
	const props = {bubbles:true, cancelable: true, detail:{sourceRef, dropRef}};
	sourceRef.current.dispatchEvent(new CustomEvent("dragend", props));
	sourceRef.current.hidden = false;
	if(!dropRef.current) return null;

	const isDrop = dropRef.current.className.split(' ')
		.some(function(c){ return /rc-drop-.*/.test(c)});
	if(!isDrop) return null;
	
	const answer = dropRef.current.dispatchEvent(new CustomEvent("drop", props));
	const event =	new CustomEvent((answer ? "dropSuccess" : "dropFailure"), props)
	sourceRef.current.dispatchEvent(event);
	if(sourceRef.current.attributes['mode'].value == "self") 
		sourceRef.current.remove();
	return null;
}

export const dropScan = (srcEvent, cursorRef, targetRef) => {
	cursorRef.current.hidden = true;
	const target = document.elementFromPoint(srcEvent.clientX, srcEvent.clientY),
		eventProps = {bubbles:true, cancelable: true, detail: cursorRef};
	cursorRef.current.hidden = false;

	if(targetRef.current == target){
		const dragOverEvent = new CustomEvent("dragover", eventProps);
		targetRef.current.dispatchEvent(dragOverEvent);
		return;
	}

	if(targetRef.current) {
		const dragLeaveEvent = new CustomEvent("dragleave", eventProps);
		targetRef.current.dispatchEvent(dragLeaveEvent);
	}
	targetRef.current = target;
	
	if(targetRef.current) {
		const dragEnterEvent = new CustomEvent("dragenter", eventProps);
		target.dispatchEvent(dragEnterEvent);
	}
}