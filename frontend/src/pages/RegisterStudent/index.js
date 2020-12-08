import React from 'react';
import {useFormik} from 'formik';

import Input from '../../components/InputField';
import {Title,RegisterButton} from '../../styles/global';
import {MainStudent,FormStudent,Personal,Professional} from './style';

function RegisterStudent(){

    const formik = useFormik({
        initialValues:{
            email: '',
            name: '',
            surname: '',
            registration: '',
            location: '',
            password: '',
            confirm: '',
            technologies: [],
            github: '',
            linkedin: '',
            area: ''
        },
        onSubmit: values => {
            if(values.password !== values.confirm){
                alert("As senhas não batem")
            }else{
                console.log(JSON.stringify(values));
            }
            
        }
    });

    return(
        <MainStudent>
           <FormStudent onSubmit={formik.handleSubmit}>
                <Title>Cadastro de Estudanter</Title>
                <Personal>
                        <Input placeholder="Seu email" type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} width={80+"%"}></Input>
                        <Input placeholder="Seu nome" type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} width={37+"%"}></Input>
                        <Input placeholder="Seu sobrenome" type="text" id="surname" name="surname" onChange={formik.handleChange} value={formik.values.surname} width={37+"%"}></Input>
                        <Input placeholder="Sua matrícula" type="text" id="registration" name="registration" onChange={formik.handleChange} value={formik.values.registration} width={37+"%"}></Input>
                        <Input placeholder="Sua Localização" type="text" id="location" name="location" onChange={formik.handleChange} value={formik.values.location} width={37+"%"}></Input>
                        <Input placeholder="Sua senha" type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} width={37+"%"}></Input>
                        <Input placeholder="Confirmar senha" type="password" id="confirm" name="confirm" onChange={formik.handleChange} value={formik.values.confirm} width={37+"%"}></Input>
                </Personal>
                <Professional>
                    <Input placeholder="Quais tecnologias você usa ?" type="text" id="technologies" name="technologies" onChange={formik.handleChange} value={formik.values.technologies} width={85+"%"}></Input>
                    <Input placeholder="Seu Github(Opcional)" type="text" id="github" name="github" onChange={formik.handleChange} value={formik.values.github} width={85+"%"}></Input>
                    <Input placeholder="Seu Luinkedin(Opcional)" type="text" id="linkedin" name="linkedin" onChange={formik.handleChange} value={formik.values.linkedin} width={85+"%"}></Input>
                    <Input placeholder="Em que área você atua ? " type="text" id="area" name="area" onChange={formik.handleChange} value={formik.values.area} width={85+"%"}></Input>
                </Professional>
                    <RegisterButton type="submit">Cadastra-se</RegisterButton>
           </FormStudent>
        </MainStudent>
    );
}

export default RegisterStudent;