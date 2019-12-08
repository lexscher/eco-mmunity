import React from 'react';
import moment from 'moment';

// Comment
export default props => {
  let { content, user, voters, votes, created } = props.comment.attributes;
  let createdAt = new Date(created);

  return (
    <div className="comment">
      <div className="comment--votes-container">
        <p className="comment--votes__count">
          {votes.length} {votes.length !== 1 ? 'votes' : 'vote'}
        </p>
      </div>
      <div className="comment--content-container">
        <p className="comment--content__username">
          {user.username} <span className="icon">⌯</span> {`${moment(createdAt).fromNow()}`}
        </p>
        <p className="comment--content__body">{content}</p>
      </div>
    </div>
  );
};
