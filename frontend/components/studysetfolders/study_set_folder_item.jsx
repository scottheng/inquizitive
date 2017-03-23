import React from 'react';

class StudySetFolderItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	componentWillReceiveProps(nextProps) {
		this.refreshState(nextProps.receiver, nextProps.item);
	}

	initialState() {
		let ids;
		if (this.props.params.folderId) {
			ids = this.props.receiver.study_sets.map(studySet => studySet.id);
		}
		else {
			ids = this.props.receiver.folders.map(folder => folder.id);
		}
		return {addable: !ids.includes(this.props.item.id)};
	}

	refreshState(receiver, item) {
		let ids;
		if (this.props.params.folderId) {
			ids = receiver.study_sets.map(studySet => studySet.id);
		}
		else {
			ids = receiver.folders.map(folder => folder.id);
		}
		this.setState({addable: !ids.includes(item.id)});
	}

	addToFolder(e) {
		e.preventDefault();
		this.setState({addable: false});
		this.props.createStudySetFolder({folder_id: this.props.params.folderId, study_set_id: this.props.item.id});
	}

	deleteFromFolder(e) {
		e.preventDefault();
		this.setState({addable: true});
		this.props.removeStudySetFolder({folder_id: this.props.params.folderId, study_set_id: this.props.item.id});
	}

	render() {
		const addButton = () => {
			if (this.state.addable === true) {
				return (
					<button onClick={this.addToFolder.bind(this)}
							className="add-button">
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</button>
				);
			}
			else {
				return (
					<button onClick={this.deleteFromFolder.bind(this)}
							className="delete-button">
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
					</button>
				);
			}
		};
		return (
			<div>
				<h1>{this.props.item.title}</h1>
				{addButton()}
			</div>
		);
	}
}

export default StudySetFolderItem;