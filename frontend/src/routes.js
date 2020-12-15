import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterCompany from './pages/RegisterCompany';
import RegisterStudent from './pages/RegisterStudent';
import Profile from './pages/Profile';
import RegisterProject from './pages/RegisterProject';
import ListProjects from './pages/ListProjects';
import ListTeam from './pages/ListTeam';

function Routes(){
    return(
        <BrowserRouter>
            <PrivateRouter path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/company" exact component={RegisterCompany} />
            <Route path="/student" exact component={RegisterStudent}/>
            <Route path="/profile" component={Profile} /> 
            <Route path="/project" component={RegisterProject}/>
            <Route patch="/projects" component={ListProjects} />
            <Route patch="/team" component={ListTeam} />
        </BrowserRouter>
    );
}

export default Routes;