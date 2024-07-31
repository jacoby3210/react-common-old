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
	const x = areaRect.x - dragRect.x;
	const y = dragRect.y - areaRect.y;
	const clone = e.target.cloneNode(true);
	clone.style.position = 'absolute';
	clone.style.transform = `translate(${x}px, ${y}px)`;
	selfRef.current.appendChild(clone);
	return clone;
}

export const deleteDrag = ref => {
	ref.current.parentNode.removeChild(ref.current);
	return null;
}

export const dragDrop = (dragRef, dropRef) => {
	const props = {bubbles:true, cancelable: true, data:{dragRef, dropRef}};
	if(dropRef.current){
		const answer = dropRef.current.dispatchEvent(new Event("drop", props));
		if(answer) dragRef.current.dispatchEvent(new Event("dropSuccess", props));
		else dragRef.current.dispatchEvent(new Event("dropFailure", props))
		console.log(answer);
	}
	return null;
}

export const dropScan = (srcEvent, dragRef, targetRef, selfRef) => {
	dragRef.current.hidden = true;
	const target = document.elementFromPoint(srcEvent.clientX, srcEvent.clientY);
	if(targetRef.current != target){ 
		if(targetRef.current != null) {
			const mouseLeaveEvent = new MouseEvent("mouseout", {bubbles:true, cancelable: true});
			targetRef.current.dispatchEvent(mouseLeaveEvent);
		}
		targetRef.current = target;
		if(target != undefined) {
			const mouseOverEvent = new MouseEvent("mouseover", {bubbles:true, cancelable: true});
			target.dispatchEvent(mouseOverEvent);
		}
	}
	dragRef.current.hidden = false;
}