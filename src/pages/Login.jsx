import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){
        axios.post('https://serverdeployment-ta16.onrender.com/login',{
                email:email,
                password:password
        }).then((res)=>{
            alert(res.data.message)
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <center>
            <h1>login page</h1>
            Email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
            Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
            <button onClick={handleLogin}>Login </button>
            <Link to={"/register"}>New User ????</Link>
        </center>
        </>
)};

export default Login;