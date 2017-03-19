import React from 'react';

class StudySetForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {studySet: this.props.studySet};
	}

	componentDidMount() {
		if (this.props.params.studySetId) {
			this.props.fetchStudySet(parseInt(this.props.params.studySetId));
			
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({studySet: this.props.studySet});
	}

	render() {

		return (
			<div className="study-set-form">
				<div className="study-set-description">
					<h1>Create a new study set</h1>
					<label>
						<input type="text" 
								placeholder="Subject, chapter, unit" />
						TITLE
					</label>

				</div>
			</div>
		);
	}
}

export default StudySetForm;