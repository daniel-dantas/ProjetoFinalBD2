import React, { useContext } from 'react';
import {useFormik} from 'formik';
import {Link, useHistory} from 'react-router-dom';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';

import Input from '../../components/InputField';

import API from '../../services/api';

import {Title, RegisterButton} from '../../styles/global';
import {MainRegister, RegisterForm,Menssage} from './style';

function RegisterCompany(){
    const history = useHistory();
    const { setToken } = useContext(AuthContext);

    const formik = useFormik({
        initialValues:{
            email: '',
            name: '',
            surname: '',
            companyName: '',
            CNPJ: '',
            password: '',
            confirm: ''
        },
        onSubmit: values => {
            if(values.password !== values.confirm){
                alert("As senhas não batem")
            }else{
                // console.log(JSON.stringify(values));
                register(values);
            }
        }
    });


    const register = async (values) => {

        try {
            const resp = await API.post('/contractor', values);
            await AsyncStorage.setItem('token', resp.data.token);
            setToken(resp.data.token);
            history.push('/');
        }catch(err) {
            alert('Usuario já cadastrado no sistema!');
        }
        
    }

    return(
       <MainRegister>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <Title>Cadastro</Title>
                <Menssage>Já é cadastrado ? <Link to="login"><b>Login</b></Link></Menssage>
                <Input placeholder="Seu email" type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} width={75+"%"}></Input>
                <Input placeholder="Seu nome" type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} width={35+"%"}></Input>
                <Input placeholder="Seu sobrenome" type="text" id="surname" name="surname" onChange={formik.handleChange} value={formik.values.surname} width={35+"%"}></Input>
                <Input placeholder="Sua empresa" type="text" id="companyName" name="companyName" onChange={formik.handleChange} value={formik.values.companyName} width={35+"%"}></Input>
                <Input placeholder="Seu CNPJ" type="text" id="CNPJ" name="CNPJ" onChange={formik.handleChange} value={formik.values.CNPJ} width={35+"%"}></Input>
                <Input placeholder="Sua senha" type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} width={35+"%"}></Input>
                <Input placeholder="Confirmar senha" type="password" id="confirm" name="confirm" onChange={formik.handleChange} value={formik.values.confirm} width={35+"%"}></Input>
                <RegisterButton type="submit">Cadastre-se</RegisterButton>
            </RegisterForm>
       </MainRegister>
    );
}

export default RegisterCompany;