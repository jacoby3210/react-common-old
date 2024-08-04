export const addCursor = (selfRef, e) => {
	const clone = e.detail.cursorRef.current.cloneNode(true);
	clone.style = {};
	clone.classList.add("rc-drop-cursor");
	selfRef.current.appendChild(clone);
	return clone;
}
export const deleteCursor = (cursorRef) => {
	cursorRef.current.remove();
	return null;
}
export const moveCursor = (selfRef, cursorRef, e) => {
	
}