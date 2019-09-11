import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { postActions, commentActions } from '../../redux/actions';

// Clicking on one of these list items will
// dispatch the action to get the current post,
// as well as it's comments
class ListPosts extends Component {


  render() {
    let { postList, setCurrentPost, setCurrentComments } = this.props;
    let postsList = postList.map(post => {
      let {
        title,
        content,
        comments,
        user,
        community,
        voters,
        votes
      } = post.attributes;
      let postComments = this.props.comments.filter(
        comment => comment.attributes.post.id == post.id
      );
      return (
        <div
          key={post.id}
          className="post-list-item--card"
          onClick={() => setCurrentPost(post)}
          onMouseUp={() => setCurrentComments(postComments)}
        >
          <div className="post-info">
            <h1 className="post-info__title">{title}</h1>
            <p className="post-info__content">{content}</p>
          </div>
          <div className="post-info-extra">
            <p className="post-info-extra__comments">
              {comments.length} {comments.length !== 1 ? 'comments' : 'comment'}
            </p>
            <p className="post-info-extra__author">
              by {user.username} in './eco/{community.name}'
            </p>
          </div>
        </div>
      );
    });
    return <Fragment>{postsList}</Fragment>;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setCurrentPost: postActions.setCurrentPost,
  setCurrentComments: commentActions.setCurrentComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
