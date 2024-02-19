import React from 'react';

const UserComponent = ({users}) => {
    return (
        <tr>
            <td>{users.firstName}</td>
            <td>{users.lastName}</td>
            <td>{users.email}</td>
            <td>{users.state ? "On-Line" : "Off-line"}</td>
        </tr>
    );
}

export default UserComponent;
