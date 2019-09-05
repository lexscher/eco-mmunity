import { combineReducers } from 'redux'

export default (state, action) => {
  // This will be cleaned up!
  console.log(action.payload);
  switch (action.type) {
    // User Related
    // Check if a user is logged in (When we want to view user profile, or do any CREATE, UPDATE, DELETE methods to database.)
    case 'CHECK_USER':
      break;
    // The two below can Possibly me merged into SET_USER
    // Log in the user (GET - Fetch user, CREATE token, save token to localStorage)
    case 'LOG_IN_USER':
      break;
    // register the user (POST - Fetch user, CREATE token, save token to localStorage)
    case 'REGISTER_USER':
      break;
    // Page Related

    // Data Related (On Reload/ Fetch) - Could be a "Load" or an "Update" functinality, every time we render, every time we make a new post.
    case 'SET_COMMUNITIES':
      return { ...state, communities: action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
      break;
    case 'LOAD_COMMENTS':
      break;
    // Change the Page
    case 'CHANGE_PAGE':
      return { ...state, pageState: action.payload };

    default:
      break;
  }

  return state;
};