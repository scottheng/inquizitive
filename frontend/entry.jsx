import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util';
import * as studySetsAPIUtil from './util/study_sets_api_util';
import * as cardsAPIUtil from './util/cards_api_util';
import { fetchStudySets, fetchStudySet, createStudySet } from './actions/study_set_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.getElementById('root'));
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser }};
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});