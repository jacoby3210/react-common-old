import PropTypes from "prop-types";
import { relations as relationsDefault } from "./helpers";
// ========================================================================= //
// Constants && Default Properties.
// ========================================================================= //

export const DEFAULT_CLASS = "rc-form";
export const defaultProps = {
  id: null,
  className: DEFAULT_CLASS,
  relations: relationsDefault,										// additional description data|field relations (may be override default relations).
	value: {},																			// use empty object as value by default.
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
  relations: PropTypes.object,
};

// ========================================================================= //
