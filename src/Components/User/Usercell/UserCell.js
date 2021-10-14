import React from 'react'
import Stars from '../../Stars/Stars';
import './UserCell.css';

let UserCell = ({Personnel}) => {
    const Male = 'male'
    return (
        <div>
            {Personnel.map((Person, index) => {
                    return (
                        <div className={'UserCell'} key={index} >
                            <div className={'Title'}>
                                <span className={'names'}> <strong>Full Name:</strong> {(Person.gender === Male)?'Mr.':'Ms. '} {Person.name} </span>
                                <span> <strong>Age:</strong> {Person.age} </span>
                            </div>
                            <div className={'Body'}>
                                <div> <strong>Address:</strong>{Person.address} </div> 
                                <div> <strong>Phone:</strong> {Person.phone} </div>
                                <div> <strong>Email:</strong> {Person.email} </div>
                            </div>
                            <div className={'Footer'}>
                                <span> <strong>Balance:</strong> {Person.balance} </span>
                                <span className={'Ratings'} > <strong>Likes:</strong> {Person.likes}, <strong>Rating:</strong> <Stars Stars={Person.rating}/></span>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default UserCell
