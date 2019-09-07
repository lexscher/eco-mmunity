export default (state, action) => {
  switch (action.type) {
    /*/ ------------ CURRENT USER REDUCERS ------------ /*/
    case 'BEGIN_GET_PROFILE_REQUEST':
      break;
    case 'GET_PROFILE_REQUEST_SUCCESS':
      break;
    case 'GET_PROFILE_REQUEST_FAILURE':
      break;
    case 'BEGIN_LOG_IN_REQUEST':
      break;
    case 'LOG_IN_REQUEST_SUCCESS':
      break;
    case 'LOG_IN_REQUEST_FAILURE':
      break;
    case 'BEGIN_SIGN_UP_REQUEST':
      break;
    case 'SIGN_UP_REQUEST_SUCCESS':
      break;
    case 'SIGN_UP_REQUEST_FAILED':
      break;
    /*/ ------------ CURRENT PAGE/PAGE STATE REDUCERS ------------ /*/
    case 'CHANGE_PAGE':
      return { ...state, pageState: action.payload };
    case value:
      break;
    /*/ ------------ COMMUNITY REDUCERS ------------ /*/
    // Data Related (On Reload/ Fetch) - Could be a "Load" or an "Update" functinality, every time we render, every time we make a new post.
    case 'SET_COMMUNITIES':
      return { ...state, communities: action.payload };
    /*/ ------------ POST REDUCERS ------------ /*/
    case 'SET_POSTS':
      return { ...state, posts: action.payload };

    /*/ ------------ COMMENT REDUCERS ------------ /*/
    case 'SET_COMMENTS':
      break;

    default:
      return state;
  }
};
