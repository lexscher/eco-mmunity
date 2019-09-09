import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postActions, commentActions } from '../../redux/actions';
import Comment from '../Comment';

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
    let commentList = this.props.currentComments.map(comment => <Comment comment={comment} />);
    return (
      <div className="post--view single-post">
        <h1>{title}</h1>
        <p>{content}</p>
        {this.state.currentComments.length > 0 ? (
          <div className="comments-container">{commentList}</div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

// const mapDispatchToProps = {
//   loadComments: commentActions.loadComments
// }

export default connect(mapStateToProps)(Post);
