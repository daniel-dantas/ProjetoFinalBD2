import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterCompany from './pages/RegisterCompany';
import RegisterStudent from './pages/RegisterStudent';
import Profile from './pages/Profile';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/company" component={RegisterCompany} />
            <Route path="/student" component={RegisterStudent}/>
            <Route path="/profile" component={Profile} /> 
        </BrowserRouter>
    );
}

export default Routes;