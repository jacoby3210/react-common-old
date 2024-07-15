// Header file for export.

// basics
import { Indicator } from "./components/basics/indicator";			// - for output of values in the range from 0 to 100 % 
import { Path } from "./components/basics/path";								// - for displaying a path in a tree data structure
import { Popup } from "./components/basics/popup";							// - for render content on top of the main ui.

// controls
import { Dropdown } from "./components/controls/dropdown";			// - for render a drop-down menu (select).
import { Range } from "./components/controls/range";						// - to select a value from the suggested numeric range.
import { Scroll } from "./components/controls/scroll";					// - represents universal customizable content scroller.

// fields
import { Advisor } from "./components/fields/advisor";					// - rendering  basic text filed with input suggestions.

// accordion layout
import { AccordionSection } from "./layouts/accordion/section"; // - using by default to fill the accordion view.
import { AccordionView } from "./layouts/accordion/view";				// - used to organize content on layout.

// data view and special controllers for mage output data.
import { CarouselController } from "./layouts/data/carousel-controller";
import { PageController } from "./layouts/data/page-controller";
import { TabController } from "./layouts/data/tab-controller";
import { View } from "./layouts/data/view";

export default {
	Indicator, Path, Popup,
	Dropdown, Range, Scroll,
	Advisor,
	AccordionSection, AccordionView,
	CarouselController, PageController, TabController, View
};