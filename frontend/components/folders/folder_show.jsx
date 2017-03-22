import React from 'react';
import { hashHistory, Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import FolderFormContainer from '../folders/folder_form_container';
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';

class FolderShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalOpen: false};
		this.deleteFolder = this.deleteFolder.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
	}

	componentDidMount() {
		this.props.fetchFolder(parseInt(this.props.params.folderId));
	}

	componentWillReceiveProps(nextProps) {
		window.scrollTo(0, 0);
		if (this.props.params.folderId !== nextProps.params.folderId) {
			this.props.fetchFolder(parseInt(nextProps.params.folderId));
		}
		this.setState({modalOpen: false});
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({modalOpen: true});
	}

	onModalClose() {
		this.setState({modalOpen: false});
	}

	deleteFolder(e) {
		e.preventDefault();
		this.props.deleteFolder(this.props.params.folderId)
		.then(hashHistory.push(`${this.props.currentUser.username}/folders`));
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
					<div className="main-content-folder-header">
						<div className="main-content-subheader">
							<div className="folder-description">
								<h3>created by </h3>
								<h3>{this.props.currentUser.username}</h3>
							</div>
							<div className="folder-title">
								<h1>
									<i className="fa fa-folder" aria-hidden="true"></i>
									{this.props.folder.name}
								</h1>
							</div>
							<h2>{this.props.folder.description}</h2>
						</div>
						<div className="folder-nav">
							<ul className="folder-nav-links">
								<abbr title="Edit">
									<button onClick={this.handleClick}>
										<span className="fa fa-pencil"></span>
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
									<button onClick={this.deleteFolder}>
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
					<Modal
						isOpen={this.state.modalOpen}
						onRequestClose={this.onModalClose}
						style={ModalStyle}
						contentLabel="session-modal">
						<button onClick={this.onModalClose} id="close-modal-button">
							X
						</button>
						<FolderFormContainer formType='edit' />
					</Modal>
			</div>
		);
	}


}

export default FolderShow;