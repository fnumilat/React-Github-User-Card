import React from 'react';
import './App.css';

const FollowersCard = (props) => {
console.log("props", props)
    return (
        <div>
            <h1>Followers:</h1>
            {props.followers.map(follower => {
                return(
                    <div>
                        <img src={follower.avatar_url}/>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;