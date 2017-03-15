import React from 'react';
import { Link, browserHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			browserHistory.replace("/");
		}
	}

	update(field) {
		return (e) => this.setState({[field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user)
		.then(() => browserHistory.push('/latest'));
	}

	renderEmailInput() {
		if (this.props.formType === 'signup') {
			return (
				<label> Email:
					<input type="text"
							value={this.state.email}
							onChange={this.update("email")}
							className="session-input"/>
				</label>
			);
		}
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}

			</ul>
		);
	}

	render() {

		return (
			<div className="session-form-container">
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<header className='form-title'>{this.props.formType}</header>
					<br/>
					{this.renderErrors()}
					<div className="session-form">
						<br/>
						<label> Username:
							<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="session-input" />
						</label>
						<br/>
						{this.renderEmailInput()}
						<br/>
						<label> Password:
							<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="session-input" />
						</label>
						<br/>
						<input type="submit" value={this.props.formType} />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);