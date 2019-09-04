import React, { Component } from 'react';
import ListPosts from '../ListPosts';
import { connect } from 'react-redux';

class Dashboard extends Component {


  filterPosts = () => {};

  render() {
    return (
      <div className="dash">
        <div className="side-bar">List of Community Names</div>
        <div className="list-posts-container">
          <h1>Click on a community to see it's posts</h1>
          <ListPosts posts={this.props.posts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
