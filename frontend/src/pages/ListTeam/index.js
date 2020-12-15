import React,{useState} from 'react';

import {TeamContent,ContentCards,StudentCard,CloseTeam,UserProjects} from './style';
import NavBar from '../../components/NavMenu';
import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';

import userAvatar from '../../assets/img/perfil-avatar.jpg';

function ListTeam(){
    const [openModal, setOpenModal] = useState(false);

    const projects = ['projeto1','projeto2','projeto3']

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
                <CloseTeam openModal={openModal} onClick={() => setOpenModal(!openModal)}>Finalizar</CloseTeam>
                <Modal openModal={openModal}>
                    <CloseModal openModal={openModal} onClick={() => setOpenModal(!openModal)}/>
                    <UserProjects>
                        {
                            projects.map(project => (
                                <label for={project} className="label-project">
                                    <h4>{project} </h4>
                                    <input className="input-project" type="radio" name="project" id={project}></input>
                                </label>
                            ))
                        }
                    </UserProjects>
                </Modal>
            </ContentCards>
        </TeamContent>
    );
}

export default ListTeam;