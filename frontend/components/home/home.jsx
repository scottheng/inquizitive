//need redirect if logged in to latest page
import React from 'react';
import { browserHistory } from 'react-router';

class Home extends React.Component {

	componentDidMount() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.currentUser) {
			browserHistory.push("/latest");
		}
	}

	render() {
		return(
			<div>
				<h1>This is the home page.</h1>
			</div>
		);
	}
}


export default Home;