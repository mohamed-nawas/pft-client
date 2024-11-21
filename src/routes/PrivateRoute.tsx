import React from "react";
import { useAppSelector } from "@redux/hooks";
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
    component: React.ComponentType<any>;
}

export default function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
    const token = useAppSelector((state) => state.user.token);

    // React.useEffect(() => {
    //     console.log(`token => ${token}`)
    // }, [token])

    return (
        <Route {...rest} render={(props) => token !== "" ? <Component {...props} /> : <Redirect to='/login' /> } />
    )
}