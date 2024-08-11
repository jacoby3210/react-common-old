// Header file for export module.

// basics (only output)
import { Indicator } 	from "/src/gui/components/basics/indicator";			// - for output of values in the range from 0 to 100 % 
import { Path } 			from "/src/gui/components/basics/path";						// - for displaying a path in a tree data structure
import { Popup } 			from "/src/gui/components/basics/popup";					// - for render content on top of the main ui.
import { View } 			from "/src/gui/components/basics/view";						// - for render multiple repetitive data.

// controls (mouse interaction)
import { Dropdown } 	from "/src/gui/components/controls/dropdown";			// - for render a drop-down layout.
import { Range } 			from "/src/gui/components/controls/range";				// - to select a value from the suggested numeric range.
import { Slider } 		from "/src/gui/components/controls/slider";				// - represents universal customizable content scroller.

// control data in output view.
import { Accordion } 	from "/src/gui/layouts/data/accordion";						// - used to organize content on layout.
import { Browser } 		from "/src/gui/layouts/data/browser";							// - switching of displayed data in the viewing area.
import { Navigator } 	from "./src/gui/layouts/data/navigator";					// - switching of displayed slide in the viewing area by linear order.
import { Paginator } 	from "./src/gui/layouts/data/paginator";					// - switching of displayed page in the viewing area.
import { Scrollbar } 	from "/src/gui/layouts/data/scrollbar";						// - represents universal customizable content scrollbar.

// drag and drop components
import { Area } 			from "./src/gui/layouts/dnd/area";								// - within which you can drag and drop components.
import { Drag } 			from "./src/gui/layouts/dnd/drag";								// - that can be dragged within an Area.
import { Drop } 			from "./src/gui/layouts/dnd/drop";								// - that can take over dragged components within an Area.
import { Slot } 			from "./src/gui/layouts/dnd/slot";								// - drop which accepts only one drag element.
import { Store } 			from "./src/gui/layouts/dnd/store";								// - drop which accepts more than one drag element.

// external module api
export const Components = {
	Indicator, Path, Popup, View,
	Dropdown, Range, Slider,
};

export const Data = {Accordion, Browser, Navigator, Paginator, Scrollbar,}
export const DnD = 	{Area, Drag, Drop, Slot, Store,}

