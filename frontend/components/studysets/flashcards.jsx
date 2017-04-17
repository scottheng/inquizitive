import React from 'react';

class Flashcards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {cards: this.props.studySet.cards, cardIndex: 0};
		this.prevCard = this.prevCard.bind(this);
		this.nextCard = this.nextCard.bind(this);
	}

	componentDidMount() {
		this.props.fetchStudySet(this.props.params.studySetId);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({cards: nextProps.studySet.cards});
	
	}

	prevCard(e) {
		e.preventDefault();
		if (this.state.cardIndex - 1 >= 0) {
			this.setState({cardIndex: this.state.cardIndex - 1});
		}
	}

	nextCard(e) {
		e.preventDefault();
		if (this.state.cards[this.state.cardIndex + 1]) {
			this.setState({cardIndex: this.state.cardIndex + 1});
		}
	}


	render() {

		const front = () => {
			if (this.state.cards[this.state.cardIndex]) {
				return (
					<h1>{this.state.cards[this.state.cardIndex].term}</h1>
				);
			}
		};

		const back = () => {
			if (this.state.cards[this.state.cardIndex]) {
				return (
					<h1>{this.state.cards[this.state.cardIndex].definition}</h1>
				);
			}
		};

		const prevButton = () => {
			if (this.state.cardIndex - 1 < 0) {
				return (
					<div onClick={this.prevCard}
							className="inactive">
						<i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
					</div>
				);
			}
			else {
				return (
					<button onClick={this.prevCard}
							className="active">
						<i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
					</button>
				);				
			}
		};

		const nextButton = () => {
			if (this.state.cardIndex + 1 >= this.state.cards.length) {
				return (
					<div onClick={this.nextCard}
							className="inactive">
						<i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
					</div>
				);
			}
			else {
				return (
					<button onClick={this.nextCard}
							className="active">
						<i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
					</button>
				);
			}
		};

		return (
			<div className="flashcards-page">
				<div className="instructions">
					<h1>Hover over flashcard to flip from term to definition</h1>
				</div>
				<div className="flip-container" >
					<div className="flipper">
						<div className="front">
							{front()}
						</div>
						<div className="back">
							{back()}
						</div>
					</div>
				</div>
				<ul className="prev-next-buttons">
					<li>
						{prevButton()}
					</li>
					<li>
						<h2>{this.state.cardIndex+1} out of {this.state.cards.length}</h2>
					</li>
					<li>
						{nextButton()}
					</li>
				</ul>
			</div>

		);
	}
}

export default Flashcards;