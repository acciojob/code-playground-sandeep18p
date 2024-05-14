
import React from "react";
import './../styles/App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { useState } from "react";
import Login from "./Login"
import Playground from "./Playground"
import PrivateRoute from "./PrivateRoute";
import Error from "./Error";


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleClick =()=>{
    console.log("call c")
   setAuthenticated(true);
  }
  const handleOut =()=>{
    console.log("call o")
    setAuthenticated(false);

   }
 

  return (
   
    <Router>
       <div className="main-container">
      <div>{authenticated ? "Logged in, Now you can enter Playground":"You are not authenticated, Please login first" }</div>
      <ul>
          <li><Link to="/playground">PlayGround</Link></li>
          <li><Link to="/login">Login</Link></li>
          
        </ul>
        <Routes>
          <Route path="login" element={<Login handleClick={handleClick} handleOut={handleOut} authenticated={authenticated}/>}/>
          <Route path="" element={<Login handleClick={handleClick} handleOut={handleOut} authenticated={authenticated}/>}/>
          <Route path="playground" element={<PrivateRoute component={Playground} authenticated={authenticated}/>}></Route>
          <Route path="*" element={<Error/>} />
        </Routes>
        </div>
    </Router>
 
  )
}

export default App
