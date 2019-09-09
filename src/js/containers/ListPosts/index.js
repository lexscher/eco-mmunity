import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { postActions } from '../../redux/actions';

// Clicking on one of these list items will
// dispatch the action to get the current post,
// as well as it's comments
const ListPosts = props => {
  let { postList, setCurrentPost } = props
  let postsList = postList.map(post => (
    <div key={post.id} className="post-list-item--card" onClick={() => setCurrentPost(post)}>
      <h1>{post.title}</h1> <p>{post.content}</p>
    </div>
  ));
  return <Fragment>{postsList}</Fragment>;
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setCurrentPost: postActions.setCurrentPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
