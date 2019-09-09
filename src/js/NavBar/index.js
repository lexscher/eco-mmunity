import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageActions, userActions, communityActions, postActions } from '../redux/actions';

class NavBar extends Component {

  resetCurrent = () => {
    this.props.resetCurrentCommunity()
    this.props.resetCurrentPost()
    this.props.changePage('default')
  }
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/" onMouseUp={() => this.resetCurrent()}>
          Home
        </Link>
        {this.props.loggedIn ? (
          [
            <Link to={`/user/${this.props.currentUser.username}`} key={0}>
              {this.props.currentUser.username}
            </Link>,
            <Link key={1} to="/" onClick={() => this.props.signOut()}>
              Log Out
            </Link>
          ]
        ) : (
          <Link
            to="/assimilate"
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
  resetCurrentPost: postActions.resetCurrentPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
