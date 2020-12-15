import React, { useContext } from 'react';
import {useFormik} from 'formik';

import { useHistory } from 'react-router-dom';

import API from '../../services/api';

import AuthContext from '../../contexts/auth';

import {MainRegisterProject,FormProject,ProjectButton} from './style';
import {Title} from '../../styles/global';

import Input from '../../components/InputField';

function RegisterProject(){

    const history = useHistory();

    const { token } = useContext(AuthContext);

    const formik = useFormik({
        initialValues:{
            projectName: '',
            description: '',
            technologies: ''
        },
        onSubmit: values => {
            console.log(values);
            registerProjects(values);
        }
    }) 

    const registerProjects = async (values) => {
        const project = values;
        project.technologies = project.technologies.split(', ');
        API.post('/project', values, {
            headers: { Authorization: `Bearer ${token}`}
        }).then(resp => {
            alert('Cadastrado com sucesso!')
            history.push('/');
        }).catch(err => {
            alert('Error ao cadastrar!');
        });
    }

    return(
       <MainRegisterProject>
           <FormProject onSubmit={formik.handleSubmit}>
                <Title>Novo Projeto</Title>
                <Input placeholder="Qual o nome do projeto ?" id="projectName" name="projectName" onChange={formik.handleChange} value={formik.values.projectName}  width={75+"%"}></Input>
                <Input placeholder="Quais tecnologias serão utilizadas ?" id="technologies" name="technologies" onChange={formik.handleChange} value={formik.values.technologies} width={75+"%"}></Input>
                <textarea placeholder="Descreva seu projeto" id="description" name="description" onChange={formik.handleChange} value={formik.values.description}></textarea>
                <ProjectButton type="submit">Cadastrar</ProjectButton>
           </FormProject>
       </MainRegisterProject>
    );
}

export default RegisterProject;