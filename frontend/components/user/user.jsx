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

	componentWillReceiveProps(nextProps) {
		this.setState({studySets: nextProps.studySets});
	}

	render() {

		const allStudySets = this.state.studySets.map((studySet, idx) => (
			<li key={`study-set-${idx}`}>
				<Link to={`/study-sets/${studySet.id}`} className="study-sets-list-item">
					<div className="study-set-subinfo">
						<h3>{studySet.card_count} terms</h3>
						<br/>
						<Link to={`/${this.props.currentUser.username}`}>
							<h4>
								<span className="fa fa-user" aria-hidden="true"></span>
								{this.props.currentUser.username}
							</h4>
						</Link>
					</div>
					<h2>{studySet.title}</h2>
				</Link>
			</li>
		));

		const username = () => {
			if (this.props.currentUser) {
				return (
					<h1>{this.props.currentUser.username}</h1>
				);
			}
		};

		return (
			<div className="user-homepage">
				<SidebarContainer />

				<div className="main-content">
					<div className="main-content-info">
						<span className="fa fa-user" aria-hidden="true"></span>
						<div className="main-content-header">
							<div className="main-content-subheader">
								<header>
									{username()}
								</header>
								<nav className="user-nav">
									<ul className="user-nav-links">
										<li>
											<Link to={`/${this.props.currentUser.username}`} >
												Created ({this.props.studySetsCount})
											</Link>
										</li>
										<li>
											<Link to={`/${this.props.currentUser.username}/folders`} >
												Folders ({this.props.foldersCount})
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
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