import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render(){
    let {first_name, last_name, username, email } = this.props.currentUser
    return(
      <div className="user-profile-container">
        <h1>Welcome {first_name} {last_name}!</h1>
        <p>USERNAME: {username} </p>
        <p>E-MAIL: {email} </p>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Profile)