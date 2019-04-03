import React from 'react';

const FriendsList = props => {
  console.log(props);
  return (
      <div>
        {props.friends.map(friend => (
            <div>{friend.name}</div>
        ))}
        <h11>Friends List</h11>
        
      </div>
    
  )
}

export default FriendsList;