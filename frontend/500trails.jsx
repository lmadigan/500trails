import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createImage} from './actions/trip_actions';
import Modal from 'react-modal';
import { createLike } from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);
  window.store = store;
  const root = document.getElementById('root');
  ReactDom.render( <Root store={store} />, root);
});
