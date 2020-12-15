import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterCompany from './pages/RegisterCompany';
import RegisterStudent from './pages/RegisterStudent';
import RegisterProject from './pages/RegisterProject';

function Routes(){
    return(
        <BrowserRouter>
            <PrivateRouter path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/company" exact component={RegisterCompany} />
            <Route path="/student" exact component={RegisterStudent}/>
            <Route path="/project" component={RegisterProject}/>
        </BrowserRouter>
    );
}

export default Routes;