import React from 'react';

import {MainLogin,FormLogin,TitleLogin, RegisterMenssage, ButtonLogin} from './style';
import InputField from '../../components/inputField';

function Login(){
    return(
        <MainLogin>
             <FormLogin>
                <TitleLogin>Login</TitleLogin>
                <RegisterMenssage>Ainda não é cadastrado ? <b>Cadastre-se</b></RegisterMenssage>
                <InputField placeholder="Seu email" type="text"></InputField>
                <InputField placeholder="Sua senha" type="password"></InputField>
                <ButtonLogin>Entrar</ButtonLogin>
             </FormLogin>
        </MainLogin>
    );
}

export default Login;