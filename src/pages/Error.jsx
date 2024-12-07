import React from "react";
import { Link } from "react-router-dom";

function Error(){
    return(
        <>
        <center>
        <h1> Error 404 </h1>
        <Link to={"/"}> Go to Home </Link>
        </center>
        </>

)};

export default Error;