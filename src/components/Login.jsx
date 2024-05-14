import React from "react";

const Login = ({ handleClick, handleOut, authenticate }) => {
    return (
        <>
            {authenticate ? (
                <>
                    <p>Login</p>
                    <button onClick={handleOut}>Logout</button>
                </>
            ) : (
                <>
                    <p>You are not log in, click here below to log In</p>
                    <button onClick={handleClick}>Login</button>
                </>
            )}
        </>
    );
}

export default Login;
