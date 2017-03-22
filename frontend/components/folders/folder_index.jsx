import React from 'react';
import { hashHistory, Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class FolderIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {folders: this.props.folders};
	}

	componentDidMount() {
		this.props.fetchFolders(this.props.currentUser.id);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({folders: nextProps.folders});
	}

	render() {
		const allFolders = this.props.folders.map((folder, idx) => (
			<li key={`folder-${idx}`}>
				<Link to={`folders/${folder.id}`} className="folders-list-item">
					<h3>Number of terms(get number of cards for this study set)</h3>
					<h2>
						<i className="fa fa-folder" aria-hidden="true"></i>
						{folder.name}
					</h2>
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
			<div className="user-folders">
				<SidebarContainer />

				<div className="main-content">
					<div className="main-content-header">
						<div className="main-content-subheader">
							<h3>Picture could go here</h3>
						</div>
						<div className="main-content-subheader">
							<header>
								{username()}
							</header>
							<nav className="user-nav">
								<ul className="user-nav-links">
									<li>
										<Link to={`/${this.props.currentUser.username}`} >
											Created
										</Link>
									</li>
									<li>
										<Link to={`/${this.props.currentUser.username}/folders`} >
											Folders
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>

					<div className="folders-list">
						<ul>
							{allFolders}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default FolderIndex;