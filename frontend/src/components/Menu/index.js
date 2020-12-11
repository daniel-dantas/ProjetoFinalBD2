import React from 'react';

import {ContentMenu} from './style';
import userImg from '../../assets/img/perfil-avatar.jpg';

function Menu({open}){
    return(
        <ContentMenu open={open}>
            <div className="user">
                <img src={userImg} alt="User" />
                <h3>Jorge Neto Sobrinho</h3>
                <p>Loopis Jr</p>
                
            </div>
            <ul>
                <li>Meu Perfil</li>
                <li>Meus Projetos</li>
                <li>Minhas Equipes</li>
                <li>Criar Projeto</li>
            </ul>

            <button>Sair</button>
        </ContentMenu>
    );
}

export default Menu;