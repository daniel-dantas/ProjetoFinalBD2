import styled from 'styled-components';

import Colors from './colors';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.primaryColor};
`;


export const Button = styled.button`
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

    &:hover{
        opacity:0.95;
    }
`;

export const RegisterButton = styled(Button)`
    width: 40%;
`;

export const Title = styled.h2`
    color: ${Colors.primaryColor};
    margin-top: 15px;
    width: 90%;
    text-align: center;

    &::selection{
        background: transparent;
    }
`;