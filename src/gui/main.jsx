import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowcasePage from './pages/showcase'
// ========================================================================= //
// Main Application Page.																										 //
// Using router to control navigation through application pages.						 //
// ========================================================================= //

function Main() {

	return (
		<>
			<Router>
				<Routes>
					<Route element={<ShowcasePage />} path="/" exact />
				</Routes>
			</Router>
		</>
	);
}

export default React.memo(Main);