import React from 'react';
import { hashHistory, Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class FolderShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchFolder(parseInt(this.props.params.folderId));
	}

	componentWillReceiveProps(nextProps) {

		window.scrollTo(0, 0);
		if (this.props.params.folderId !== nextProps.params.folderId) {
			this.props.fetchFolder(parseInt(nextProps.params.folderId));
		}
	}

	render() {
		const {folder} = this.props;
	
		const studySets = folder.study_sets.map((studySet, idx) => (
			<li key={`folder-study-set-${idx}`}>
				<Link to={`/study-sets/${studySet.id}`} className="study-sets-list-item">
					<h3>Number of terms(get number of cards for this study set)</h3>
					<h2>{studySet.title}</h2>
				</Link>
			</li>
		));

		return (
			<div className="folder-show">
				<SidebarContainer />

				<div className="main-content">
					<div className="main-content-header">
						<div className="main-content-subheader">
							<div className="folder-description">
								<h3>created by </h3>
								<h3>{this.props.currentUser.username}</h3>
							</div>
							<header>
								<h1>
									<i className="fa fa-folder" aria-hidden="true"></i>
									{this.props.folder.name}
								</h1>
							</header>
							<h2>{this.props.folder.description}</h2>
						</div>
						<div className="folder-nav">
							<ul className="folder-nav-links">
								<abbr title="Edit">
									<button>
										<Link to={`/study-sets/${this.props.params.studySetId}/edit`}>
											<span className="fa fa-pencil"></span>
										</Link>
									</button>
								</abbr>
								<abbr title="Add study set to folder">
									<button>
										<Link to={`/`}>
											<i className="fa fa-plus" aria-hidden="true"></i>
										</Link>
									</button>
								</abbr>
								<abbr title="Delete">
									<button >
										<Link to={`/`}>
											<span className="fa fa-trash"></span>
										</Link>
									</button>
								</abbr>
							</ul>
						</div>
					</div>
					<div className="study-sets-list">
						<ul>
							{studySets}
						</ul>
					</div>
				</div>
			</div>
		);
	}


}

export default FolderShow;