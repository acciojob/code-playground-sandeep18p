import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated }) => {
    return (
        <>
            {authenticated ? <Component /> : <Navigate to="/login" />}
        </>
    );
}

export default PrivateRoute;
