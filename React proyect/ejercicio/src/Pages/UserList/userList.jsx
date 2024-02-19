import React, {useState} from 'react';
import  {User}  from '../../components/pure/user.class';
import UserComponent from '../../components/user_component';

const UserList = ({verUserList, modificaUserList}) => {
   
    function change() {
        
        
    }
 
 
    return (
        <div>
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Email</td>
                        <td>Estado</td>
                    </tr>
                </thead>
                <tbody>
                {verUserList.map((users,index)=> {
                    return (
                        <UserComponent
                        key={index}
                        users={users}
                        changeState={change}
                       ></UserComponent>
                    )
                })}
                

              
                </tbody>
            </table>
           
        </div>
    );
}

export default UserList;
