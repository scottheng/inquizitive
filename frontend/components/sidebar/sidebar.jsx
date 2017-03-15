//need redirect if logged in to latest page
import React from 'react';
import { browserHistory } from 'react-router';

class Sidebar extends React.Component {

	// componentDidMount() {
	// 	this.redirectIfLoggedIn();
	// }

	// redirectIfLoggedIn() {
	// 	if (this.props.currentUser) {
	// 		browserHistory.push("/latest");
	// 	}
	// }

	renderSidebar() {
		if (this.props.currentUser) {
			return(
				<aside className="sidebar">
					<h1>This is the sidebar.</h1>
				</aside>
			);
		}
		else {
			return null;
		}
	}

	render() {
		return (
			this.renderSidebar()
		);
	}
}


export default Sidebar;