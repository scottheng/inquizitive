import React from 'react';

class Flashcards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flashcards-page">
				<div className="flip-container" >
					<div className="flipper">
						<div className="front">
							<h1>Hello</h1>
						</div>
						<div className="back">
							<h1>Goodbye</h1>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Flashcards;