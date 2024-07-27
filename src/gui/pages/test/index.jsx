
import React, { useState } from 'react';
import Common from "/index.js"
import "./index.css"

const Test = receivedProps => {

	//  helpers
	const produceEntries = (count, func) => Array.from(new Array(count), func);

	// basics
	const TestIndicator = () => {
		const indicatorProps = {
			colors: ["green", "orange", "red"],
			levels: [100, 60, 25],
			value: 50
		};
		return (<Common.Indicator {...indicatorProps}/>);
	}
	const TestPath = () => {
		const pathProps = { data: "/test/3", };
		return <Common.Path {...pathProps}/>;
	}
	const TestPopup = () => {
		const popupProps = { shown: true, };
		return (<Common.Popup {...popupProps}/>);
	}
	const TestView = () => {
		const viewProps = {
			from: 0,
			length: 10,
			src: produceEntries(10, (_, i) => { return { text: `string_${i}`}}),
		};
		return (<Common.View {...viewProps}/>);
	}

	// dropdown
	const TestDropdown = () => {
		const dropdownProps = {
			src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, value: i } }),
			value: 0
		}
		return (<Common.Dropdown {...dropdownProps} />);
	}

	// range
	const rangeHorizontalProps = { axis: true, min: 0, max: 10, step: 0.0001, value: 5 };
	const rangeVerticalProps = { min: 0, max: 50, step: 0.1, value: 5 };
	const TestRangeHorizontal = receivedProps => <Common.Range {... rangeHorizontalProps} />;
	const TestRangeVertical = receivedProps => <Common.Range {... rangeVerticalProps} />;

	// slider
	const TestSlider = () => {
		const sliderProps = { ...rangeVerticalProps, }
		return (<Common.Slider {...sliderProps} />);
	}

	// advisor
	const advisorProps = {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, value: i } }),
	}

	// data view and special controllers for mage output data.

	// accordion
	const TestAccordion = ()=>{
		const accordionProps = {
			src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
		}
		return (<Common.Accordion {...accordionProps} />)
	}

	// browser 
	const TestBrowser = () => {
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
		return (
			<>
				<Common.Browser {...browserProps} />
				<Common.View  {...viewPropsForBrowser} />
			</>
		)
	}

	// navigator
	const TestNavigator = () => {
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

		return (
			<>
				<Common.Navigator {...navigatorProps} />
				<Common.View  {...viewPropsForNavigator} />
			</>
		);
	}

	// Paginator
	const TestPaginator = () => {
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

		return (
			<>
				<Common.Paginator {...paginatorProps} />
				<Common.View  {...viewPropsForPaginator} />
			</>
		);
	}

	// Scrollbar
	const TestScrollbar = () => {

		const area = React.useRef(null)
		const TestAreaForScroll = () =>
			<div style={{ height: "100px", "overflowY": "scroll" }} ref={area}>
				<div style={{ height: "200px" }} />
			</div>
		const scrollbarProps = { target: area,}

		return (
			<>
				<Common.Scrollbar {...scrollbarProps} />
				<TestAreaForScroll />
			</>
		)
	}
	
	// render page
	return (
		<>
			{/* Part I */}
			<TestIndicator />
			<TestPath />
			<TestPopup />
			<TestView />
		
			{/* Part II */}
			<TestDropdown/>
			<TestRangeHorizontal />
			<TestRangeVertical />
			<TestSlider/>
			
			{/* Part III */}
			<TestAccordion/>
			<TestBrowser/>
			<TestNavigator/>
			<TestPaginator/>
			<TestScrollbar/>

		</>
	);
}

export default React.memo(Test);