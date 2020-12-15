import React from 'react';
import {useFormik} from 'formik';

import {MainRegisterProject,FormProject,ProjectButton} from './style';
import {Title} from '../../styles/global';

import Input from '../../components/InputField';

function RegisterProject(){

    const formik = useFormik({
        initialValues:{
            name: '',
            tech: '',
            description: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    }) 

    return(
       <MainRegisterProject>
           <FormProject onSubmit={formik.handleSubmit}>
                <Title>Novo Projeto</Title>
                <Input placeholder="Qual o nome do projeto ?" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}  width={75+"%"}></Input>
                <Input placeholder="Quais tecnologias serão utilizadas ?" id="tech" name="tech" onChange={formik.handleChange} value={formik.values.tech} width={75+"%"}></Input>
                <textarea placeholder="Descreva seu projeto" id="description" name="description" onChange={formik.handleChange} value={formik.values.description}></textarea>
                <ProjectButton type="submit">Cadastrar</ProjectButton>
           </FormProject>
       </MainRegisterProject>
    );
}

export default RegisterProject;