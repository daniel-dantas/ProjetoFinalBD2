import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterCompany from './pages/RegisterCompany';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/company" exact component={RegisterCompany} />
        </BrowserRouter>
    );
}

export default Routes;