import React, { useContext, useEffect, useState } from 'react'

import { Route, Redirect } from 'react-router-dom'

import AuthContext from '../../contexts/auth';

export default function PrivateRouter({ component: Component, ...rest }) {

    const [userAuth, setUserAuth] = useState({});

    const { user } = useContext(AuthContext);

    useEffect(() => {
        setUserAuth(user);
    }, [user]);


    return (
        <Route 
            {...rest}
            render={
                userAuth ? (
                () => <Component />
                ) : (
                () => <Redirect to="/login"/>
                )
            }
        />
    )
}
