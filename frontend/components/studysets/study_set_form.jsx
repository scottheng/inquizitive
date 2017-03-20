import React from 'react';
import { hashHistory } from 'react-router';
import StudySetCardForm from './study_set_card_form';

class StudySetForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {studySet: this.props.studySet, cards: this.props.cards};
	}

	componentDidMount() {
		if (this.props.params.studySetId) {
			this.props.fetchStudySet(parseInt(this.props.params.studySetId));

		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.studySetId !== nextProps.params.studySetId) {
			this.props.fetchStudySet(parseInt(nextProps.params.studySetId));
		
		}
		this.setState({studySet: nextProps.studySet});
		if (this.props.params.studySetId) {
			this.setState({cards: nextProps.studySet.cards});
		} else {
			this.setState({cards: nextProps.cards});
		}
		debugger

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
				console.log(this.state.cards);
			};
		};
	}

	addCard(e) {
		e.preventDefault();
		const cards = this.state.cards;
		cards.push({term: "", definition: ""});
		this.setState({cards});
	}

	handleSubmit(e) {
		debugger
		e.preventDefault();
		this.props.submitStudySet(this.state.studySet)
		.then(newStudySetAction => this.state.cards.map(card => {
			card["study_set_id"] = newStudySetAction.studySet.id;
			this.props.submitCard(card)
		.then(hashHistory.push(`/study-sets/${this.props.studySet.id}`));
		}));
	}

	render() {
		debugger
		const cardForms = this.state.cards.map((card, idx) => (
			<StudySetCardForm card={this.state.cards[idx]} 
								update={this.updateCard(idx).bind(this)}
								index={idx} />
		));

		return (
			<div className="study-set-form">
				<div className="study-set-description">
					<div className="study-set-description-header">
						<h1>Create a new study set</h1>
						<button onClick={this.handleSubmit.bind(this)}>Create</button>
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
					</ul>
					<button onClick={this.addCard.bind(this)}
							className="add-card">
							<h2>+  ADD CARD</h2>
					</button>
					<br/>
					<button onClick={this.handleSubmit.bind(this)}
							className="create">Create</button>
				</div>

			</div>
		);
	}
}

export default StudySetForm;