import React from 'react';

import People from './People';

//people
//user

const PeopleList = props => {

    console.log(props.people[0])
    return(
        <div className="people-div">
            {props.people.map(item => (
                <People key={item.id} item={item} />
            ))}
        </div>
    )
}

export default PeopleList