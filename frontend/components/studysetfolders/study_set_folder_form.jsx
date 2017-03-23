import React from 'react';
import StudySetFolderItem from './study_set_folder_item';

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
		if (this.props.params.folderId) {
			return this.props.studySetFolderItems.map((item, idx) => (
				<li>
					<StudySetFolderItem item={item}
										fetchReceiver={this.props.fetchReceiver} 
										createStudySetFolder={this.props.createStudySetFolder} 
										removeStudySetFolder={this.props.removeStudySetFolder}
										params={this.props.params}
										receiver={this.props.receiver} />
			
					
				</li>
			));
		}
		else {
			return this.props.studySetFolderItems.map((item, idx) => (
				<li>
					<h1>{item.name}</h1>
				</li>
			));
		}
	}

	render() {

		return (
			<div className="study-set-folders-page">
				<div className="items-list">
					<ul>
						{this.allItems()}
					</ul>
				</div>
			</div>
		);
	}
}

export default StudySetFolderForm;