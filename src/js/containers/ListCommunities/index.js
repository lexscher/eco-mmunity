import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { communityActions } from '../../redux/actions';

class ListCommunities extends Component {
  state = {
    showList: false
  };

  componentDidMount() {
    this.props.loadCommunities();
  }

  toggleShowList = () => this.setState({ showList: !this.state.showList });

  render() {
    let allCommunities = (
      <Link
        to="/"
        key={`all`}
        className="community-list-item"
        onClick={() => this.props.resetCurrentCommunity()}
      >
        All
      </Link>
    );
    let communities = this.props.communities.map(community => (
      <Link
        to={`/eco/${community.name}`}
        key={community.name}
        className="community-list-item"
        onClick={() => this.props.setCurrentCommunity(community)}
      >
        {community.name}
      </Link>
    ));
    return (
      <div>
        <div onClick={this.toggleShowList}>
          {this.props.currentCommunity.name
            ? this.props.currentCommunity.name
            : 'Communities'}
        </div>
        {this.state.showList ? (
          <div className="community-list-container">
            {allCommunities}
            {communities}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loadCommunities: communityActions.loadCommunities,
  setCurrentCommunity: communityActions.setCurrentCommunity,
  resetCurrentCommunity: communityActions.resetCurrentCommunity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCommunities);
