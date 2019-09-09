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

  scrollDropDown = event => {
    // if client y greater than 200 scroll down
    if (event.clientY > 200 ) {
      event.currentTarget.scrollTo(event.clientX, event.clientY + 5 )
      // if client y less than 100 scroll up
    } else if( event.clientY < 100 ) {
      event.currentTarget.scrollTo(event.clientX, event.clientY - 5 )
    }
  }

  showList = () => this.setState({ showList: true });
  hideList = () => this.setState({ showList: false });

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
      <div className="dropdown" onMouseEnter={this.showList} onMouseLeave={this.hideList}>
        <h3 className="dropdown-toggler">
          Communities
        </h3>
        {this.state.showList ? (
          <div className="community-list-container dropdown-content" onMouseMove={this.scrollDropDown}>
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
