import styled from 'styled-components';

import Colors from '../../styles/colors';

export const Button = styled.button`
    width: 60px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 6px;
    color: #FFF;
    font-weight: bold;
    background-color: ${Colors.fontColor};
    transition: all 0.2s;
    box-shadow: inset 2px 2px 8px ${Colors.primaryColor}, 6px 6px 16px rgba(255,255,255,0.5), -6px -6px 16px rgba(255,255,255,0.5);
    cursor: pointer;

        &:hover{
            box-shadow: none;
    }
` 

export const Close = styled.div`
    width: 25px;
    height: 25px;
    color: #FFF;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    display: ${({openModal}) => openModal ? 'flex' : 'none'};
    z-index: 103;
    justify-content: center;
    align-items: center;

    div{
        width: 25px;
        height: 3px;
        background-color: #FFF;
        border-radius: 3px;
        transform-origin:center;
        position: absolute;

        &:nth-child(1){
            transform: rotate(45deg);
        }
        &:nth-child(2){
            transform: rotate(-45deg);
        }
    }
`;