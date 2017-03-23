import React from 'react';
import StudySetFolderItem from './study_set_folder_item';
import { Link } from 'react-router';

class StudySetFolderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: this.props.studySetFolderItems};
	}

	componentDidMount() {
	
		this.props.fetchItems(this.props.currentUser.id);
		if (this.props.params.folderId) {
			this.props.fetchReceiver(this.props.params.folderId);
		}
		else {
			this.props.fetchReceiver(this.props.params.studySetId);
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({items: nextProps.studySetFolderItems});
	}

	allItems() {
			return (
				this.props.studySetFolderItems.map((item, idx) => (
					<li>
						<StudySetFolderItem item={item}
											fetchReceiver={this.props.fetchReceiver} 
											createStudySetFolder={this.props.createStudySetFolder} 
											removeStudySetFolder={this.props.removeStudySetFolder}
											params={this.props.params}
											receiver={this.props.receiver} />
					</li>
				))
			);
	}

	render() {

		const allItems = this.props.studySetFolderItems.map((item,idx) => (
			<li key={`study-set-folder-item-${idx}`}>
				<StudySetFolderItem item={item}
									fetchReceiver={this.props.fetchReceiver} 
									createStudySetFolder={this.props.createStudySetFolder} 
									removeStudySetFolder={this.props.removeStudySetFolder}
									params={this.props.params}
									receiver={this.props.receiver} />
			</li>
		));

		const headerTitle = () => {
			if (this.props.params.folderId) {
				return (
					<div>
						<h1>Add Study Sets to </h1>
						<h1>{this.props.receiver.name}</h1>
					</div>
				);
			}
			else {
				return (
					<div>
						<h1>Add {this.props.receiver.title} </h1>
						<h1>to Folders </h1>
					</div>
				);
			}
		};

		const doneButton = () => {
			if (this.props.params.folderId) {
				return (
					<Link to={`/folders/${this.props.receiver.id}`}
							className="redirect-back">
						Done
					</Link>
				);
			}
			else {
				return (
					<Link to={`/study-sets/${this.props.receiver.id}`}
							className="redirect-back">
						Done
					</Link>
				);
			}
		};

		return (
			<div className="study-set-folders-page">
				<div className="main-content">
					<div className="study-set-folder-header">
						{headerTitle()}
						<button className="redirect-back">
							{doneButton()}
						</button>
					</div>
					<div className="study-set-folders-list">
						<ul className="study-set-folders-items-list">
							{this.allItems()}

						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default StudySetFolderForm;