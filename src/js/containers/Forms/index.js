import React, { Component } from 'react';
import LogIn from './LogIn'
import Register from './Register'


export default class Form extends Component{
  state = {
    loggingIn: true
  }

  toggleFormState = event => {
    this.setState({ loggingIn: !this.state.loggingIn })
  }

  render() {
    return(
    <div className="form-container">
      { this.state.loggingIn ? (<LogIn />):(<Register />) }
      <button onClick={this.toggleFormState}>{ this.state.loggingIn ? ("Don't have an account? Register Here!"):("Already have an account? Log In Here!") }</button>
    </div>
    )
  }
}