import React from 'react';
import FriendsCard from './FriendsCard';

const FriendsList = props => {
  console.log(props);
  return (
      <div>
        {props.friends.map(friend => (
            <FriendsCard
            friend={friend}
            />
        ))}
        <h1>Friends List</h1>
        
        
      </div>
    
  )
}

export default FriendsList;