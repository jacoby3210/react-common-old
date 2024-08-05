<<<<<<< HEAD
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"

export const createCursor = (RenderElement) => {
	return <RenderElement key={'cursor'} className={'rc-drop-cursor'}/>
}
export const valuesToComponents = (values, RenderElement) => {
	return values.map(
		(item) => 
			<RenderElement 
				className={`${DEFAULT_CLASS}-in`} 
				key={item} 
				value={item}
			/>	
	);
=======
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
	
>>>>>>> 3b586e789d37f637711e0d119aeba8c6feaf319a
}