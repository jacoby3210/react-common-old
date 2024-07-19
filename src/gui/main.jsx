// Router to control navigation through the application pages.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test'

function Main() {

	return (
		<>
			<Router>
				<Routes>
					<Route element={<Test />} path="/" exact />
				</Routes>
			</Router>
		</>
	);
}

export default React.memo(Main);