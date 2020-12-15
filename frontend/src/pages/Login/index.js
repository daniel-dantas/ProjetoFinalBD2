import React, { useContext } from 'react';
import {useFormik} from 'formik';
import {Link, useHistory} from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import AuthContext from '../../contexts/auth';

import {MainLogin,FormLogin, RegisterMenssage, ButtonLogin} from './style';
import {Title} from '../../styles/global';
import InputField from '../../components/InputField';

function Login(){
    const history = useHistory();

    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        onSubmit: values => {
            makeLogin(values);
        }
    });

    async function makeLogin(data){
        try{
            const response = await api.post('/user/auth', data);
            storageData(response.data.token);
            history.push('/');
        }catch(err){
            alert('Usuario ou senha incorreto!');
        }
    }

    const { setToken } = useContext(AuthContext);

    //Configurando o AsyncStorage;

    const storageData = async (value) => {
        try{
            await AsyncStorage.setItem('token', value);
            setToken(value);
        }catch(err){
            console.log(err);
        }
    }

    const getData = async () => {
        try{
            const value = await AsyncStorage.getItem('token');
            if(value !== null){
                console.log(value);
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <MainLogin>
             <FormLogin onSubmit={formik.handleSubmit}>
                <Title>Login</Title>
                <RegisterMenssage>Ainda não é cadastrado ? <Link to="company"><b>Cadastre-se</b></Link></RegisterMenssage>
                <InputField id="email" name="email" placeholder="Seu email" type="text" onChange={formik.handleChange} value={formik.values.email} width={75+"%"}/>
                <InputField id="password" name="password" placeholder="Sua senha" type="password" onChange={formik.handleChange} value={formik.values.password} width={75+"%"}/>
                <ButtonLogin type="submit">Entrar</ButtonLogin>
             </FormLogin>
        </MainLogin>
    );
}

export default Login;