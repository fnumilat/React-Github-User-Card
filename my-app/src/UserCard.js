import React from 'react';
import './App.css';

const UserCard = (props) => {
console.log(props)
    return (
        <div className="My-User-Section">
            <div className="My-User-Image-Section">
                <img className="My-Image" src={props.user.avatar_url}/>
            </div>
            <div className="My-User-Details-Section">
                <h2 className="My-User-Name">{props.user.name}</h2>
                <h3 className="My-User-Details">{props.user.bio}</h3>
                <h3 className="My-User-Details">Location: {props.user.location}</h3>
                <a href= {props.user.blog}><button className="My-User-Details-Button">More About Fnu</button></a>
            </div>
        </div>
    )
}

export default UserCard;