import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { store } from './redux/store';
import { connect } from 'react-redux';

// Components
import NavBar from './NavBar';
import Dashboard from './containers/Dashboard';

class App extends Component {
  componentDidMount() {
    this.loadCommunities();
    this.loadPosts();
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

  loadPosts = () => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
        store.dispatch(this.setPosts(posts));
      })
      .catch(err => console.error(err.stack));
  };

  setPosts = posts => ({
    type: 'SET_POSTS',
    payload: posts
  });

  render() {
    let communityNames = this.props.communities.map(({ id, name }) => (
      <h1 key={id}>{name}</h1>
    ));
    return (
      <Switch>
        <header key={0} className="header nav-bar">
          <NavBar />
        </header>
        <Route
          exact
          path="/"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/profile"
          render={routerProps => (
            <div {...routerProps}>filler: User Profile</div>
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
