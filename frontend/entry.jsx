import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util';
import * as studySetsAPIUtil from './util/study_sets_api_util';
import { fetchStudySets, fetchStudySet } from './actions/study_set_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import SortableComponent from './components/draggable/draggable';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.getElementById('root'));
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser }};
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    window.signup = sessionAPIUtil.signup;
    window.login = sessionAPIUtil.login;
    window.logout = sessionAPIUtil.logout;
    window.fetchStudySets = fetchStudySets;
    window.fetchStudySet = fetchStudySet;
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});