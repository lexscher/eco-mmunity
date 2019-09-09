import React, { Component } from 'react';
import ListPosts from '../ListPosts';
import Form from '../Forms';
import Community from '../../presentational/Community';
import { connect } from 'react-redux';
import { communityActions, postActions } from '../../redux/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    let postList = [];
    if (this.props.currentCommunity.name) {
      postList = this.props.posts.filter(
        post => post.community_id == this.props.currentCommunity.id
      );
    } else {
      postList = this.props.posts;
    }
    return (
      <div className="dash">
        {this.props.pageState == 'assimilation' ? (
          <Form />
        ) : (
          [
            <div key={0} className="side-bar">
              {/* If  */}
              {this.props.currentCommunity.name ? (
                <Community
                  name={this.props.currentCommunity.name}
                  description={this.props.currentCommunity.description}
                />
              ) : (
                ''
              )}
            </div>,
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
          ]
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loadCommunites: communityActions.loadCommunities,
  loadPosts: postActions.loadPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
