import React from 'react';


import BurguerIcon from '../BurguerIcon';
import {NavBar} from './style';
import teamIcon from '../../assets/icon/team-icon.png';

import { Link } from 'react-router-dom';

function NavMenu(){

    return(
        <NavBar>
            <BurguerIcon></BurguerIcon>
            <Link to='/'>
                <h2>Contrata meu aluno</h2>
            </Link>

            <Link to='/team'>
                <img src={teamIcon} alt="team"></img>
            </Link>
        </NavBar>
    );
}

export default NavMenu;