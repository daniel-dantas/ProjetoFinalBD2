import styled from 'styled-components';

import {Button, Main} from '../../styles/global';
import loginBackground from '../../assets/img/background-login.jpg';


export const MainRegister = styled(Main)`
    background-image: url(${loginBackground});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const RegisterForm = styled.form`
    width: 60%;
    height: 80vh;
    border-radius: 8px;
    background-color: #FFF;
    box-shadow: 4px 4px 16px rgba(39,76,119,0.15);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const RegisterButton = styled(Button)`
    width: 40%;
`;