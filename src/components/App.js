
import React from "react";
import './../styles/App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { useState } from "react";
import Login from "./Login"
import Authenticate from "./Authenticate"
import PrivateRoute from "./PrivateRoute";
import Error from "./Error";


const App = () => {
  const [authenticate,setAuthenticate]=useState(false);

  const handleClick =()=>{
    console.log("call c")
   setAuthenticate(true);
  }
  const handleOut =()=>{
    console.log("call o")
    setAuthenticate(false);

   }
 

  return (
    <div className="main-container">
    <Router>
      <div>{authenticate ? "Logged in, Now you can enter Playground":"You are not authenticated, Please login first" }</div>
      <ul>
          <li><Link to="/playground">PlayGround</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <Routes>
          <Route path="login" element={<Login handleClick={handleClick} handleOut={handleOut} authenticate={authenticate}/>}/>
          <Route path="playground" element={<PrivateRoute component={Authenticate} authenticate={authenticate}/>}></Route>
          <Route path="*" element={<Error/>} />
        </Routes>
       
    </Router>
    </div>
  )
}

export default App
