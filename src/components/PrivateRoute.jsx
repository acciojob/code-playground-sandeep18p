import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticate }) => {
    return (
        <>
            {authenticate ? <Component /> : <Navigate to="/login" />}
        </>
    );
}

export default PrivateRoute;
