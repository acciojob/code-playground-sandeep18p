import React from 'react'

const Login = ({handleClick,handleOut,authenticate}) => {
  return (
    <div>
        <p>Login</p>
        <button onClick={()=>{authenticate?handleOut():handleClick()}}>{authenticate?"Log Out":"Log In"}</button>
    </div>
  )
}

export default Login