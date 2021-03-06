import * as sessionAPIUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const receiveErrors = (errors) => ({
	type: RECEIVE_ERRORS,
	errors
});

export const login = (user) => dispatch => (
	sessionAPIUtil.login(user) 
		.then(currentUser => dispatch(receiveCurrentUser(currentUser)))
		.fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
	sessionAPIUtil.logout()
		.then(user => dispatch(receiveCurrentUser(null)))
		.then(hashHistory.push('/'))
);

export const signup = (user) => dispatch => (
	sessionAPIUtil.signup(user)
		.then(currentUser => dispatch(receiveCurrentUser(currentUser)))
		.fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const clearErrors = () => dispatch => (
	dispatch(receiveErrors([]))
);
