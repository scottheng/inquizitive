import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import LatestContainer from './latest/latest_container';

const Root = ({ store }) => (
	<Provider store={ store }>
		<Router history={browserHistory}>
			<Route path="/" component={ App } >
				<IndexRoute component={ HomeContainer } />
				<Route path="latest" component={ LatestContainer } />
			</Route>
		</Router>

	</Provider>
);

export default Root;