import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './index.css';
import App from './App';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={hashHistory} >
		<Route component={App}>
			<Route path="/" component={ListPage} />
			<Route path="/create" component={CreatePage} />
		</Route>
	</Router>
	, document.getElementById('root')
);
registerServiceWorker();
