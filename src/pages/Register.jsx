import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import axios from "axios";

function Register(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleRegister(){
        axios.post('https://serverdeployment-ta16.onrender.com/register',{
                name:name,
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
            <h1>Registration page</h1>
            Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br/>
            Email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
            Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
            <button onClick={handleRegister}> Register </button>
            <Link to={"/login"}>Already User ????</Link>
        </center>
        </>
)};

export default Register;