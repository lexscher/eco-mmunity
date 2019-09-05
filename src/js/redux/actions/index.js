// Set URL
const BASE_URL = 'http://localhost:3000/';

// Create base for actions
const userActions = {};

const communityActions = {};

const postActions = {};

const commentActions = {};

// USER ACTIONS
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
    .then(({token, user}) => {
      localStorage.token = token
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

userActions.signUp = (first_name, last_name, username, email, password) => dispatch => {
  dispatch({ type: 'BEGIN_SIGN_UP_REQUEST'})

  fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ first_name, last_name, username, email, password })
  })
  .then(res => res.json())
  .then(({token, user}) => {
    localStorage.token = token
    dispatch({
      type: 'SIGN_UP_REQUEST_SUCCESS',
      payload: user
    })
  })
}

// COMMUNITY ACTIONS

// POST ACTIONS

// COMMENT ACTIONS

export default { userActions, commentActions, postActions, communityActions };
