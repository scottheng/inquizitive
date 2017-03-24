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
		window.scrollTo(0, 0);
		if (this.props.params.studySetId !== nextProps.params.studySetId) {
			this.props.fetchStudySet(parseInt(nextProps.params.studySetId));
		}

	}

	deleteStudySet(e) {
		e.preventDefault();
		this.props.deleteStudySet(this.props.params.studySetId)
		.then(() => hashHistory.push(`/${this.props.currentUser.username}`));
	}

	render() {

		const {studySet} = this.props;

		const cards = studySet.cards.map((card, idx) => (
			<StudySetCard card={card} key={idx}/>
		));

		return (
			<div className="study-set-show">

				<div className="show-page-header">
					<div className="study-set-information">
						<div className="study-set-subinfo">
							<h3>{studySet.cards.length} terms</h3>
							<br/>
							<Link to={`/${this.props.currentUser.username}`}>
								<h4>
									<span className="fa fa-user" aria-hidden="true"></span>
									{this.props.currentUser.username}
								</h4>
							</Link>
						</div>
						<div className="study-set-info">
							<h1>{studySet.title}</h1>
							<p>{studySet.description}</p>
						</div>
						<div className="study-set-header-nav">
							<ul>
								<abbr title="Edit">
									<button>
										<Link to={`/study-sets/${this.props.params.studySetId}/edit`}>
											<span className="fa fa-pencil"></span>
										</Link>
									</button>
								</abbr>
								<abbr title="Add study set to folder">
									<button>
										<Link to={`/study-sets/${this.props.params.studySetId}/add-folders`}>
											<i className="fa fa-plus" aria-hidden="true"></i>
										</Link>
									</button>
								</abbr>
								<abbr title="Delete">
									<button onClick={this.deleteStudySet.bind(this)}>
										<Link>
											<span className="fa fa-trash"></span>
										</Link>
									</button>
								</abbr>
							</ul>
						</div>
					</div>
					<Link to={`/study-sets/${this.props.params.studySetId}/flashcards`}
							className="flashcards-link">
						<button className="button-to-flashcards">
							<div className="flashcard-icon">
								<span className="fa fa-sticky-note" aria-hidden="true"></span>
							</div>
							<h2>FLASHCARDS</h2>
						</button>
					</Link>
				</div>

				<div className="study-set-cards">
					<div className="study-set-cards-list">
						<ul>
							{cards}
							<div className="add-remove-terms">
								<Link to={`/study-sets/${this.props.params.studySetId}/edit`}>
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