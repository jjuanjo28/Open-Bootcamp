import React from 'react';
import { Button } from "@mui/material";
import Copyright from '../../components/pure/Copyright';
import { useNavigate } from 'react-router-dom';
import MenuListItem from '../../components/pure/MenuListComponent';
const DashBoard = () => {
   const navigate = useNavigate() 
    
    const logout = () => {
      navigate("/login")
    }
    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright/>
            
        </div>
    );
}

export default DashBoard;
