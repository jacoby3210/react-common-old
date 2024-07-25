
import React, { useState } from 'react';
import Common from "/index.js"
import "./index.css"

const Test = receivedProps => {

	//  helpers
	const produceEntries = (count, func) => Array.from(new Array(count), func);

	// basics
	const indicatorProps = {
		colors: ["green", "orange", "red"],
		levels: [100, 60, 25],
		value: 50
	};
	const pathProps = { data: "/test/3", };
	const popupProps = { shown: true, };
	const viewProps = {
		from: 0,
		length: 10,
		src: produceEntries(10, (_, i) => { return { text: `string_${i}`}}),
	};

	// dropdown
	const dropdownProps = {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, value: i } }),
		value: 0
	}

	// range
	const rangeHorizontalProps = { axis: true, min: 0, max: 10, step: 0.0001, value: 5 };
	const rangeVerticalProps = { min: 0, max: 50, step: 0.1, value: 5 };

	// slider
	const sliderProps = { ...rangeVerticalProps, }

	// advisor
	const advisorProps = {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, value: i } }),
	}

	// accordion
	const accordionProps = {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
	}

	// navigator controller
	const [currentNavigatorSlide, setCurrentNavigatorSlide] = useState(0);
	const navigatorControllerProps = {
		infinity: true,
		onChangeCallback: (slideIndex) => { setCurrentNavigatorSlide(slideIndex); },
		count: 250,
	}
	const viewPropsForNavigatorController = {
		count: 250,
		from: currentNavigatorSlide,
		length: 1,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	}

	// page controller
	const [currentPage, setCurrentPage] = useState(0);
	const pageControllerProps = {
		onChangeCallback: (pageIndex) => { setCurrentPage(pageIndex * 10); },
		buttons: 5,
		count: 250 / 10,
		value: 0,
	}
	const viewPropsForPageController = {
		count: 250,
		from: currentPage,
		length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	}

	// scrollbar
	const area = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={area}>
			<div style={{ height: "200px" }} />
		</div>
	const scrollbarProps = { target: area,}

	// tab controller
	const [currentTab, setCurrentTab] = useState(0);
	const tabControllerProps = {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		onChangeCallback: (tabIndex) => { setCurrentTab(tabIndex) },
	}
	const viewPropsForTabController = {
		count: 250,
		from: currentTab,
		length: 1,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	}

	// render page
	return (
		<>
			{/* Part I */}
			<Common.Indicator {...indicatorProps} />
			<Common.Path {...pathProps} />
			<Common.Popup {...popupProps} />
			<Common.View  {...viewProps} />
		
			{/* Part II */}
			<Common.Dropdown {...dropdownProps} />
			<Common.Range {...rangeHorizontalProps} />
			<Common.Range {...rangeVerticalProps} />
			<Common.Slider {...sliderProps} />
			
			{/* Part III */}
			<Common.NavigatorController {...navigatorControllerProps} />
			<Common.View  {...viewPropsForNavigatorController} />
			
			<Common.Scrollbar {...scrollbarProps} />
			<TestAreaForScroll />
			
			{/*
			<Common.Advisor {...advisorProps} />

			<Common.AccordionView {...accordionProps} />


			<Common.PageController {...pageControllerProps} />
			<Common.View  {...viewPropsForPageController} />

			<Common.TabController {...tabControllerProps} />
			<Common.View  {...viewPropsForTabController} /> */}
		</>
	);
}

export default React.memo(Test);