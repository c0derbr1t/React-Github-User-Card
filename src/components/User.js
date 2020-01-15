import React from 'react';

const User = props => {
    console.log(props.user);
    return (
        <div className="user-card">
            <div className="user-image">
                <img src={props.user.avatar_url} alt={props.user.login}/>
            </div>
            <h2><a href={props.user.html_url}>{props.user.login}</a></h2>
            <h4>Company: {props.user.company}</h4>
            <h4>Location: {props.user.location}</h4>
            <p>Repos: {props.user.public_repos}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>Bio: {props.user.bio}</p>
            
        </div>
    )
}

export default User;