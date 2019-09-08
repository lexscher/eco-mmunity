import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './redux/actions';

// Components
import NavBar from './NavBar';
import Dashboard from './containers/Dashboard';
import Profile from './containers/Profile';
import ListCommunities from './containers/ListCommunities';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <Switch>
        <header className="header">
          <h4>Eco-mmunity</h4>
          <ListCommunities />
          <NavBar />
        </header>
        <Route
          exact
          path="/"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/assimilate"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        {/* user */}
        <Route
          
          path="/user/:username"
          render={routerProps => <Profile {...routerProps} />}
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

const mapDispatchToProps = {
  getCurrentUser: userActions.getCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
