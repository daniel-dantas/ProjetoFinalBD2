import React from 'react';
import {BrowserRouter,Route, Router, Switch} from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterCompany from './pages/RegisterCompany';
import RegisterStudent from './pages/RegisterStudent';
import Profile from './pages/Profile';
import RegisterProject from './pages/RegisterProject';
import ListProjects from './pages/ListProjects';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRouter path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/company" exact component={RegisterCompany} />
                <Route path="/student" exact component={RegisterStudent}/>
                <PrivateRouter exact path="/profile" component={Profile} /> 
                <PrivateRouter exact path="/project" component={RegisterProject} />
                <PrivateRouter exact path="/projects"  component={ListProjects} />
            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;