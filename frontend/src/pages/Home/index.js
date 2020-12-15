import React, {useEffect, useState, useContext} from 'react';

import NavBar from '../../components/NavMenu';

import {HomeContent,StudentCard,ContentFilters, ContentCards} from './style';

import API from '../../services/api';

import AuthContext from '../../contexts/auth';

import userAvatar from '../../assets/img/perfil-avatar.jpg';
import github from '../../assets/icon/github-icon.png';
import linkedin from '../../assets/icon/linkedin-icon.png';

function Home() {

    const [graduates, setGraduates] = useState([]);
    const [technology, setTechnology] = useState('');
    const [filtered, setFiltered] = useState([]);

    const { token } = useContext(AuthContext);

    useEffect(() => {
        API.get('/egress').then(resp => {
            setGraduates(resp.data);
            setFiltered(resp.data);
        });
    }, []);

    useEffect(() => {
        setFiltered(graduates.filter(value => {
            let respAux = false;

            if(technology.length === 0){
                return true;
            }

            for(let tech of value.technologies){
                if(tech.toLocaleUpperCase() === technology.toLocaleUpperCase()){
                    respAux = tech.toLocaleUpperCase() === technology.toLocaleUpperCase();
                }
            }
            
            return respAux;
        }));
    }, [technology]);

    const insertTeam = (id) => {
        API.post('/team/insert', {egress: id}, {
            headers: { Authorization: `Bearer ${token}`}
        }).then(() => {
            alert('Adicionado!');
        }).catch(err => {
            alert('erro ao adicionar');
        })
    }

    return(
        <HomeContent>
            <NavBar></NavBar>
            <ContentFilters>
                <h3>Filtros</h3>
                <select value={technology} onChange={(e) => setTechnology(e.target.value)}>
                    <option value=''>Tecnologias</option>
                    <option value='VUE'>VUE</option>
                    <option value='REACT'>REACT</option>
                    <option value='ANGULAR'>ANGULAR</option>
                    <option value='JAVA'>JAVA</option>
                    <option value='C++'>C++</option>
                    <option value='C#'>C#</option>
                    <option value='PYTHON'>PYTHON</option>
                    <option value='GO'>GO</option>
                    <option value='NEXT.JS'>NEXT.JS</option>
                    <option value='REACT NATIVE'>REACT NATIVE</option>
                </select>
            </ContentFilters>
            <ContentCards>
                {(filtered.length) ? (
                    <>
                    {filtered.map((grad) => (
                        <StudentCard>
                            <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                            <h3>{grad.name}</h3>
                            <p>{grad.email}</p>
                                <div className="social-links">
                                    <a href="#">
                                        <img src={github} alt="Github link" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="Linkedin link" />
                                    </a>
                                </div>
                            <ul>
                                {grad.technologies.map((tech,index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                            <button onClick={() => insertTeam(grad.id)}>Adicionar</button>
                        </StudentCard>
                    ))}
                    </>
                ) : <h3>Nenhum egresso cadastrado!</h3>}
                
            </ContentCards>
        </HomeContent>
    );
}

export default Home;