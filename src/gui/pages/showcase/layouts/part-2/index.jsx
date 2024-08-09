import React, { useEffect, useRef, useState } from 'react';
import {Components, View} from "/index.js"
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
			<View.Accordion {...defaultProps.accordion} />

			<View.Browser {...defaultProps.browser} onStateUpdate={handleBrowseTab}/>
			<Components.View  {...defaultProps.viewForBrowser} from={currentBrowseTab}/>

			<View.Navigator {...defaultProps.navigator} onStateUpdate={handleNavigatorSlide}/>
			<Components.View  {...defaultProps.viewForNavigator} from={currentNavigatorSlide}/>

			<View.Paginator {...defaultProps.paginator} onStateUpdate={handlePage}/>
			<Components.View {...defaultProps.viewForPaginator} from={currentPageState}/>

			<View.Scrollbar target={areaRef} />
			<TestAreaForScroll />
		</>
	);
};