import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { postActions } from '../../redux/actions';

// Clicking on one of these list items will
// dispatch the action to get the current post,
// as well as it's comments
const ListPosts = props => {
  let { postList, setCurrentPost } = props;
  let postsList = postList.map(post => (
    <div
      key={post.id}
      className="post-list-item--card"
      onClick={() => setCurrentPost(post)}
    >
      <div className="post-info">
        <h1 className="post-info__title">{post.title}</h1>
        <p className="post-info__content">{post.content}</p>
      </div>
      <div className="post-info-extra">
        <p className="post-info-extra__comments">comments</p>
        <p className="post-info-extra__author">by hazel</p>
      </div>
    </div>
  ));
  return <Fragment>{postsList}</Fragment>;
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setCurrentPost: postActions.setCurrentPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
