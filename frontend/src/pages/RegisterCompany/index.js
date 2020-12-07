import React from 'react';
import {useFormik} from 'formik';

import Input from '../../components/InputField';

import {Title} from '../../styles/global';
import {MainRegister, RegisterForm, RegisterButton} from './style';

function RegisterCompany(){

    const formik = useFormik({
        initialValues:{
            email: '',
            name: '',
            surname: '',
            company: '',
            cnpj: '',
            password: '',
            confirm: ''
        },
        onSubmit: values => {
            if(values.password != values.confirm){
                alert("As senhas não batem")
            }else{
                console.log(JSON.stringify(values));
            }
            
        }
    });


    return(
       <MainRegister>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <Title>Cadastro</Title>
                <Input placeholder="Seu email" type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} width={75+"%"}></Input>
                <Input placeholder="Seu nome" type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} width={35+"%"}></Input>
                <Input placeholder="Seu sobrenome" type="text" id="surname" name="surname" onChange={formik.handleChange} value={formik.values.surname} width={35+"%"}></Input>
                <Input placeholder="Sua empresa" type="text" id="company" name="company" onChange={formik.handleChange} value={formik.values.company} width={35+"%"}></Input>
                <Input placeholder="Seu CNPJ" type="text" id="cnpj" name="cnpj" onChange={formik.handleChange} value={formik.values.cnpj} width={35+"%"}></Input>
                <Input placeholder="Sua senha" type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} width={35+"%"}></Input>
                <Input placeholder="Confirmar senha" type="password" id="confirm" name="confirm" onChange={formik.handleChange} value={formik.values.confirm} width={35+"%"}></Input>
                <RegisterButton type="submit">Cadastre-se</RegisterButton>
            </RegisterForm>
       </MainRegister>
    );
}

export default RegisterCompany;