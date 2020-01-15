import React from 'react';

const People = props => {
    console.log(props.item);
    return (
        <div className='person-card'>
            <div>
                <img src={props.item.avatar_url} alt={props.item.login}/>
            </div>
            <h3><a href={props.item.html_url}>{props.item.login}</a></h3>
        </div>
    )
}

export default People;
