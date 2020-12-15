import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Route, Redirect } from 'react-router-dom'

import AuthContext from '../../contexts/auth';

export default function PrivateRouter({ component: Component, ...rest }) {

    const { user } = useContext(AuthContext);

    return (
        <Route 
            {...rest}
            render={
                user ? (
                () => <Component />
                ) : (
                () => <Redirect to="/login"/>
                )
            }
        />
    )
}
