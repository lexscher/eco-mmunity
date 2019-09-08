import React from 'react';

// Will get "Current Community" that we will get when we click on
// community List Item in the ListsCommunities container.
// Filter posts based on community_id attribute
const Community = ({ name, description }) => {
  return (
    <div className="community">
      <h1>{name}</h1>
      <h4>{description}</h4>
    </div>
  );
};

export default Community;
