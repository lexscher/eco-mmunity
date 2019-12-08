import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Comment';
import CommentForm from '../../containers/Forms/CommentForm';
import { postActions } from '../../redux/actions';

// This will be the modal view
class Post extends Component {
  render() {
    let {
      title,
      content,
      community,
      votes,
      voters
    } = this.props.currentPost.attributes;
    let commentList = this.props.currentComments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
    return (
      <div className="show-post">
        <div className="show-post__controls">
          <p>'./eco/{community.name}'</p>
          <p className="show-post--exit-btn" onClick={this.props.resetCurrentPost}>
            close
          </p>
        </div>
        <h1>{title}</h1>
        <p>{content}</p>
        <CommentForm postId={this.props.currentPost.id} />
        {this.props.currentComments && this.props.currentComments.length > 0 ? (
          <div className="comments-container">{commentList.reverse()}</div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  resetCurrentPost: postActions.resetCurrentPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
