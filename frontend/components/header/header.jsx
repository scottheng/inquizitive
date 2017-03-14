import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import Modal from 'react-modal';
// import ModalStyle from '../modal/modal_style';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalOpen: false, logIn: false, loggedIn: false};
		this.onModalClose = this.onModalClose.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({modalOpen: !newProps.currentUser});
	}

	handleClick(bool, e) {
		e.preventDefault();
		this.setState({modalOpen: true, logIn: bool});
	}

	onModalClose() {
		this.setState({modalOpen: false});
	}

	render() {
		const formComponent = (this.state.logIn) ? <SessionFormContainer formType="login" /> : <SessionFormContainer formType="signup" />
		return (
			<header>
				<h1>inQuizitive</h1>
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