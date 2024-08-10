import React, { useEffect, useRef, useState } from 'react';
import {Components, Data} from "/index.js"
import { defaultProps } from "./config"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart2 = receivedProps => {

	// hooks
	const [currentBrowseTab, setBrowseTab] = useState(0);
	const handleBrowseTab = (tabIndex) => { setBrowseTab(tabIndex * 10) }
	const [currentNavigatorSlide, setCurrentNavigatorSlide] = useState(0);
	const handleNavigatorSlide = (i) => {setCurrentNavigatorSlide(i);}
	const [currentPageState, setCurrentPageState] = useState(0);
	const handlePage = (i) => {setCurrentPageState(i * 10);}
	
	const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	 		<div style={{ height: "200px" }} />
		</div>;

	// render 
	return (
		<>
			<Data.Accordion {...defaultProps.accordion} />

			<Data.Browser {...defaultProps.browser} onStateUpdate={handleBrowseTab}/>
			<Components.View  {...defaultProps.viewForBrowser} from={currentBrowseTab}/>

			<Data.Navigator {...defaultProps.navigator} onStateUpdate={handleNavigatorSlide}/>
			<Components.View  {...defaultProps.viewForNavigator} from={currentNavigatorSlide}/>

			<Data.Paginator {...defaultProps.paginator} onStateUpdate={handlePage}/>
			<Components.View {...defaultProps.viewForPaginator} from={currentPageState}/>

			<Data.Scrollbar target={areaRef} />
			<TestAreaForScroll />
		</>
	);
};