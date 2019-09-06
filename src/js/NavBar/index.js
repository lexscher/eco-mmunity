import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';
import { connect } from 'react-redux';
import { pageActions } from '../redux/actions'

class NavBar extends Component {


  render() {
    return (
      <nav className="nav-bar">
        <Link to="/" onClick={() => store.dispatch(this.props.changePage('default'))}>Home</Link>
        {this.props.loggedIn ? (
          [<Link to="/profile">Profile</Link>, <Link>Log Out</Link>]
        ) : (
          <Link to="/assimilate" onClick={() => store.dispatch(this.props.changePage('assimilation'))}>Log In</Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  changePage: pageActions.changePage
};

export default connect(mapStateToProps)(NavBar);
