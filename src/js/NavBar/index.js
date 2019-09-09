import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageActions, userActions, communityActions } from '../redux/actions';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/" onClick={() => this.props.changePage('default')} onMouseUp={() => this.props.resetCurrentCommunity()}>
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
  resetCurrentCommunity: communityActions.resetCurrentCommunity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
