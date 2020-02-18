import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const FollowersCard = (props) => {
console.log("props", props)



    return (
        <>
        <h1 className="Followers-Title">Followers:</h1>
        <div className="Followers-Section">         
            {props.followers.map(follower => {
                return(
                    <div className="Follower-Box">
                        <img className="Followers-Image" src={follower.avatar_url}/>
                        <h1 className="Followers-Details">{follower.login}</h1>
                        <a href={follower.html_url}><button className="Followers-Details-Button">Visit the Github</button></a>  
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default FollowersCard;