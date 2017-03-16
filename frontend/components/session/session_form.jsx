import React from 'react';
import { Link, browserHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return (e) => this.setState({[field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user)
		.then(action => this.props.router.push(`/${action.currentUser.username}`));
	}

	renderEmailInput() {
		if (this.props.formType === 'signup') {
			return (
				<div className='form-input'>
					<input type="text"
							value={this.state.email}
							placeholder="Type your email"
							onChange={this.update("email")}
							className="session-input"/>
					<label>
						EMAIL
					</label>
				</div>
			);
		}
	}

	renderErrors() {
		return (
			<ul className="session-errors">
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
					<header className='form-title'>
						<h1>{this.props.formType}</h1>
					</header>
					<br/>
					{this.renderErrors()}
					<div className="session-form">
						<br/>
						<div className='form-input'>
							<input type="text"
									value={this.state.username}
									placeholder="Type your username"
									onChange={this.update("username")}
									className="session-input" />
							<label className="input-label"> 
								USERNAME
							</label>
						</div>

						{this.renderEmailInput()}
						<div className='form-input'>
							<input type="password"
									value={this.state.password}
									placeholder="Type your password"
									onChange={this.update("password")}
									className="session-input" />
							<label> 
								PASSWORD
							</label>
						</div>
						<br/>
						<input type="submit" value={this.props.formType} />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);