import React from 'react';
import { hashHistory, Link } from 'react-router';


class StudySetShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.studySet;
	}

	componentDidMount() {

		this.props.fetchStudySet(parseInt(this.props.params.studySetId));

	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.studySetId !== nextProps.params.studySetId) {
			this.props.fetchStudySet(parseInt(nextProps.params.studySetId));
		}
		this.setState(nextProps.studySet);
	}

	render() {
		return (
			<div className="study-set-show">

				<div className="show-page-header">

					<div className="study-set-info">
						<h1>{this.state.title}</h1>
						<p>{this.state.description}</p>
					</div>
				
				</div>

				<div className="study-set-cards">
					<div className="study-set-cards-list">
						<ul>
							<li>
								This is a card.
							</li>

							<li>
								this is another card.
							</li>
						</ul>
					</div>
					<div className="add-remove-terms">
						<Link to="editpage">
							<button id="add-remove-terms-button">Add or Remove Terms</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default StudySetShow;