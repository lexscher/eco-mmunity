export default (state, action) => {
  switch (action.type) {
    /*/ ------------ CURRENT USER REDUCERS ------------ /*/
    // get current user
    case 'BEGIN_GET_PROFILE_REQUEST':
      return { ...state, loading: true };
    case 'GET_PROFILE_REQUEST_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        loading: false
      };
    case 'GET_PROFILE_REQUEST_FAILURE':
      return { ...state, issues: action.issues };
    // Log In
    case 'BEGIN_LOG_IN_REQUEST':
      return { ...state, loading: true };
    case 'LOG_IN_REQUEST_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        loading: false
      };
    case 'LOG_IN_REQUEST_FAILURE':
      return { ...state, issues: action.issues };
    // Sign Up
    case 'BEGIN_SIGN_UP_REQUEST':
      return { ...state, loading: true };
    case 'SIGN_UP_REQUEST_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        loading: false
      };
    case 'SIGN_UP_REQUEST_FAILED':
      return { ...state, issues: action.issues };
    // Sign Out
    case 'SIGN_OUT_USER':
      return {
        ...state,
        loggedIn: false,
        currentUser: {
          firstName: '',
          lastName: '',
          username: '',
          email: ''
        }
      };
    /*/ ------------ CURRENT PAGE/PAGE STATE REDUCERS ------------ /*/
    case 'CHANGE_PAGE':
      return { ...state, pageState: action.payload };
    /*/ ------------ COMMUNITY REDUCERS ------------ /*/
    // Data Related (On Reload/ Fetch) - Could be a "Load" or an "Update" functinality, every time we render, every time we make a new post.
    case 'SET_COMMUNITIES':
      return {
        ...state,
        communitiesLoaded: true,
        communities: [...action.payload]
      };
    // Creation (POST)
    case 'CREATE_COMMUNITY':
      return { ...state, communities: [...action.payload] };
    // Edit (PUT/PATCH)
    case 'EDIT_COMMUNITY':
      return { ...state, communities: [...action.payload] };
    // Delete (DELETE)
    case 'DELETE_COMMUNITY':
      return { ...state, communities: [...action.payload] };
    // SET CURRENT COMMUNITY to what the user has selected
    case 'SET_CURRENT_COMMUNITY':
      return { ...state, currentCommunity: { ...action.payload } };
    // RESET CURRENT COMMUNITY, show all posts again
    case 'RESET_CURRENT_COMMUNITY':
      return { ...state, currentCommunity: { ...action.payload } };

    /*/ ------------ POST REDUCERS ------------ /*/
    case 'SET_POSTS':
      return { ...state, postsLoaded: true, posts: [...action.payload] };
    // Creation (POST)
    case 'CREATE_POST':
      return { ...state, posts: [...action.payload] };
    // Edit (PUT/PATCH)
    case 'EDIT_POST':
      return { ...state, posts: [...action.payload] };
    // Delete (DELETE)
    case 'DELETE_POST':
      return { ...state, posts: [...action.payload] };
    /*/ ------------ COMMENT REDUCERS ------------ /*/
    case 'SET_COMMENTS':
      return { ...state, commentsLoaded: true, comments: [...action.payload] };
    // Creation (POST)
    case 'CREATE_COMMENT':
      return { ...state, comments: [...action.payload] };
    // Edit (PUT/PATCH)
    case 'EDIT_COMMENT':
      return { ...state, comments: [...action.payload] };
    // Delete (DELETE)
    case 'DELETE_COMMENT':
      return { ...state, comments: [...action.payload] };
    /*/ ------------ JOINED COMMUNITY (Logged In User - "Joined/Favorited"  - Community) ------------ /*/
    /*/ ------------ VOTED POST (Logged In User - "Vote"  - Post) ------------ /*/
    /*/ ------------ VOTED COMMENT (Logged In User - "Vote"  - Comment) ------------ /*/

    default:
      return state;
  }
};
