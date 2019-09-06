import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import NavBar from './NavBar';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <Switch>
        <header className="header nav-bar">
          <NavBar />
        </header>
        <Route
          path="/"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        {/* user */}
        <Route
          path="/user/:username"
          render={routerProps => (
            <div {...routerProps}>
              filler: Users Profile,things they liked/dis-liked/saved
            </div>
          )}
        />
        <Route
          path="/user/:username/communities"
          render={routerProps => (
            <div {...routerProps}>filler: Users communities</div>
          )}
        />
        <Route
          path="/user/:username/posts"
          render={routerProps => (
            <div {...routerProps}>filler: Users posts</div>
          )}
        />
        <Route
          path="/user/:username/comments"
          render={routerProps => (
            <div {...routerProps}>filler: Users comments</div>
          )}
        />
        {/* Community */}
        <Route
          path="/eco/:community"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/eco/:community/edit"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        {/* Comments on a Post/single post */}
        <Route
          path="/eco/:community/comments/:postId/:postSlug"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/eco/:community/comments/:postId/:postSlug/edit"
          render={routerProps => <Dashboard {...routerProps} />}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
