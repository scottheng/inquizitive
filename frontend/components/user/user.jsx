import React from 'react';
import { hashHistory, Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {studySets: this.props.studySets};
	}

	componentDidMount() {
		if (this.props.studySets) {
			this.props.fetchStudySets(this.props.currentUser.id);
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({studySets: newProps.studySets});
	}

	render() {

		const allStudySets = this.state.studySets.map((studySet, idx) => (
			<li key={`study-set-${idx}`}>
				<Link to={`/study-sets/${studySet.id}`} className="study-sets-list-item">
					<h2>{studySet.title}</h2>
					<h3>Number of terms(get number of cards for this study set)</h3>
				</Link>
			</li>
		));

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
							{allStudySets}
						</ul>
					</div>

				</div>
			</div>
		);
	}
}

export default User;