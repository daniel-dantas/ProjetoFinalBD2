import React from 'react';


import BurguerIcon from '../BurguerIcon';
import {NavBar} from './style';
import teamIcon from '../../assets/icon/team-icon.png';

function NavMenu(){

    return(
        <NavBar>
            <BurguerIcon></BurguerIcon>
            <h2>Contrata meu aluno</h2>
            <img src={teamIcon} alt="team"></img>
        </NavBar>
    );
}

export default NavMenu;