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
    let reset = event => {
      this.setState({ content: '' });
    };

    // Reload all comments
    let helpComments = props => {
      props.loadComments();
    };
    // Reload all posts
    let helpPosts = props => {
      props.loadPosts();
    };

    // Reset current comments
    let helpCurrentComments = props => {
      let postComments = props.comments.filter(
        comment => comment.attributes.post.id == props.currentPost.id
      );
      console.log(postComments);
      props.setCurrentComments(postComments);
    };
    // Reset current post
    let helpCurrentPost = props => {
      props.reloadCurrentPost(this.props.currentPost.id);
    };

    setTimeout(() => helpComments(this.props), 1000);
    setTimeout(() => helpPosts(this.props), 2000);
    setTimeout(() => helpCurrentComments(this.props), 3000);
    setTimeout(() => helpCurrentPost(this.props), 4050);
    setTimeout(reset(event), 5050);
  };

  createForm = () => (
    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <textarea
        type="text"
        name="content"
        placeholder="Write a comment!"
        value={this.state.content}
        required
      />
      <button type="submit">Post Comment!</button>
      <button onClick={this.commentModeOff}>cancel</button>
    </form>
  );

  commentModeOff = () => this.setState({ commentMode: false });
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
