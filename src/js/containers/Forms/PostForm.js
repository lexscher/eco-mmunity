import React, { Component } from 'react';
import useForm from './FormHooks';
import { connect } from 'react-redux';
import {
  commentActions,
  postActions,
  communityActions
} from '../../redux/actions';

class PostForm extends Component {
  state = {
    title: '',
    content: '',
    postCreationMode: false
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    // Prevent default page reload action
    event.preventDefault();

    // Set title, content, and community ID in order to create a post
    let title = event.target.title.value;
    let content = event.target.content.value;
    let communityId = this.props.currentCommunity.id;
    this.props.createPost(title, content, communityId);
    // Reset the form
    let reset = event => {
      this.setState({ title: '', content: '' });
    };
    setTimeout(reset(event), 5050);
  };

  stopConsoleFromGettingAngry = () => 'Smile';

  createForm = () => (
    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <input
        className="create-post--input"
        type="text"
        name="title"
        placeholder="Title your Post!"
        value={this.state.title}
        onChange={this.stopConsoleFromGettingAngry}
        required
      />
      <textarea
        type="text"
        name="content"
        placeholder="Express yourself!"
        value={this.state.content}
        onChange={this.stopConsoleFromGettingAngry}
        required
      />
      <button type="submit">Create a Post!</button>
      <button onClick={this.postCreationModeOff}>cancel</button>
    </form>
  );

  postCreationModeOff = () =>
    this.setState({ postCreationMode: false, title: '', content: '' });
  postCreationModeOn = () => this.setState({ postCreationMode: true });

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          this.state.postCreationMode ? (
            this.createForm()
          ) : (
            <button onClick={this.postCreationModeOn}>Create a Post!</button>
          )
        ) : (
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <button type="submit" disabled>
              Log In to post in './eco/{this.props.currentCommunity.name}'
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
  createPost: postActions.createPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
