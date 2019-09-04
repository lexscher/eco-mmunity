import React, { Component, Fragment } from 'react';
import { store } from './store';
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount() {
    this.loadCommunities();
  }

  loadCommunities = () => {
    fetch('http://localhost:3000/communities')
      .then(res => res.json())
      .then(communities => {
        store.dispatch(this.setCommunities(communities));
      })
      .catch(err => console.error(err.stack));
  };

  setCommunities = communities => ({
    type: 'SET_COMMUNITIES',
    payload: communities
  });


  render() {
    let communityNames = this.props.communities.map(({id, name}) => (<h1 key={id}>{name}</h1>))
    return (
      <Fragment>
        <header className="header nav-bar">Header</header>
        <div className="body">{communityNames}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)