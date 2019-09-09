import React from 'react';

// This will be the modal view
const Post = ({ title, content }) => {
  return (
    <div className="post--view single-post">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Post;
