import React from 'react'
import { useParams } from 'react-router-dom'
import './Users.css'

const Users = ({ data }) => {
    const { name } = useParams();
    return (
        <div className="users">
            <h1>{name}</h1>
            {data.filter((results) => results.name === name).map((item, index) => (
                <div key={index} className="users__h3">
                    <h3>Height: {item.height} cm</h3>
                    <h3>Weight: {item.mass} kg</h3>
                    <h3>Gender: {item.gender}</h3>
                    <h3>Hair Color: {item.hair_color}</h3>
                    <h3>Skin Color: {item.skin_color}</h3>
                </div>
            ))}
        </div>
    )
}
export default Users;
