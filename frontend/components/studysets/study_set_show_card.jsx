import React from 'react';

const StudySetCard = (props) => (
	<div className="card-item">
		<div className="card-term">
			<h3>{props.card.term}</h3>
		</div>
		<div className="card-definition">
			<h3>{props.card.definition}</h3>
		</div>
	</div>
);

export default StudySetCard;
