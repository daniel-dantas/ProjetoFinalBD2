import styled from 'styled-components';

import {Main} from '../../styles/global';
import Colors from '../../styles/colors';
import loginBackground from '../../assets/img/background-login.png';
import arrowIcon from '../../assets/icon/arrow-forward.png'

export const MainLogin = styled(Main)`
    background-image: url(${loginBackground});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const FormLogin = styled.form`
    width: 30%;
    height:auto;
    min-height: 380px;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const TitleLogin = styled.h2`
    color: ${Colors.primaryColor};
    margin-top: 15px;

    &::selection{
        background: transparent;
    }
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

export const ButtonLogin = styled.button`
    width: 80%;
    height: 55px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    font-size: 1.2em;
    color: #FFF;
    background-color: ${Colors.primaryColor};
    outline: none; 
    cursor: pointer;
    transition: all 0.2s;
    position: relative;

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

    &:hover{
        opacity:0.95;
    }
`;