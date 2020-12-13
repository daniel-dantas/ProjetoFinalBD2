import styled from 'styled-components';
import colors from '../../styles/colors';

export const Burguer = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    z-index: 101;

    div{
        width: 100%;
        height: 3px;
        border-radius: 8px;
        background-color: ${({open}) => open ? colors.primaryColor : '#FFF' };
        transform-origin: 1px;
        transition: all 0.2s;

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)' }
        }

        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)' };
            opacity: ${({open}) => open ? 0 : 1 }
        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-46deg)' : 'rotate(0)' }
        }

    }
`