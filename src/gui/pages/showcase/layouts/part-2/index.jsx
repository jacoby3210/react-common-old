import React, { useEffect, useRef, useState } from 'react';
import Common from "/index.js"
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
			<Common.Accordion {...defaultProps.accordion} />

			<Common.Browser {...defaultProps.browser} onStateUpdate={handleBrowseTab}/>
			<Common.View  {...defaultProps.viewForBrowser} from={currentBrowseTab}/>

			<Common.Navigator {...defaultProps.navigator} onStateUpdate={handleNavigatorSlide}/>
			<Common.View  {...defaultProps.viewForNavigator} from={currentNavigatorSlide}/>

			<Common.Paginator {...defaultProps.paginator} onStateUpdate={handlePage}/>
			<Common.View {...defaultProps.viewForPaginator} from={currentPageState}/>

			<Common.Scrollbar target={areaRef} />
			<TestAreaForScroll />
		</>
	);
};