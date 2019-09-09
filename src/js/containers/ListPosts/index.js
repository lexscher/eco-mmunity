import React, { Fragment } from 'react';
import Post from '../../presentational/Post';

// Clicking on one of these list items will
// dispatch the action to get the current post,
// as well as it's comments
const ListPosts = ({ posts }) => {
  let postsList = posts.map(post => (
    <div key={post.id} className="post-list-item--card">
      <h1>{post.title}</h1> <p>{post.content}</p>
    </div>
  ));
  return <Fragment>{postsList}</Fragment>;
};

export default ListPosts;
