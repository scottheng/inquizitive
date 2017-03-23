import React from 'react';
import StudySetFolderItem from './study_set_folder_item';

class StudySetFolderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: this.props.studySetFolderItems};
	}

	componentDidMount() {
		this.props.fetchItems(this.props.currentUser.id);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({items: nextProps.studySetFolderItems});
	}

	allItems() {
		if (this.props.params.folderId) {
			return this.props.studySetFolderItems.map((item, idx) => (
				<li>
					<StudySetFolderItem item={item} 
										createStudySetFolder={this.props.createStudySetFolder} 
										removeStudySetFolder={this.props.removeStudySetFolder}
										params={this.props.params} />
			
					
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