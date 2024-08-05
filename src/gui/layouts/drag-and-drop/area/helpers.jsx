export const horizontalProps = {}
export const verticalProps = {}
export const crossProps = {}

//
export const calcBoundary = (selfRef, dragRef, e) => {
	const	areaRect = selfRef.current.getBoundingClientRect();
	const dragRect = dragRef.current.getBoundingClientRect();
<<<<<<< HEAD
=======
	console.log(dragRef.current, dragRect)
>>>>>>> 3b586e789d37f637711e0d119aeba8c6feaf319a
	const boundary = {
		x1: areaRect.x + (e.pageX - dragRect.x), 
		y1: areaRect.y + (e.pageY - dragRect.y),
		x2: areaRect.width - dragRect.width,
		y2: areaRect.height - dragRect.height,
	}
<<<<<<< HEAD
=======
	console.log(boundary)
>>>>>>> 3b586e789d37f637711e0d119aeba8c6feaf319a
	return boundary
}

//
export const calcPosition = (e, axis, boundary) => {
	const {x1, y1, x2, y2} = boundary;
	const x = Math.min(Math.max(e.pageX - x1, 0), x2);
	const y = Math.min(Math.max(e.pageY - y1, 0), y2);
	return `translate(${x}px, ${y}px)`;
}

// operations with cursor
export const createCursor = (selfRef, dragRef, e) => {
	const	areaRect = selfRef.current.getBoundingClientRect();
	const dragRect = dragRef.current.getBoundingClientRect();
	const x = areaRect.x - dragRect.x, y = dragRect.y - areaRect.y;
	const clone = e.target.cloneNode(true);
	clone.style.position = 'absolute';
	clone.style.transform = `translate(${x}px, ${y}px)`;
	selfRef.current.appendChild(clone);
	if(e.target.attributes['mode'].value == "self") e.target.hidden = true;
	return clone;
}

export const deleteCursor = ref => {
	ref.current.parentNode.removeChild(ref.current);
	return null;
	}
	
//
export const move = (dragRef, dropRef) => {
	const props = {bubbles:true, cancelable: true, detail:{dragRef, dropRef}};
	dragRef.current.dispatchEvent(new CustomEvent("dragend", props));
	dragRef.current.hidden = false;
	if(!dropRef.current) return null;
	if(!dropRef.current.classList.contains("rc-drop")) return null;

	const answer = dropRef.current.dispatchEvent(new CustomEvent("drop", props));
	const event =	new CustomEvent((answer ? "dropSuccess" : "dropFailure"), props)
	dragRef.current.dispatchEvent(event);
	if(dragRef.current.attributes['mode'].value == "self") 
		dragRef.current.remove();
	return null;
}

export const scan = (cursorRef, dropRef, srcEvent) => {
	cursorRef.current.hidden = true;
	const target = document.elementFromPoint(srcEvent.clientX, srcEvent.clientY);
<<<<<<< HEAD
	if(!target) {cursorRef.current.hidden = false; return null;}
=======
>>>>>>> 3b586e789d37f637711e0d119aeba8c6feaf319a
	const drop = target.closest(".rc-drop");
	const props = {
		bubbles:true, 
		cancelable: true, 
		detail: {cursorRef, drop, target}
	};
	cursorRef.current.hidden = false;

	if(dropRef.current == drop && drop){
		const dragOverEvent = new CustomEvent("dragover", props);
		dropRef.current.dispatchEvent(dragOverEvent);
		return;
	}

	if(dropRef.current) {
		const dragLeaveEvent = new CustomEvent("dragleave", props);
		dropRef.current.dispatchEvent(dragLeaveEvent);
	}

	dropRef.current = drop;
		
	if(dropRef.current) {
		const dragEnterEvent = new CustomEvent("dragenter", props);
		dropRef.current.dispatchEvent(dragEnterEvent);
	}
}