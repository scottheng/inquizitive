import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import Modal from 'react-modal';
import { browserHistory, Link } from 'react-router';
// import ModalStyle from '../modal/modal_style';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalOpen: false, logIn: false, loggedIn: false};
		this.onModalClose = this.onModalClose.bind(this);
		this.redirectHome = this.redirectHome.bind(this);
	}

	componentDidMount() {
		this.redirectIfLoggedIn();
	}


	redirectIfLoggedIn() {
		if (this.props.currentUser) {
			browserHistory.push('/latest');
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({modalOpen: !newProps.currentUser});
		this.redirectIfLoggedIn();
	}

	handleClick(bool, e) {
		e.preventDefault();
		this.setState({modalOpen: true, logIn: bool});
	}

	onModalClose() {
		this.setState({modalOpen: false});
	}

	redirectHome(e) {
		e.preventDefault();
		this.props.logout()
		.then(() => browserHistory.push('/'))
		.then(() => this.setState({modalOpen: false}));
	}

	renderRightNav() {
		if (this.props.currentUser) {
			return (
				<ul className="right-nav">
					<button id="log-out-button"
							onClick={this.redirectHome}>
						Log out 
					</button>
				</ul>
			);
		} else {
			return (
				<ul className="right-nav">
					<button id="log-in-button" 
							onClick={this.handleClick.bind(this, true)}>
						Log in
					</button>
					<button id="sign-up-button"
							onClick={this.handleClick.bind(this, false)}>
						Sign up
					</button>
				</ul>
			);
		}
	}

	render() {
		const formComponent = (this.state.logIn) ? <SessionFormContainer formType="login" /> : <SessionFormContainer formType="signup" />
		return (
			<header className="static-header">
				<Link to="/" >
					<h1 className="main-logo">inQuizitive</h1>
				</Link>
				{this.renderRightNav()}
				<Modal
					isOpen={this.state.modalOpen}
					onRequestClose={this.onModalClose}>
					<button onClick={this.onModalClose}>Close</button>
					{formComponent}
				</Modal>
			</header>
		);
	}
};

export default Header;