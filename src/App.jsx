import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

function App(){
  return(
    <>
    <BrowserRouter>
      <center>
      <Link to={"/"}><h4>Home</h4></Link>
      <div style={{marginBottom:"170px"}}><h3>Welcome to Cloud data Storage</h3> </div>
      </center>
      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    <footer style={{marginTop:"320px"}}>
      <center>
      <h4>All Rights Reserved @Feroz 2024</h4>
      </center>
    </footer>
    </>
  )
}

export default App;