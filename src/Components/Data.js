import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
import People from './People'
import "./Data.css"

const Data = ({ data, status }) => {
    const [userInput, setUserInput] = useState("")
    const [selectedUser, setSelectedUser] = useState("")
    console.log(selectedUser);
    return (
        <div>
            <div className="data__input">
                <SearchIcon className="data__inputIcon" />
                <input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    type="text"
                    placeholder="Search Tasks"
                />
                <MoreVertIcon />
            </div>

            <div className="data">
                {status === 'loading' && (
                    <h2>Data is Loading</h2>
                )}
                {status === 'error' && (
                    <h3>Error in Fetching Data </h3>
                )}
                {status === 'success' && (
                    <div>
                        {data.filter((results) => {
                            if (userInput === "") {
                                return results
                            }
                            else if (
                                results.name.toLowerCase().includes(userInput.toLowerCase())) {
                                return results
                            }
                        }).map((people) =>
                            <Link to={`/users/${people.name}`} key={people.name} className="data__link">
                                <People id={people.name} people={people} onClick={() => setSelectedUser(people)}
                                    key={people.name} />
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Data
