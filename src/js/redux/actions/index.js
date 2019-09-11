// Set URL
const BASE_URL = 'http://localhost:3000';

// Create base for actions
export const userActions = {};

export const communityActions = {};

export const postActions = {};

export const commentActions = {};

export const pageActions = {};

// USER ACTIONS ---------------------------------------------------------------------------------------------
userActions.getCurrentUser = () => dispatch => {
  if (!localStorage.token) return;
  dispatch({ type: 'BEGIN_GET_PROFILE_REQUEST' });
  // Fetch the user profile
  fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: localStorage.token
    }
  })
    // Parse response into JSON
    .then(res => res.json())
    .then(({ token, user, errors }) => {
      if (errors) return alert(errors);
      // Dispatch our current user
      dispatch({
        type: 'GET_PROFILE_REQUEST_SUCCESS',
        payload: user
      });
    })
    // Handle any errors
    .catch(issues => {
      dispatch({
        type: 'GET_PROFILE_REQUEST_FAILURE',
        issues
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
    .then(({ token, user, errors }) => {
      if (errors) return alert(errors);
      // debugger;
      localStorage.token = token;
      dispatch({
        type: 'LOG_IN_REQUEST_SUCCESS',
        payload: user
      });
      pageActions.changePage('default');
    })
    .catch(issues => {
      dispatch({
        type: 'LOG_IN_REQUEST_FAILURE',
        issues
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
    .then(({ token, user, errors }) => {
      if (errors) return alert(errors);
      localStorage.token = token;
      dispatch({
        type: 'SIGN_UP_REQUEST_SUCCESS',
        payload: user
      });
      pageActions.changePage('default');
    })
    .catch(issues => {
      dispatch({
        type: 'SIGN_UP_REQUEST_FAILED',
        issues
      });
    });
};

userActions.signOut = () => dispatch => {
  if (!localStorage.token) return;
  localStorage.clear();
  dispatch({ type: 'SIGN_OUT_USER' });
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
    .catch(issues => {
      dispatch({
        type: 'GET_REQUEST_FAILED',
        issues
      });
    });
};

communityActions.setCurrentCommunity = community => dispatch => {
  dispatch({
    type: 'SET_CURRENT_COMMUNITY',
    payload: community
  });
};

communityActions.resetCurrentCommunity = () => dispatch => {
  dispatch({
    type: 'RESET_CURRENT_COMMUNITY',
    payload: { id: null }
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
        payload: posts['data']
      });
    })
    .catch(issues => {
      // Handle our errors
      dispatch({
        type: 'GET_REQUEST_FAILED',
        issues
      });
    });
};

postActions.setCurrentPost = post => dispatch => {
  dispatch({
    type: 'SET_CURRENT_POST',
    payload: post
  });
};

postActions.reloadCurrentPost = post_id => dispatch => {
  fetch(`${BASE_URL}/posts/${post_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    }
  })
    .then(res => res.json())
    .then(post => {
      postActions.setCurrentPost(post['data']);
    });
};

postActions.resetCurrentPost = () => dispatch => {
  dispatch({
    type: 'RESET_CURRENT_POST',
    payload: { id: null }
  });
};

// COMMENT ACTIONS ---------------------------------------------------------------------------------------------
commentActions.loadComments = () => dispatch => {
  // Fetch ALL Posts
  fetch(`${BASE_URL}/comments`)
    // Parse response into JSON
    .then(res => res.json())
    .then(comments => {
      // Dispatch new action.
      dispatch({
        type: 'SET_COMMENTS',
        payload: comments['data']
      });
    })
    .catch(issues => {
      // Handle our errors
      dispatch({
        type: 'GET_REQUEST_FAILED',
        issues
      });
    });
};

commentActions.setCurrentComments = comments => dispatch => {
  // Sets the current comments to the array of comments passed down by "currentPost"
  dispatch({
    type: 'SET_CURRENT_COMMENTS',
    payload: comments
  });
};

commentActions.resetCurrentComments = () => dispatch => {
  dispatch({
    type: 'RESET_CURRENT_COMMENTS',
    payload: []
  });
};

commentActions.createComment = (content, post_id) => dispatch => {
  fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify({ content, post_id })
  })
    .then(res => res.json())
    .then(comment => {
      dispatch({
        type: 'CREATE_COMMENT',
        payload: comment['data']
      });
    })
    .catch(issues => {
      console.log('ISSUES');
      // Handle our errors
      dispatch({
        type: 'POST_REQUEST_FAILED',
        issues
      });
    });
};
// PAGE ACTIONS ---------------------------------------------------------------------------------------------
pageActions.changePage = page => dispatch => {
  dispatch({
    type: 'CHANGE_PAGE',
    payload: page
  });
};
