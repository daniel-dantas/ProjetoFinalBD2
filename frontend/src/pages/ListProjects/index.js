import React from 'react';

import NavBar from '../../components/NavMenu';
import {MainListProjects,ListContent} from './style';
import deleteIcon from '../../assets/icon/delete-icon.png';

function ListProjects(){

    const projects = ['Escola','Budega','Projeto3','Projeto5','Escola','Budega','Projeto3','Projeto5'];
    const technologies = ['React','React Native','Node'];

    return(
       <MainListProjects>
           <NavBar></NavBar>
           <ListContent>
               <ul className="list">
                   {projects.map(project => (
                       <li className="itemList">
                            <h2>{project}</h2>
                            <button>
                                <img src={deleteIcon}></img>
                            </button>
                            <ul>
                                {
                                    technologies.map(tech => (
                                        <li>{tech} |</li>
                                    ))
                                }
                            </ul>
                            <p>Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. A ordem dos tratores não altera o pão duris. Pra lá , depois divoltis porris, paradis.</p>
                       </li>
                   ))}
               </ul>
           </ListContent>
       </MainListProjects>
    );
}

export default ListProjects;