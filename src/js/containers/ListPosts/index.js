import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { postActions } from '../../redux/actions';

// Clicking on one of these list items will
// dispatch the action to get the current post,
// as well as it's comments
const ListPosts = ({ postList }) => {
  let postsList = postList.map(post => (
    <div key={post.id} className="post-list-item--card">
      <h1>{post.title}</h1> <p>{post.content}</p>
    </div>
  ));
  return <Fragment>{postsList}</Fragment>;
};


export default ListPosts;
