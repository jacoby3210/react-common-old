
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
			<Common.Browser {...browserProps} />
			<Common.View  {...viewPropsForBrowser} />
			
			<Common.Scrollbar {...scrollbarProps} />
			<TestAreaForScroll />

			{/*
			<Common.Advisor {...advisorProps} />

			<Common.AccordionView {...accordionProps} />



			<Common.TabController {...tabControllerProps} />
			<Common.View  {...viewPropsForTabController} /> */}
		</>
	);
}

export default React.memo(Test);