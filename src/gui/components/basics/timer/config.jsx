import PropTypes from 'prop-types';
import { TemplateTimerChildDefault } from './helpers';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-timer';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	forward: true,																	// timer countdown direction: forward or backward.
	time: 1000,																			// initial time value.
	onTimerContinue: (e) => {},											// is called when a timer continue work.
	onTimerFinish: (e) => {},												// is called when a timer value expired.
	onTimerPause: (e) => {},												// is called when a timer pause work.
	onTimerStart: (e) => {},												// is called when a timer start work.
	TemplateTimerChild: TemplateTimerChildDefault 	// template for control and display timer.
};
	
// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	id: PropTypes.string,
	direct: PropTypes.bool,
	time: PropTypes.number,
	onTimerFinish: PropTypes.func,
	onTimerPause: PropTypes.func,
	onTimerStart: PropTypes.func,
	TemplateTimerChild: PropTypes.func,
};

// ========================================================================= //