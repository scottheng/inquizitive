import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    window.signup = sessionAPIUtil.signup;
    window.login = sessionAPIUtil.login;
    window.logout = sessionAPIUtil.logout;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to inQuizitive!</h1>, root);
});