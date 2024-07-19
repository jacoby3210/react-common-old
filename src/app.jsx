import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { store } from '/src/code/store/store';
import Main from './gui/main.jsx'

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<Provider store={store}>
				<Main />
			</Provider>
		</React.StrictMode>,
	)