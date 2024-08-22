// Header file for export module.

// basics (only output)
import { Indicator } 	from "./src/gui/components/basics/indicator";						// - for output of values in the range from 0 to 100 % 
import { Path } 			from "./src/gui/components/basics/path";								// - for displaying a path in a tree data structure
import { Popup } 			from "./src/gui/components/basics/popup";								// - for render content on top of the main ui.
import { Timer } 			from "./src/gui/components/basics/timer";								// - to show the timer operation.
import { View } 			from "./src/gui/components/basics/view";								// - for render multiple repetitive data.

//
import { Accordion } 	from "./src/gui/components/composition/accordion";			// - represents list of headers and their associated ui blocks.
import { Dropdown } 	from "./src/gui/components/composition/dropdown";				// - for render a drop-down layout.

// mouse
import { CheckBox } 	from "./src/gui/components/mouse/checkbox";							// - wrapping around the classic checkbox for simplicity.
import { Clicker } 		from "./src/gui/components/mouse/clicker";							// - to track the user's clicks and display the total score.
import { RadioBar } 	from "./src/gui/components/mouse/radiobar";							// - to output multiple radio buttons as a single component.
import { Range } 			from "./src/gui/components/mouse/range";								// - to select a value from the suggested numeric range.
import { Slider } 		from "./src/gui/components/mouse/slider";								// - represents universal customizable content scroller.

// text
import {Advisor} 			from './src/gui/components/text/advisor'								// - to show basic text field with autocomplete suggestions.
import {Cloud} 				from "./src/gui/components/text/cloud";									// - for displaying the add/remove tags interface.
import {Select} 			from './src/gui/components/text/select'									// - for selection one option from the source list.
import {Switcher} 		from "./src/gui/components/text/switcher";							// - for selection one option from the source list (alt mode).

// control data in output view.
import { Browser } 		from "./src/gui/layouts/data/browser";									// - switching of displayed data in the viewing area.
import { Navigator } 	from "./src/gui/layouts/data/navigator";								// - switching of displayed slide in the viewing area by linear order.
import { Paginator } 	from "./src/gui/layouts/data/paginator";								// - switching of displayed page in the viewing area.
import { Scrollbar } 	from "./src/gui/layouts/data/scrollbar";								// - represents universal customizable content scrollbar.

// drag and drop components
import { Area } 			from "./src/gui/layouts/dnd/area";											// - within which you can drag and drop components.
import { Drag } 			from "./src/gui/layouts/dnd/drag";											// - that can be dragged within an Area.
import { Drop } 			from "./src/gui/layouts/dnd/drop";											// - that can take over dragged components within an Area.
import { Slot } 			from "./src/gui/layouts/dnd/slot";											// - drop which accepts only one drag element.
import { Store } 			from "./src/gui/layouts/dnd/store";											// - drop which accepts more than one drag element.

// external module api
export const Components = {
	Indicator, Path, Popup, Timer, View,
	Accordion, Dropdown, 
	CheckBox, Clicker, RadioBar, Range, Slider,
	Advisor, Cloud, Select, Switcher
};

export const Data = {Browser, Navigator, Paginator, Scrollbar,}
export const DnD = 	{Area, Drag, Drop, Slot, Store,}
export {Form} from "./src/gui/layouts/form";

// ========================================================================= //