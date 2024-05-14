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
                    <p>Login</p>
                    <button onClick={handleClick}>Login</button>
                </>
            )}
        </>
    );
}

export default Login;
