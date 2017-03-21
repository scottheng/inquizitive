import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import HeaderContainer from '../header/header_container';

class Splash extends React.Component {

	// componentWillMount() {

	// 	if (!this.props.currentUser) {
	// 		hashHistory.push('/');
	// 	}
	// }

	// componentWillReceiveProps() {

	// 	this.redirectIfLoggedIn();
	// }

	// redirectIfLoggedIn() {

	// 	if (this.props.currentUser) {
	// 		this.props.router.push(`/${this.props.currentUser.username}`);
	// 	}
	// }

	render() {
		return (
			<div className="homepage">
				<div className="welcome">
					<h1>Simple tools for 
						learning anything.</h1>
					<h3>Search millions of study sets or create your own. 
						Improve your grades by studying with flashcards, games and more.</h3>
					<button>Get started</button>
					<img src="assets/splash-home.jpg" alt="Splash-Home"/>
	
				</div>
				<div className="study-set-preview-list">
					<h1>Study list goes here</h1>
				</div>
			</div>
		);
	}
}

export default withRouter(Splash);