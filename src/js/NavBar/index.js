import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageActions, userActions } from '../redux/actions';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/" onClick={() => this.props.changePage('default')}>
          Home
        </Link>
        {this.props.loggedIn ? (
          [
            <Link to={`/user/${this.props.currentUser.username}`} key={0}>
              Profile
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
  signOut: userActions.signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
