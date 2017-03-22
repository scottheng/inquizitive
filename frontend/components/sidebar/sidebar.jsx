import React from 'react';
import { hashHistory, Link } from 'react-router';
import FolderFormContainer from '../folders/folder_form_container';
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalOpen: false, folders: this.props.folders};
		this.handleClick = this.handleClick.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
	}

	componentDidMount() {
		if (this.props.folders) {
			this.props.fetchFolders(this.props.currentUser.id);
		}
	}

	componentWillReceiveProps(nextProps) {

		this.setState({modalOpen: false});
		this.setState({folders: nextProps.folders});
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({modalOpen: true});
	}

	onModalClose() {
		this.setState({modalOpen: false});
	}

	renderUserFolders() {
		return this.props.folders.map((folder,idx) => (
			<li key={`folder-${idx}`}>
				<div className="link" >
					<Link to={`folders/${folder.id}`}>
						<i className="fa fa-folder" aria-hidden="true"></i>
						{folder.name}
					</Link>
				</div>
			</li>
		));
	}

	renderSidebar() {
		if (this.props.currentUser) {
			return(
				<aside className="sidebar">
					<ul className="top-sidebar">
						<li>
							<div className="link" >
								<Link to={`/${this.props.currentUser.username}`} >
									<i className="fa fa-square"></i>
									Your Study Sets
								</Link>
							</div>
						</li>
						<li>
							<div className="link" >
								<Link to="/settings" >
									<i className="fa fa-cog" ></i>
									Settings 
								</Link>
							</div>
						</li>
					</ul>
					<ul className="folders-sidebar">
						<li>
							<div className="sidebar-header" >
								<Link to={`/${this.props.currentUser.username}/folders`}>
									YOUR FOLDERS
								</Link>
							</div>
						</li>
						{this.renderUserFolders()}
						<li>
							<div className="link" id="modal-link">
								<button id="new-folder-button"
										onClick={this.handleClick}>
									Create a folder
								</button>
							</div>
						</li>
					</ul>

					<Modal
						isOpen={this.state.modalOpen}
						onRequestClose={this.onModalClose}
						style={ModalStyle}
						contentLabel="session-modal">
						<button onClick={this.onModalClose} id="close-modal-button">
							X
						</button>
						<FolderFormContainer formType='new' />
					</Modal>

					
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