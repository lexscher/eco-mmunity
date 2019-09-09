import React, { Component } from 'react';

// This will be the modal view
class Post extends Component {
  render() {
    let { title, content } = this.props;
    return (
      <div className="post--view single-post">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

export default Post;
