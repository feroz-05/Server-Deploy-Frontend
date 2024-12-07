import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <center>
            <h1>Home</h1>
            <Link to={"/login"}> Login Page</Link><br /><br />
            <Link to={"/register"}> Register Page </Link>
        </center>
)};

export default Home;