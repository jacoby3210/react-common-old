import PropTypes from 'prop-types';
import {TemplateClickerChildDefault} from './helpers';
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = 'rc-clicker';
export const defaultProps = {
	id: null,
	className: DEFAULT_CLASS,
	cost: 1,																						// cost per click.
	score: 0,																						// total points scored.
	TemplateClickerChild: TemplateClickerChildDefault 	// template for control and display clicker.
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
	cost: PropTypes.number,
	score: PropTypes.number,
	TemplateClickerChild: PropTypes.func,
};

// ========================================================================= //