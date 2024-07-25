// Header file for export module.

// basics (only output)
import { Indicator } from "/src/gui/components/basics/indicator";			// - for output of values in the range from 0 to 100 % 
import { Path } from "/src/gui/components/basics/path";								// - for displaying a path in a tree data structure
import { Popup } from "/src/gui/components/basics/popup";							// - for render content on top of the main ui.
import { View } from "/src/gui/components/basics/view";								// - for render multiple repetitive data.

// controls (mouse interaction)
import { Dropdown } from "/src/gui/components/controls/dropdown";			// - for render a drop-down menu (select).
import { Range } from "/src/gui/components/controls/range";						// - to select a value from the suggested numeric range.
import { Slider } from "/src/gui/components/controls/slider";					// - represents universal customizable content scroller.

// fields (kb interaction)
// import { Advisor } from "/src/gui/components/fields/advisor";					// - rendering  basic text filed with input suggestions.

// accordion layout
// import { AccordionSection } from "/src/gui/layouts/accordion/section"; // - using by default to fill the accordion view.
// import { AccordionView } from "/src/gui/layouts/accordion/view";				// - used to organize content on layout.

// data view and special controllers for mage output data.
// import { CarouselController } from "/src/gui/layouts/data/carousel-controller";
// import { PageController } from "/src/gui/layouts/data/page-controller";
import { Scrollbar } from "./src/gui/layouts/view/scrollbar";
// import { TabController } from "/src/gui/layouts/data/tab-controller";

export default {
	Indicator, Path, Popup, View,
	Dropdown, Range, Slider, 
	Scrollbar,
	// Advisor,
	// AccordionSection, AccordionView,
	// CarouselController, PageController, TabController, View
};