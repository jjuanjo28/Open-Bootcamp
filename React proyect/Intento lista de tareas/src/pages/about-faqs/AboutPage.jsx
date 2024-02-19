import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {  useNavigate } from "react-router-dom"
const AboutPage = () => {
   
    const navigate = useNavigate()
  

    const goTo = (path) => {
       navigate(path)
    }
   
    
    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <button onClick={()=>goTo("/")} >Home</button>
            <button onClick={()=>goTo(-1)}>Back</button>
            <button onClick={()=>goTo(+1)}>Go Forward</button>
        </div>
    );
}

export default AboutPage;
