import styled from 'styled-components';

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