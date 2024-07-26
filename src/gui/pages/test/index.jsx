
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

	// data view and special controllers for mage output data.

	// accordion
	const accordionProps = {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
	}

	// browser controller
	const [currentBrowseTab, setBrowseTab] = useState(0);
	const browserProps = {
		length: 5,
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		onChangeCallback: (tabIndex) => { setBrowseTab(tabIndex * 10) },
	}
	const viewPropsForBrowser = {
		from: currentBrowseTab,
		length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	}

	// nav controller
	const [currentNavigatorSlide, setCurrentNavigatorSlide] = useState(0);
	const navigatorProps = {
		infinity: true,
		length: 250,
		onChangeCallback: (slideIndex) => { setCurrentNavigatorSlide(slideIndex); },
	}
	const viewPropsForNavigator = {
		from: currentNavigatorSlide,
		length: 1,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	}

	// paginator controller
	const [currentPageState, setCurrentPageState] = useState(0);
	const paginatorProps = {
		lengthBrowser: 5,
		lengthNavigator: 25,
		src: produceEntries(25, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		value: 0,
		onChangeCallback: (pageIndex) => { setCurrentPageState(pageIndex * 10); },
	}
	const viewPropsForPaginator = {
		from: currentPageState,
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
			<Common.Accordion {...accordionProps} />

			<Common.Browser {...browserProps} />
			<Common.View  {...viewPropsForBrowser} />
			
			<Common.Navigator {...navigatorProps} />
			<Common.View  {...viewPropsForNavigator} />

			<Common.Paginator {...paginatorProps} />
			<Common.View  {...viewPropsForPaginator} />

			<Common.Scrollbar {...scrollbarProps} />
			<TestAreaForScroll />

			{/*
				<Common.Advisor {...advisorProps} />
			*/}

		</>
	);
}

export default React.memo(Test);