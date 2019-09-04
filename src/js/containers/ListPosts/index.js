import React, { Fragment } from 'react';
import Post from '../../presentational/Post';

const ListPosts = ({ posts }) => {
  let postsList = posts.map(post => <Post key={post.id} title={post.title} content={post.content} />);
  return <Fragment>{postsList}</Fragment>;
};

export default ListPosts;
