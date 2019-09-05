import React, { Component } from 'react';
import ListPosts from '../ListPosts';
import Form from '../Forms';
import { connect } from 'react-redux';

class Dashboard extends Component {
  filterPosts = () => {};

  render() {
    return (
      <div className="dash">
        {this.props.pageState == 'assimilation' ? (
          <Form />
        ) : (
          [
            <div key={0} className="side-bar">List of Community Names</div>,
            <div key={1} className="list-posts-container">
              <h1>Click on a community to see it's posts</h1>
              <ListPosts posts={this.props.posts} />
            </div>
          ]
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);