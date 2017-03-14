import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import Latest from './latest/latest';

const Root = ({ store }) => (
	<Provider store={ store }>
		<Router history={browserHistory}>
			<Route path="/" component={ App } >
				<IndexRoute component={ Home } />
				<Route path="latest" component={ Latest } />
			</Route>
		</Router>

	</Provider>
);

export default Root;