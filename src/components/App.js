
import React, { useState } from "react";
// import './../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

import Error from "./Error";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };
  return (
    <BrowserRouter>
      <div className="main-container">
      <div>{authenticated?"Logged in, Now you can enter Playground":"You are not authenticated, Please login first"}</div>
        <ul>
          <li><Link to="/playground">PlayGround</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        
        <Routes>
          {/* <Route to="/" element={<HomePage/>}> */}
            <Route path="/login" element={<Login handleLogin={handleLogin} handleLogout={handleLogout} authenticated={authenticated} />}></Route>
            <Route path="/playground" element={<PrivateRoute Component={Playground} authenticated={authenticated} />} />
            <Route path="*" element={<Error/>} />
            {/* </Route> */}
        </Routes>
      
     
      </div>
    </BrowserRouter>
  )
}

export default App