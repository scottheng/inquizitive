import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import HeaderContainer from '../header/header_container';

class Splash extends React.Component {

	componentWillReceiveProps() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.currentUser) {
			this.props.router.push(`/${this.props.currentUser.username}`);
		}
	}

	render() {
		return (
			<div className="homepage">
				<h1>This is the homepage.</h1>
			</div>
		);
	}
}

export default withRouter(Splash);