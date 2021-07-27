import React from 'react'
import './People.css'

function People({ people }) {
    return (
        <div className="people">
            <div className="people__name">
                <h3>{people.name}</h3>
            </div>
            <div className="people__birth">
                <span>{people.skin_color}</span>
            </div>
            <div className="people__gender">
                <p>{people.gender}</p>
            </div>
        </div>
    )
}

export default People
