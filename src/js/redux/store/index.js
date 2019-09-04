import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';

import thunk from 'redux-thunk';

const initialState = {
  currentUser: {
    status: 'Logged Out',
    token: null,
    firstName: "",
    lastName: "",
    username: "",
    email: ""
  },
  communities: [],
  posts: [],
  comments: []
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
