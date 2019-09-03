import React, { Component, Fragment } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Fragment>
        <header className="header nav-bar">Header</header>
        <div className="body">body tea</div>
      </Fragment>
    )
  }
}