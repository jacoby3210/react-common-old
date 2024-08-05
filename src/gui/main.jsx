// Router to control navigation through the application pages.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowcasePage from './pages/showcase'

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