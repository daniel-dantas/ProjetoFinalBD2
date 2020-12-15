import React, { useContext } from 'react';

import AuthContext from '../../contexts/auth';

import {ContentMenu} from './style';
import userImg from '../../assets/img/perfil-avatar.jpg';

function Menu({open}){

    const { user, logout } = useContext(AuthContext);

    return(
        <ContentMenu open={open}>
            <div className="user">
                <img src={userImg} alt="User" />
                {/* <h3>{`${user.name}`}</h3> */}
                <p>Loopis Jr</p>
            </div>
            <ul>
                <li>Meu Perfil</li>
                <li>Meus Projetos</li>
                <li>Minhas Equipes</li>
                <li>Criar Projeto</li>
            </ul>

            <button onClick={logout}>Sair</button>
        </ContentMenu>
    );
}

export default Menu;