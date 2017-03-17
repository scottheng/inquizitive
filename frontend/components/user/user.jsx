import React from 'react';
import { browserHistory, Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class User extends React.Component {

	// componentDidMount() {
	// 	this.redirectUnlessLoggedIn();
	// }

	// redirectUnlessLoggedIn() {
	// 	if (this.props.currentUser) {
	// 		browserHistory.push('/');
	// 	}
	// }

	render() {
		return (
			<div className="user-homepage">
				<SidebarContainer />

				<div className="main-content">
					<header>
						<h1>{this.props.currentUser.username}</h1>
					</header>
					<nav className="user-nav">
						<ul className="user-nav-links">
							<li>
								<Link to="fixthis" >
									Created
								</Link>
							</li>
							<li>
								<Link to="folders" >
									Folders
								</Link>
							</li>
						</ul>
					</nav>
					<div className="term-count">
						<h2>You have created this many sets</h2>
					</div>
					<div className="study-sets-list">
						<ul>
							<li>
								<Link to="study-set/show" className="study-sets-list-item">
									<h2>Study set title</h2>
									<h3>Number of terms</h3>
								</Link>
							</li>
							<li>
								<Link to="study-set/show" className="study-sets-list-item">
									<h2>Study set title</h2>
									<h3>Number of terms</h3>
								</Link>
							</li>
							<li>
								<Link to="study-set/show" className="study-sets-list-item">
									<h2>Study set title</h2>
									<h3>Number of terms</h3>
								</Link>
							</li>
						</ul>
					</div>

				</div>
			</div>
		);
	}
}

export default User;