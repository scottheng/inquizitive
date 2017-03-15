import React from 'react';
import { browserHistory } from 'react-router';

class Latest extends React.Component {

	componentDidMount() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (!this.props.currentUser) {
			browserHistory.push("/");
		}
	}

	render() {
		return(
			<div>
				<h1>This is the latest activity page.</h1>
			</div>
		);
	}
}


export default Latest;