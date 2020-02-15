import React from 'react';
import './App.css';

const UserCard = (props) => {
console.log(props)
    return (
        <div>
            <img src={props.user.avatar_url}/>
            <h2>{props.user.name}</h2>
            <h3>{props.user.bio}</h3>
            <h3>Location: {props.user.location}</h3>
            <h3>Blog: {props.user.blog}</h3>
        </div>
    )
}

export default UserCard;