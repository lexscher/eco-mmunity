import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';

import thunk from 'redux-thunk';

const initialState = {
  loggedIn: false,
  loading: false,
  pageState: 'default',
  currentUser: {
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
