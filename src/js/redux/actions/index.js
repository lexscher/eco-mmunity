// Set URL
const BASE_URL = 'http://localhost:3000/';

// Create base for actions
export const userActions = {};

export const communityActions = {};

export const postActions = {};

export const commentActions = {};

export const pageActions = {};

// USER ACTIONS ---------------------------------------------------------------------------------------------
userActions.getCurrentUser = () => dispatch => {
  dispatch({ type: 'BEGIN_GET_PROFILE_REQUEST' });

  // Fetch the user profile
  fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(res => {
      // Check for an invalid response
      if (res.status !== (200 || 201 || 203)) throw new Error('Unauthorized');
      return res;
    })
    // Parse response into JSON
    .then(res => res.json())
    .then(user => {
      // If the user comes back as nil, their token was invalid
      if (!user) throw new Error('Unauthorized');
      // Dispatch our current user
      dispatch({
        type: 'GET_PROFILE_REQUEST_SUCCESS',
        payload: user
      });
    })
    // Handle any errors
    .catch(error => {
      dispatch({
        type: 'GET_PROFILE_REQUEST_FAILURE',
        error
      });
    });
};

userActions.logIn = (username, password) => dispatch => {
  dispatch({ type: 'BEGIN_LOG_IN_REQUEST' });
  // Fetch /login to get our token
  fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(({ token, user }) => {
      localStorage.token = token;
      dispatch({
        type: 'LOG_IN_REQUEST_SUCCESS',
        payload: user
      });
    })
    .catch(error => {
      dispatch({
        type: 'LOG_IN_REQUEST_FAILURE',
        error
      });
    });
};

userActions.signUp = (
  first_name,
  last_name,
  username,
  email,
  password
) => dispatch => {
  dispatch({ type: 'BEGIN_SIGN_UP_REQUEST' });

  fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ first_name, last_name, username, email, password })
  })
    .then(res => res.json())
    .then(({ token, user }) => {
      localStorage.token = token;
      dispatch({
        type: 'SIGN_UP_REQUEST_SUCCESS',
        payload: user
      });
    })
    .catch(error => {
      dispatch({
        type: 'SIGN_UP_REQUEST_FAILED',
        payload: error
      });
    });
};

// COMMUNITY ACTIONS ---------------------------------------------------------------------------------------------
communityActions.loadCommunities = () => dispatch => {
  // Fetch all communities
  fetch(`${BASE_URL}/communities`)
    // Parse response into JSON
    .then(res => res.json())
    .then(communities => {
      // Dispatch the action
      dispatch({
        type: 'SET_COMMUNITIES',
        payload: communities
      });
    })
    // catch the error
    .catch(error => {
      dispatch({
        type: 'GET_REQUEST_FAILED',
        payload: error
      });
    });
};

// POST ACTIONS ---------------------------------------------------------------------------------------------
postActions.loadPosts = () => dispatch => {
  // Fetch ALL Posts
  fetch(`${BASE_URL}/posts`)
    // Parse response into JSON
    .then(res => res.json())
    .then(posts => {
      // Dispatch new action.
      dispatch({
        type: 'SET_POSTS',
        payload: posts
      });
    })
    .catch(error => {
      // Handle our errors
      dispatch({
        type: 'GET_REQUEST_FAILED',
        payload: error
      });
    });
};

// COMMENT ACTIONS ---------------------------------------------------------------------------------------------

// PAGE ACTIONS ---------------------------------------------------------------------------------------------
pageActions.changePage = page => dispatch => {
  dispatch({
    type: 'CHANGE_PAGE',
    payload: page
  })
}



