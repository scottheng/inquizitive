import React from 'react';

class StudySetFolderItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {addable: true};
	}

	addToFolder(e) {
		e.preventDefault();
		this.setState({addable: false});
		this.props.createStudySetFolder({folder_id: this.props.params.folderId, study_set_id: this.props.item.id});
	}

	render() {
		const addButton = () => {
			if (this.state.addable === true) {
				return (
					<button onClick={this.addToFolder.bind(this)}>Add To Folder</button>
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