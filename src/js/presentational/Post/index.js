import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postActions, commentActions } from '../../redux/actions';
import Comment from '../Comment';

// This will be the modal view
class Post extends Component {
  state = {
    postComments: []
  };
  componentDidMount() {
    this.getPostComments();
  }

  getPostComments = () => {
    let postComments = this.props.comments.filter(
      comment => comment.attributes.post.id == this.props.currentPost.id
    );
    this.setState({ postComments });
  };

  render() {
    let {
      title,
      content,
      community,
      votes,
      voters
    } = this.props.currentPost.attributes;
    let commentList = this.state.postComments.map(comment => <Comment comment={comment} />);
    return (
      <div className="post--view single-post">
        <h1>{title}</h1>
        <p>{content}</p>
        {this.state.postComments.length > 0 ? (
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
