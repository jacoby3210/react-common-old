import React, { useEffect, useRef, useState } from 'react';
import { mergeProps } from 'react-aria';
import { DEFAULT_CLASS, defaultProps, propTypes } from './config';
// ========================================================================= //
// React Component to track the user's clicks and display the total score.
// ========================================================================= //

export const Clicker = receivedProps => {

    // initial data
    const {
      id,
      children,
			cost,
			score,
			TemplateClickerChild,
      ...attributes
    } = mergeProps(defaultProps, receivedProps);

    // hooks
    const self = useRef();
    const [scoreState, setScoreState] = useState(score);
    useEffect(() => {setScoreState(score)}, [score, cost]);

    // input handling
    const apiClick = () => {setScoreState(prev => prev + cost); }

    // render 
		const childProps = {scoreState, apiClick}
    return (
      <div id={id} ref={self} {...attributes}>
				<TemplateClickerChild {...childProps}/>
        {children}
      </div>
    );
};

Clicker.propTypes = propTypes;

// ========================================================================= //