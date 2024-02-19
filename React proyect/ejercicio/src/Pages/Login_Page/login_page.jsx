import React from 'react';
import { Button } from '@mui/material';
import { useNavigate} from "react-router-dom"
const LoginPage = ({verObjeto,modificarObjeto}) => {

    const navigate = useNavigate()
    return (
        <div>
         <Button onClick={()=>console.table(verObjeto)}>ver array</Button>
            <h1>Soy Login</h1>
           <Button onClick={()=>navigate("/userList")}>User List</Button>
        </div>
    );
}

export default LoginPage;
