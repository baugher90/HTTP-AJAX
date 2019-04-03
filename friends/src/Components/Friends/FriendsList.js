import React from 'react';
import FriendsCard from './FriendsCard';

const FriendsList = props => {
  console.log(props);
  return (
      <div>
        <h1>Friends List</h1>
        {props.friends.map(friend => (
            <FriendsCard
            friend={friend}
            />
        ))}
      </div>
    
  )
}

export default FriendsList;