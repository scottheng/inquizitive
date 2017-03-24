import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import HeaderContainer from '../header/header_container';

class Splash extends React.Component {

	render() {
		return (
			<div className="homepage">
				<div className="welcome">
					<img src={window.splashImageUrl} alt="Splash-Home"/>
				</div>
			</div>
		);
	}
}

export default withRouter(Splash);