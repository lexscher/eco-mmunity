import React, { Component } from 'react';
import useForm from './FormHooks';
import { connect } from 'react-redux';
import { commentActions, postActions } from '../../redux/actions';

class CommentForm extends Component {
  state = {
    content: '',
    commentMode: false
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let content = event.target.content.value;
    let postId = this.props.currentPost.id;
    this.props.createComment(content, postId);
    this.setState({ content: '' });
  };

  stopConsoleFromGettingAngry = () => 'Smile';

  createForm = () => (
    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <textarea
        type="text"
        name="content"
        placeholder="Write a comment!"
        value={this.state.content}
        onChange={this.stopConsoleFromGettingAngry}
        required
      />
      <button type="submit">Post Comment!</button>
      <button onClick={this.commentModeOff}>cancel</button>
    </form>
  );

  commentModeOff = () => this.setState({ commentMode: false, content: '' });
  commentModeOn = () => this.setState({ commentMode: true });

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          this.state.commentMode ? (
            this.createForm()
          ) : (
            <button onClick={this.commentModeOn}> Write a comment! </button>
          )
        ) : (
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <button type="submit" disabled>
              Log In to comment on this post!
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loadPosts: postActions.loadPosts,
  setCurrentPost: postActions.setCurrentPost,
  resetCurrentPost: postActions.resetCurrentPost,
  reloadCurrentPost: postActions.reloadCurrentPost,
  loadComments: commentActions.loadComments,
  setCurrentComments: commentActions.setCurrentComments,
  createComment: commentActions.createComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
