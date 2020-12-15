import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/auth';

import {ContentMenu} from './style';
import userImg from '../../assets/img/perfil-avatar.jpg';

function Menu({open}){

    const { user, logout } = useContext(AuthContext);

    return(
        <ContentMenu open={open}>
            {
                (user) ? (
                    <>
                    <div className="user">
                        <img src={userImg} alt="User" />
                        <h3>{`${(user) ? user.name : ''}`}</h3>
                        {(user.account === 'contractor') ? (
                            <p>{user.companyName}</p>
                        ) : <></>}
                    </div>
                    <ul>
                        <li>Meu Perfil</li>
                        <li>
                            <Link to="/projects">
                                Meus Projetos
                            </Link>
                        </li>
                        <li>Minhas Equipes</li>
                        {(user.account === 'contractor' ? (
                            <li>
                                <Link to="/project">
                                    Criar Projeto
                                </Link>
                            </li>
                        ): <></>)}
                        
                    </ul>

                    <button onClick={logout}>Sair</button>
                    </>
                ) : <></>
            }
            
        </ContentMenu>
    );
}

export default Menu;