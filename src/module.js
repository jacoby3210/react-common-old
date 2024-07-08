// Header file for export.


// React Component for displaying a path in a tree data structure
import { Path } from "./components/basics/path";

//
import { Popup } from "./components/basics/popup";

// 
import { Advisor } from "./components/controls/advisor";

// 
import { Dropdown } from "./components/controls/dropdown";

import { Scroll } from "./components/controls/scroll";
// data
import { CarouselController } from "./layouts/data/carousel-controller";
import { PageController } from "./layouts/data/page-controller";
import { TabController } from "./layouts/data/tab-controller";
import { View } from "./layouts/data/view";

export default {
	Path, Popup,
	Advisor, Dropdown, Scroll,
	CarouselController, PageController, TabController, View
};