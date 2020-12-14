import styled from 'styled-components';

export const ContentModal = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 102;
    display: ${({openModal}) => openModal ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
`;

export const Content = styled.div`
    width: 65%;
    height: 70vh;
    background-color: #FFF;
    border-radius: 8px;
`;