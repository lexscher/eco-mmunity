import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {this.props.loggedIn ? (
          <Link>Log Out</Link>
        ) : (
          <Link to="/registration">Log In</Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NavBar);
