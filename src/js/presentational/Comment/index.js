import React from 'react';

// Comment
export default props => {
  let { content, user, voters, votes } = props.comment.attributes;
  return (
    <div className="comment">
      <p>{content}</p>
      <p>{user.username}</p>
      <p>
        {votes.length} {votes.length !== 1 ? 'votes' : 'vote'}
      </p>
    </div>
  );
};
