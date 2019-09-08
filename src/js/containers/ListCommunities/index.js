import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListCommunities extends Component {
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

export default connect(mapStateToProps)(ListCommunities);
