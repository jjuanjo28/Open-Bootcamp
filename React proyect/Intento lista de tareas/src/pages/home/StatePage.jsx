import React from 'react';
import {useLocation} from "react-router-dom"

const StatePage = () => {

    const location = useLocation()
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    let paramsPass = params.get("online")
    if(paramsPass === "true"){
      paramsPass = true
    } else {
      paramsPass = false
    }
    console.log("Soy paramsPass: ",paramsPass)
    
   
  console.log(location)
   console.log("location State: ",location.state.online) // State sent
  console.log("Query params",params.get("online")) // Query Params sent
    return (
        <div>
        <h1>State : {location.state.online ? "the user is onLine":"offLine"}</h1>
        <h1>Query Params : {paramsPass ? "the user is onLine":"offLine"}</h1>
        </div>
    );
}

export default StatePage;
