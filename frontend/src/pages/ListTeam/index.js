import React from 'react';

import {TeamContent,ContentCards,StudentCard,CloseTeam} from './style';
import NavBar from '../../components/NavMenu';

import userAvatar from '../../assets/img/perfil-avatar.jpg';

function ListTeam(){
    return(
        <TeamContent>
            <NavBar></NavBar>
            <ContentCards>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Gabriel</h3>
                    <p>gabriel@email.com</p>
                    <button>Remover</button>
                </StudentCard>
                <CloseTeam>Finalizar</CloseTeam>
            </ContentCards>
        </TeamContent>
    );
}

export default ListTeam;