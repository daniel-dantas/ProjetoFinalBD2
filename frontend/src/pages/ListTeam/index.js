import React,{useState, useEffect, useContext} from 'react';

import {TeamContent,ContentCards,StudentCard,CloseTeam,UserProjects} from './style';
import NavBar from '../../components/NavMenu';
import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';

import userAvatar from '../../assets/img/perfil-avatar.jpg';

import AuthContext from '../../contexts/auth';

import API from '../../services/api';

function ListTeam(){
    const [openModal, setOpenModal] = useState(false);
    const projects = ['projeto1','projeto2','projeto3'];

    const [id, setId] = useState('');

    const { token } = useContext(AuthContext);

    const [egreesList, setEgressList] = useState([]); 

    useEffect(() => {

        API.get('/team/read/', {
            headers: { Authorization: `Bearer ${token}` },
        }).then(resp => {
            setEgressList(resp.data);
        }).catch(err => {
            console.log(err);
        });

    }, [id]);

    const removeDev = (id) => {
        API.post('/team/remove', {egress: id}, {headers: { Authorization: `Bearer ${token}` }}).then(() => {
            setId(id);
        }).catch(err => {

        });
    }

    return(
        <TeamContent>
            <NavBar></NavBar>
            
            <ContentCards>
                {egreesList.map(egress => (
                    <StudentCard key={egress.id}>
                        <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                        <h3>{egress.name} {egress.surname}</h3>
                        <p>{egress.email}</p>
                        <button onClick={() => removeDev(egress.id)}>Remover</button>
                    </StudentCard>
                ))}
                <CloseTeam openModal={openModal} onClick={() => setOpenModal(!openModal)}>Finalizar</CloseTeam>
                <Modal openModal={openModal}>
                    <CloseModal openModal={openModal} onClick={() => setOpenModal(!openModal)}/>
                    <UserProjects>
                        {
                            projects.map(project => (
                                <label htmlFor={project} className="label-project">
                                    <h4>{project} </h4>
                                    <input className="input-project" type="radio" name="project" id={project}></input>
                                </label>
                            ))
                        }
                        <button>Concluido</button>
                    </UserProjects>
                </Modal>
            </ContentCards>
        </TeamContent>
    );
}

export default ListTeam;