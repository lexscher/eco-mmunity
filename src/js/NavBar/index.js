import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  pageActions,
  userActions,
  communityActions,
  postActions,
  commentActions
} from '../redux/actions';

class NavBar extends Component {
  resetCurrent = () => {
    this.props.resetCurrentCommunity();
    this.props.resetCurrentPost();
    this.props.resetCurrentComments();
    this.props.changePage('default');
  };
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/eco-mmunity" onMouseUp={() => this.resetCurrent()}>
          Home
        </Link>
        {this.props.loggedIn ? (
          [
            <Link
              to={`/eco-mmunity/user/${this.props.currentUser.username}`}
              key={0}
              onMouseUp={() => this.resetCurrent()}
            >
              {this.props.currentUser.username}
            </Link>,
            <Link
              key={1}
              to="/eco-mmunity"
              onClick={() => this.props.signOut()}
              onMouseUp={() => this.resetCurrent()}
            >
              Log Out
            </Link>
          ]
        ) : (
          <Link
            to="/eco-mmunity/assimilate"
            onClick={() => this.props.changePage('assimilation')}
          >
            Log In
          </Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  changePage: pageActions.changePage,
  signOut: userActions.signOut,
  resetCurrentCommunity: communityActions.resetCurrentCommunity,
  resetCurrentPost: postActions.resetCurrentPost,
  resetCurrentComments: commentActions.resetCurrentComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
