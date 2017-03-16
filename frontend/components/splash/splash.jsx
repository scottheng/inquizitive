import React from 'react';
import { browserHistory } from 'react-router';
import HeaderContainer from '../header/header_container';
import SidebarContainer from '../sidebar/sidebar';

class Splash extends React.Component {
	
	componentDidMount() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.currentUser) {
			browserHistory.push('/study-sets');
		}
	}
}

export default Splash;