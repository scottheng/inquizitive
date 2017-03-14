import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.getElementById('root'));
    const store = configureStore();
    window.signup = sessionAPIUtil.signup;
    window.login = sessionAPIUtil.login;
    window.logout = sessionAPIUtil.logout;
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});