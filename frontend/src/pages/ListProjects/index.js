import React, { useEffect, useContext, useState } from 'react';

import AuthContext from '../../contexts/auth';
import API from '../../services/api';

import NavBar from '../../components/NavMenu';
import {MainListProjects,ListContent} from './style';
import deleteIcon from '../../assets/icon/delete-icon.png';

function ListProjects(){

    const projects = ['Escola','Budega','Projeto3','Projeto5','Escola','Budega','Projeto3','Projeto5'];
    const technologies = ['React','React Native','Node'];

    const [myProjects, setMyProjects] = useState([]);

    const { token } = useContext(AuthContext);

    useEffect(async () => {
        
        if(token.length > 0){
            const resp = await API.get('/project', {
                headers: { Authorization: `Bearer ${token}` },
            });
    
            setMyProjects(resp.data);
        }

    }, [token]);

    return(
       <MainListProjects>
           <NavBar></NavBar>
           <ListContent>
               <ul className="list">
                   {myProjects.map(project => (
                       <li className="itemList">
                            <h2>{project.projectName}</h2>
                            <button>
                                <img src={deleteIcon}></img>
                            </button>
                            <ul>
                                {
                                    project.technologies.map(tech => (
                                        <li key={tech}>{tech} |</li>
                                    ))
                                }
                            </ul>
                            <p>{project.description}</p>
                       </li>
                   ))}
               </ul>
           </ListContent>
       </MainListProjects>
    );
}

export default ListProjects;