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

	handleAdd(e) {
		e.preventDefault();
		this.setState({addable: false});

		if (this.props.params.folderId) {
			this.props.createStudySetFolder({folder_id: this.props.params.folderId, study_set_id: this.props.item.id});
		}
		else {
			this.props.createStudySetFolder({folder_id: this.props.item.id, study_set_id: this.props.params.studySetId});
		}
	}

	handleRemove(e) {
		e.preventDefault();
		this.setState({addable: true});

		if (this.props.params.folderId) {
			this.props.removeStudySetFolder({folder_id: this.props.params.folderId, study_set_id: this.props.item.id});
		}
		else {
			this.props.removeStudySetFolder({folder_id: this.props.item.id, study_set_id: this.props.params.studySetId});
		}
	}


	render() {
		const title = () => {
			if (this.props.params.folderId) {
				return (
					<h1>{this.props.item.title}</h1>
				);
			}
			else {
				return (
					<h1>{this.props.item.name}</h1>
				);
			}
		};

		const addButton = () => {
			if (this.state.addable === true) {
				return (
					<button onClick={this.handleAdd.bind(this)}
							className="add-button">
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</button>
				);
			}
			else {
				return (
					<button onClick={this.handleRemove.bind(this)}
							className="delete-button">
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
					</button>
				);
			}
		};
		return (
			<div>
				{title()}
				{addButton()}
			</div>
		);
	}
}

export default StudySetFolderItem;