import React from 'react';
import { browserHistory, Link } from 'react-router';


class StudySetShow extends React.Component {

	render() {
		return (
			<div className="study-set-show">

				<div className="show-page-header">

					<div className="study-set-info">
						<h1>Study Set Title goes here</h1>
						<p>Study set description goes here</p>
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