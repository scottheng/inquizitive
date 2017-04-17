import React from 'react';
import { hashHistory } from 'react-router';
import StudySetCardForm from './study_set_card_form';

class StudySetForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {studySet: this.props.studySet, cards: this.props.cards};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		if (this.props.params.studySetId) {
			this.props.fetchStudySet(parseInt(this.props.params.studySetId));

		}
	}

	componentWillReceiveProps(nextProps) {
		window.scrollTo(0, 0);
		if (this.props.params.studySetId !== nextProps.params.studySetId) {
			this.props.fetchStudySet(parseInt(nextProps.params.studySetId));

		}
		this.setState({studySet: nextProps.studySet});
		if (this.props.params.studySetId) {
			this.setState({cards: nextProps.studySet.cards});
		} 
		// if (this.props.params.studySetId === nextProps.params.studySetId) {
		// 	this.setState({cards: this.state.cards});
		// }

	}

	update(field) {
		return e => {
			e.preventDefault();
			const studySet = this.state.studySet;
			studySet[field] = e.currentTarget.value; 
			this.setState({studySet});
		};
	}

	updateCard(idx) {
		return field => {
			return e => {
				e.preventDefault();
				const cards = this.state.cards;
				cards[idx][field] = e.currentTarget.value;
				this.setState({cards});
			};
		};
	}

	addCard(e) {
		e.preventDefault();
		const cards = this.state.cards;
		cards.push({term: "", definition: ""});
		this.setState({cards});
		window.scrollTo(0,document.body.scrollHeight);
	}

	handleSubmit(e) {
	
		e.preventDefault();
		const state = this.state;
		this.props.submitStudySet(this.state.studySet)
		.then((newStudySetAction) => state.cards.map(card => {
			if (card.id) {
				this.props.submitCard(card)
				.then((newCard) => hashHistory.push(`/study-sets/${newCard.study_set_id}`));
			}
			else {
				card["study_set_id"] = newStudySetAction.studySet.id;
				this.props.createCard(card)
				.then((newCard) => hashHistory.push(`/study-sets/${newCard.study_set_id}`));
			}
		}));
	}

	render() {

		const pageTitle = () => {
			if (this.props.formType === 'edit') {
				return (
					<h1>Edit {this.props.studySet.title}</h1>
				);
			}
			else {
				return (
					<h1>Create a new study set</h1>
				);
			}
		};

		const submitButton = () => {
			if (this.props.formType === 'edit') {
				return (
					<button onClick={this.handleSubmit.bind(this)} className="submit">Done</button>
				);
			}
			else {
				return (
					<button onClick={this.handleSubmit.bind(this)} className="submit">Create</button>
				);
			}
		};
	
		const cardForms = this.state.cards.map((card, idx) => (
			<StudySetCardForm card={this.state.cards[idx]} 
								update={this.updateCard(idx).bind(this)}
								index={idx} />
		));

		return (
			<div className="study-set-form">
				<div className="study-set-description">
					<div className="study-set-description-header">
						{pageTitle()}
					
					</div>
						
					<label>
						<input type="text" 
								placeholder="Subject, chapter, unit" 
								value={this.state.studySet.title}
								onChange={this.update('title').bind(this)} />
						<br/>
						TITLE
					</label>

				</div>

				<div className="study-set-cards-form">
					<ul className="cards-form-list">
						{cardForms}
						<button onClick={this.addCard.bind(this)}
								className="add-card">
								<h2>+  ADD CARD</h2>
						</button>
					</ul>
					<br/>
					{submitButton()}
				</div>

			</div>
		);
	}
}

export default StudySetForm;