import React from 'react';

import NavBar from '../../components/NavMenu';

import {HomeContent,StudentCard,ContentFilters, ContentCards} from './style';

import userAvatar from '../../assets/img/perfil-avatar.jpg';
import github from '../../assets/icon/github-icon.png';
import linkedin from '../../assets/icon/linkedin-icon.png';

function Home() {

    const technologies = ['React','React Native','Node'];

    return(
        <HomeContent>
            <NavBar></NavBar>
            <ContentFilters>
                <h3>Filtros</h3>
                <select>
                    <option>Tecnologias</option>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Angular</option>
                </select>
                <select>
                    <option>Área de Atuação</option>
                </select>
            </ContentFilters>
            <ContentCards>
            <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Jorge Sobrinho Neto</h3>
                    <p>jorgeneto@email.com</p>
                        <div className="social-links">
                            <a>
                                <img src={github} alt="Github link" />
                            </a>
                            <a>
                                <img src={linkedin} alt="Linkedin link" />
                            </a>
                        </div>
                    <ul>
                        {technologies.map((tech,index) => (
                            <li key={index}>{tech}</li>
                        ))};
                    </ul>
                    <button>Mais</button> 
            </StudentCard>
            <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Jorge Sobrinho Neto</h3>
                    <p>jorgeneto@email.com</p>
                        <div className="social-links">
                            <a>
                                <img src={github} alt="Github link" />
                            </a>
                            <a>
                                <img src={linkedin} alt="Linkedin link" />
                            </a>
                        </div>
                    <ul>
                            {technologies.map((tech,index) => (
                                <li key={index}>{tech}</li>
                            ))}
                    </ul>
                    <button>Mais</button> 
            </StudentCard>
            <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Jorge Sobrinho Neto</h3>
                    <p>jorgeneto@email.com</p>
                        <div className="social-links">
                            <a>
                                <img src={github} alt="Github link" />
                            </a>
                            <a>
                                <img src={linkedin} alt="Linkedin link" />
                            </a>
                        </div>
                    <ul>
                            {technologies.map((tech,index) => (
                                <li key={index}>{tech}</li>
                            ))}
                    </ul>
                    <button>Mais</button> 
            </StudentCard>
            <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Jorge Sobrinho Neto</h3>
                    <p>jorgeneto@email.com</p>
                        <div className="social-links">
                            <a>
                                <img src={github} alt="Github link" />
                            </a>
                            <a>
                                <img src={linkedin} alt="Linkedin link" />
                            </a>
                        </div>
                    <ul>
                            {technologies.map((tech,index) => (
                                <li key={index}>{tech}</li>
                            ))}
                    </ul>
                    <button>Mais</button> 
            </StudentCard>
            <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Jorge Sobrinho Neto</h3>
                    <p>jorgeneto@email.com</p>
                        <div className="social-links">
                            <a>
                                <img src={github} alt="Github link" />
                            </a>
                            <a>
                                <img src={linkedin} alt="Linkedin link" />
                            </a>
                        </div>
                    <ul>
                            {technologies.map((tech,index) => (
                                <li key={index}>{tech}</li>
                            ))}
                    </ul>
                    <button>Mais</button> 
            </StudentCard>
            <StudentCard>
                    <img src={userAvatar} alt="User avatar" className="userAvatar"/>
                    <h3>Jorge Sobrinho Neto</h3>
                    <p>jorgeneto@email.com</p>
                        <div className="social-links">
                            <a>
                                <img src={github} alt="Github link" />
                            </a>
                            <a>
                                <img src={linkedin} alt="Linkedin link" />
                            </a>
                        </div>
                    <ul>
                            {technologies.map((tech,index) => (
                                <li key={index}>{tech}</li>
                            ))}
                    </ul>
                    <button>Mais</button> 
            </StudentCard>
            </ContentCards>
        </HomeContent>
    );
}

export default Home;