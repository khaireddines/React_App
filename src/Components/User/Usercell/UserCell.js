import React from 'react'
import './UserCell.css';

let UserCell = ({Personnel}) => {
    const Male = 'male'
    return (
        <div>
            {Personnel.map((Person, index) => {
                    return (
                        <div className={'UserCell'} key={index} >
                            <div className={'Title'}>
                                <span> <strong>Full Name:</strong> {(Person.gender === Male)?'Mr.':'Ms. '} {Person.name} </span>
                                <span> <strong>Age:</strong> {Person.age} </span>
                            </div>
                            <div className={'Body'}>
                                <span> <strong>Address:</strong>{Person.address} </span>
                                <span> <strong>Phone:</strong> {Person.phone} </span>
                                <span> <strong>Email:</strong> {Person.email} </span>
                            </div>
                            <div className={'Footer'}>
                                <span> <strong>Balance:</strong> {Person.balance} </span>
                                <span> <strong>Likes:</strong> {Person.likes}, <strong>Rating:</strong> {Person.rating} </span>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default UserCell
