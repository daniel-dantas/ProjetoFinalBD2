import React from 'react';
import {useFormik} from 'formik';

import {MainLogin,FormLogin,TitleLogin, RegisterMenssage, ButtonLogin} from './style';
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
                <TitleLogin>Login</TitleLogin>
                <RegisterMenssage>Ainda não é cadastrado ? <b>Cadastre-se</b></RegisterMenssage>
                <InputField id="email" name="email" placeholder="Seu email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
                <InputField id="password" name="password" placeholder="Sua senha" type="password" onChange={formik.handleChange} value={formik.values.password}/>
                <ButtonLogin type="submit">Entrar</ButtonLogin>
             </FormLogin>
        </MainLogin>
    );
}

export default Login;