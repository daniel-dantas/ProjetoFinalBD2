import React, { useContext } from 'react'

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
