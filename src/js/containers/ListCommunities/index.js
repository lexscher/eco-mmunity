import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { communityActions } from '../../redux/actions';

class ListCommunities extends Component {
  state = {
    showList: false,
    currentCommunity: {}
  }

  componentDidMount() {
    this.props.loadCommunities()
  }

  toggleShowList = () => this.setState({showList: !this.state.showList})

  setCurrentCommunity = community => this.setState({currentCommunity: community })

  render() {
    let communities = this.props.communities.map(community => (
      <Link
        to={`/eco/${community.name}`}
        key={community.name}
        className="community-list-item"
        onClick={() => this.setCurrentCommunity(community)}
      >
        {community.name}
      </Link>
    ));
    return (
      <div>
        <div>{this.state.currentCommunity.name ? this.state.currentCommunity.name : 'Communities' }</div>
        <div className="community-list-container">{communities}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loadCommunities: communityActions.loadCommunities
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCommunities);
