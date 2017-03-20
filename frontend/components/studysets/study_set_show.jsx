import React from 'react';
import { hashHistory, Link } from 'react-router';
import StudySetCard from './study_set_show_card';


class StudySetShow extends React.Component {
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		this.props.fetchStudySet(parseInt(this.props.params.studySetId));

	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.studySetId !== nextProps.params.studySetId) {
			this.props.fetchStudySet(parseInt(nextProps.params.studySetId));
		}

	}

	render() {

		const {studySet} = this.props;

		const cards = studySet.cards.map((card, idx) => (
			<StudySetCard card={card} />
		));

		return (
			<div className="study-set-show">

				<div className="show-page-header">
					<div className="study-set-subinfo">
						<h3>{studySet.cards.length} terms</h3>
						<br/>
						<Link to={`/${this.props.currentUser.username}`}>
							<h4>{this.props.currentUser.username}</h4>
						</Link>
					</div>
					<div className="study-set-info">
						<h1>{studySet.title}</h1>
						<p>{studySet.description}</p>
					</div>
					<div className="study-set-header-nav">
						<ul>
							<button>
								<Link to={`/study-sets/${this.props.params.studySetId}/edit`}>
									<span className="fa fa-pencil"></span>
								</Link>
							</button>
							<button>
								<Link to={`/`}>+</Link>

							</button>
							<button>
								<Link to={`/`}>
									<span className="fa fa-trash"></span>
								</Link>
							</button>
						</ul>
					</div>
				
				</div>

				<div className="study-set-cards">
					<div className="study-set-cards-list">
						<ul>
							{cards}
							<div className="add-remove-terms">
								<Link to="editpage">
									<button id="add-remove-terms-button">Add or Remove Terms</button>
								</Link>
							</div>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default StudySetShow;