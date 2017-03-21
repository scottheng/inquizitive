import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import UserContainer from './user/user_container';
import HeaderContainer from './header/header';
import StudySetShowContainer from './studysets/study_set_show_container';
import StudySetFormContainer from './studysets/study_set_form_container';


const Root = ({ store }) => {

	const _ensureLoggedIn = (nextState, replace) => {
    	const currentUser = store.getState().session.currentUser;
    	if (!currentUser) {
      	replace('/');
    	}
  	};

  	const _redirectIfLoggedIn = (nextState, replace) => {
 		const currentUser = store.getState().session.currentUser;
    	if (currentUser) {
      	replace(`/${currentUser.username}`);
    	}
  	};

	return (
		<Provider store={ store }>
			<Router history={hashHistory}>
				<Route path="/" component={ App }  >
					<IndexRoute component={ SplashContainer}  onEnter={_redirectIfLoggedIn}/>
					<Route path='/:username' component={ UserContainer } onEnter={_ensureLoggedIn}  />
					<Route path='/study-sets/:studySetId' component={ StudySetShowContainer } onEnter={_ensureLoggedIn} />
					<Route path='/:username/study-sets/new' component={ StudySetFormContainer } onEnter={_ensureLoggedIn} />
					<Route path='/study-sets/:studySetId/edit' component={ StudySetFormContainer } onEnter={_ensureLoggedIn} />
				</Route>
			</Router>

		</Provider>
	);
};

export default Root;