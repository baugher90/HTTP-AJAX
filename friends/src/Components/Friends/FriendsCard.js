import React from 'react';

const FriendsCard = props =>{
    return(
        <div>
            <h3>Name: {props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <i>Email: {props.friend.email}</i>
        </div>
        
    )
}

export default FriendsCard;