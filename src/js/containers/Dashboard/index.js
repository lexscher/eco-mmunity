import React, { Component } from 'react';
import ListPosts from '../ListPosts';
import Form from '../Forms';
import { connect } from 'react-redux';
import { communityActions, postActions } from '../../redux/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <div className="dash">
        {this.props.pageState == 'assimilation' ? (
          <Form />
        ) : (
          [
            <div key={0} className="side-bar">
              List of Community Names
            </div>,
            <div key={1} className="list-posts-container">
              <h1>Click on a community to see it's posts</h1>
              {this.props.postsLoaded ? (
                <ListPosts posts={this.props.posts} />
              ) : (
                'Please wait while we make things better for you... 🍺'
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
