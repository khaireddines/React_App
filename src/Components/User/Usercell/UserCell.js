import React, {useEffect, useState} from 'react'
import Stars from '../../Stars/Stars';
import './UserCell.css';
import {useParams} from 'react-router-dom';

let UserCell = ({Person, Index, Details =false, Data}) => {
    const Male = 'male'
    let params = useParams();
    const [PersonDetails, setPersonDetails] = useState({
        gender:'',
        name:'',
        age:'',
        address:'',
        phone:'',
        email:''
    });
    useEffect(()=>{
        if (Details)
            setPersonDetails(Data.find((person)=> person.name === params.name));
        else
            setPersonDetails(Person);
    });
    return (
        <div>
            <div className={'UserCell'} key={Index}>
                <div className={'Title'}>
                    <span
                        className={'names'}> <strong>Full Name:</strong> {(PersonDetails.gender === Male) ? 'Mr.' : 'Ms. '} {PersonDetails.name} </span>
                    <span> <strong>Age:</strong> {PersonDetails.age} </span>
                </div>
                <div className={'Body'}>
                    <div><strong>Address:</strong>{PersonDetails.address} </div>
                    <div><strong>Phone:</strong> {PersonDetails.phone} </div>
                    <div><strong>Email:</strong> {PersonDetails.email} </div>
                </div>
                <div className={'Footer'}>
                    <span> <strong>Balance:</strong> {PersonDetails.balance} </span>
                    <span className={'Ratings'}> <strong>Likes:</strong> {PersonDetails.likes}, <strong>Rating:</strong> <Stars
                        Stars={PersonDetails.rating}/></span>
                </div>
            </div>
        </div>
    )
}

export default UserCell
