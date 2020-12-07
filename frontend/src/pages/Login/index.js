import React from 'react';
import {useFormik} from 'formik';

import {MainLogin,FormLogin, RegisterMenssage, ButtonLogin} from './style';
import {Title} from '../../styles/global';
import InputField from '../../components/InputField';

function Login(){

    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values));
        }
    });

    return(
        <MainLogin>
             <FormLogin onSubmit={formik.handleSubmit}>
                <Title>Login</Title>
                <RegisterMenssage>Ainda não é cadastrado ? <b>Cadastre-se</b></RegisterMenssage>
                <InputField id="email" name="email" placeholder="Seu email" type="text" onChange={formik.handleChange} value={formik.values.email} width={75+"%"}/>
                <InputField id="password" name="password" placeholder="Sua senha" type="password" onChange={formik.handleChange} value={formik.values.password} width={75+"%"}/>
                <ButtonLogin type="submit">Entrar</ButtonLogin>
             </FormLogin>
        </MainLogin>
    );
}

export default Login;