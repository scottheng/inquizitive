import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalOpen: false};
		this.handleClick = this.handleClick.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({modalOpen: true});
	}

	onModalClose() {
		this.setState({modalOpen: false});
	}

	render() {
		return (
			<div>
				<button id="log-in-button" 
						onClick={this.handleClick}>
					Log in
				</button>
				<button id="sign-up-button"
						onClick={this.handleClick}>
					Sign up
				</button>

				<Modal
					isOpen={this.state.modalOpen}
					onRequestClose={this.onModalClose}
					style={ModalStyle}>
					<button onClick={this.onModalClose}>Close</button>
					...content
				</Modal>
			</div>
		);
	}
};

export default Header;