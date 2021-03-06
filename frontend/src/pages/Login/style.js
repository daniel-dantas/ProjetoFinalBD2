import styled from 'styled-components';

import {Main,Button} from '../../styles/global';
import Colors from '../../styles/colors';
import loginBackground from '../../assets/img/background-login.jpg';
import arrowIcon from '../../assets/icon/arrow-forward.png'

export const MainLogin = styled(Main)`
    background-image: url(${loginBackground});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const FormLogin = styled.form`
    width: 35%;
    height:auto;
    min-height: 60vh;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: 4px 4px 16px rgba(39,76,119,0.15);
`;

export const RegisterMenssage = styled.p`
    font-weight: bold;
    color: #252422;
    
    &::selection{
        background: transparent;
    }

    b{
        color: ${Colors.primaryColor};
        cursor: pointer;
    }
`;

export const ButtonLogin = styled(Button)`

    &::before{
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 55px;
        border-radius: 0 8px 8px 0;
        background-image: url(${arrowIcon});
        background-position: center;
        background-repeat: no-repeat;
    }
`;