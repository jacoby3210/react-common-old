// external module api.

// basics (only output)
import { Indicator } from "/src/gui/components/basics/indicator";				// - for output of values in the range from 0 to 100 % 
import { Path } from "/src/gui/components/basics/path";									// - for displaying a path in a tree data structure
import { Popup } from "/src/gui/components/basics/popup";				 				// - for render content on top of the main ui.
import { View } from "/src/gui/components/basics/view";					 				// - for render multiple repetitive data.

// controls (mouse interaction)
import { Dropdown } from "/src/gui/components/controls/dropdown";				// - for render a drop-down menu (select).
import { Range } from "/src/gui/components/controls/range";							// - to select a value from the suggested numeric range.
import { Slider } from "/src/gui/components/controls/slider";						// - represents universal customizable content scroller.

// fields (kb interaction)
// import { Advisor } from "/src/gui/components/fields/advisor";				// - rendering  basic text filed with input suggestions.

// drag and drop components
import { Area } from "./src/gui/layouts/drag-and-drop/area";						// - within which you can drag and drop components.
import { Drag } from "./src/gui/layouts/drag-and-drop/drag";						// - that can be dragged within an Area.
import { Drop } from "./src/gui/layouts/drag-and-drop/drop";						// - that can take over dragged components within an Area.
import { DropSlot } from "./src/gui/layouts/drag-and-drop/drop-slot";		// - that can take over dragged components within an Area.
import { DropSpace } from "./src/gui/layouts/drag-and-drop/drop-space"; // - that can take over dragged a few components within an Area.

// data view and special controllers for mage output data.
import { Accordion } from "/src/gui/layouts/view/accordion";						// - used to organize content on layout.
import { Browser } from "./src/gui/layouts/view/browser";								// - switching of displayed data in the viewing area.
import { Navigator } from "./src/gui/layouts/view/navigator";						// - switching of displayed slide in the viewing area by linear order.
import { Paginator } from "./src/gui/layouts/view/paginator";						// - switching of displayed page in the viewing area.
import { Scrollbar } from "./src/gui/layouts/view/scrollbar";						// - represents universal customizable content scrollbar.

export default {
	Indicator, Path, Popup, View,
	Dropdown, Range, Slider, 
	Area, Drag, Drop, DropSlot, DropSpace,
	Accordion, Browser, Navigator, Paginator, Scrollbar,
	// Advisor,
};