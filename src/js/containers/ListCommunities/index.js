import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { communityActions } from '../../redux/actions';

class ListCommunities extends Component {
  componentDidMount() {
    this.props.loadCommunities()
  }
  render() {
    let communities = this.props.communities.map(community => (
      <Link
        to={`/eco/${community.name}`}
        key={community.name}
        className="community-list-item"
      >
        {community.name}
      </Link>
    ));
    return <div className="community-list-container">{communities}</div>;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loadCommunities: communityActions.loadCommunities
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCommunities);
