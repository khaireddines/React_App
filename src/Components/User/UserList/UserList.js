import React from 'react';
import Stars from "../../Stars/Stars";
import UserCell from "../Usercell/UserCell";

const UserList = ({Personnel}) => {
    return (
        <div>
            {Personnel.map((Person, index) => {
                return (
                    <UserCell Person={Person} Index={index} />
                )
            })}
        </div>
    );
}

export default UserList;