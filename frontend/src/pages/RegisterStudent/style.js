import styled from 'styled-components';

import loginBackground from '../../assets/img/background-login.jpg';
import {Main} from '../../styles/global';

export const MainStudent = styled(Main)`
    background-image: url(${loginBackground});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`

export const FormStudent = styled.form`
    width: 80%;
    height: 80vh;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 4px 4px 16px rgba(39,76,119,0.15);
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Personal = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Professional = styled.div`
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;