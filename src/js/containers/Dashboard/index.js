import React, { Component, Fragment } from 'react';
import ListPosts from '../ListPosts';
import Form from '../Forms/index.js';
import PostForm from '../Forms/PostForm.js';
import Community from '../../presentational/Community';
import Post from '../../presentational/Post';
import { connect } from 'react-redux';
import {
  communityActions,
  postActions,
  commentActions,
  pageActions
} from '../../redux/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.loadAll();
  }
  loop = setInterval(() => this.loadAll(), 3000);

  componentDidUpdate() {
    if (this.props.loggedIn) this.props.changePage('default');
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  loadAll = () => {
    this.props.loadCommunities();
    this.props.loadPosts();
    this.props.loadComments();
    if (this.props.currentPost.id) {
      let postComments = this.props.comments.filter(
        comment => comment.attributes.post.id == this.props.currentPost.id
      );
      console.log(postComments);
      this.props.setCurrentComments(postComments);
      this.props.reloadCurrentPost(this.props.currentPost.id);
    }
  };

  postCreationModeOn = () => this.setState({ postCreationMode: true });
  postCreationModeOff = () => this.setState({ postCreationMode: false });

  render() {
    let postList = [];
    if (this.props.currentCommunity.name) {
      postList = this.props.posts.filter(
        post => post.attributes.community.id == this.props.currentCommunity.id
      );
    } else {
      postList = this.props.posts;
    }
    return (
      <div className="dash">
        {this.props.currentPost.id ? (
          <div className="single-post-container modal">
            <Post />
          </div>
        ) : (
          ''
        )}
        {this.props.pageState == 'assimilation' ? (
          <div className="assimilation-page modal">
            <p
              className="form-container--exit-btn"
              onClick={() => this.props.changePage()}
            >
              close
            </p>
            <Form />
          </div>
        ) : (
          ''
        )}
        <div key={0} className="side-bar">
          {this.props.currentCommunity.name ? (
            <Fragment>
              <Community
                name={this.props.currentCommunity.name}
                description={this.props.currentCommunity.description}
              />
              <PostForm />
            </Fragment>
          ) : (
            ''
          )}
        </div>
        <div key={1} className="list-posts-container">
          {this.props.postsLoaded ? (
            postList.length > 0 ? (
              <ListPosts postList={postList} />
            ) : (
              <h1>Sorry! There aren't any posts in this community yet.</h1>
            )
          ) : (
            'Please wait while we make things better for you... 🌱'
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loadCommunities: communityActions.loadCommunities,
  loadPosts: postActions.loadPosts,
  loadComments: commentActions.loadComments,
  changePage: pageActions.changePage,
  reloadCurrentPost: postActions.reloadCurrentPost,
  setCurrentComments: commentActions.setCurrentComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
