import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ========================================================================= //
// React Component to show the timer operation.
// ========================================================================= //

export const Timer = receivedProps => {

	// initial data
	const {
		id,
		forward,
		time,
		onTimerContinue,
		onTimerFinish,
		onTimerPause,
		onTimerStart,
		TemplateTimerChild,
		...attributes
	} = mergeProps(defaultProps, receivedProps);

	// hooks
	const timeoutRef = useRef(null);
	const [timeState, setTimeState] = useState(time);
	const [isRunningState, setIsRunningState] = useState(true);
	useEffect(() => {
		if (!isRunningState) return;

		timeoutRef.current = setInterval(() => {
			setTimeState(prevTime => {
				const newTime = forward ? prevTime - 1 : prevTime + 1;
				if (newTime <= 0 && forward) {
					clearInterval(timeoutRef.current);
					setIsRunningState(false);
					if (onTimerFinish) onTimerFinish();
				}
				return newTime;
			});
		}, 1000);
		return () => clearInterval(timeoutRef.current);
	}, [isRunningState, forward, onTimerFinish]);

	// inputs
	const apiTimerStart = () => {
		setTimeState(initialTime);
		setIsRunningState(true); 
		if (onTimerStart) onTimerStart();
	}

	const apiTimerContinue = () => {
		setIsRunningState(false);
		if (onTimerContinue) onTimerContinue();
	}
	
	const apiTimerPause = () => {
		setIsRunningState(false);
		if (onTimerPause) onTimerPause();
	}

	const apiTimerReset = () => {
		setIsRunningState(false); 
		setTimeState(time);
	};
	
	const apiTimerToggle = () => {
		setIsRunningState(prevState => {
			if (prevState && onTimerPause) onTimerPause();
			return !prevState;
		});
	};

	// render
	const childProps = {
		isRunningState,
		timeState,
		apiTimerStart,
		apiTimerContinue,
		apiTimerPause,
		apiTimerReset,
		apiTimerToggle,
	}

	return (
		<div id={id} {...attributes}>
			<TemplateTimerChild {...childProps}/>
		</div>
	);
};

Timer.propTypes = propTypes;

// ========================================================================= //