import React from 'react'

const Login = ({handleClick,handleOut,authenticated}) => {
  return (
    <div>
        <p>Login</p>
        <button onClick={()=>{authenticated?handleOut():handleClick()}}>{authenticated?"Log Out":"Log In"}</button>
    </div>
  )
}

export default Login