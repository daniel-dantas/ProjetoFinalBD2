import styled from 'styled-components';

import {Main,Button} from '../../styles/global';
import loginBackground from '../../assets/img/background-login.jpg';
import Colors from '../../styles/colors';

export const MainRegisterProject = styled(Main)`
    background-image: url(${loginBackground});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const FormProject = styled.form`
    width: 35%;
    height: 60vh;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 4px 4px 16px rgba(39,76,119,0.15);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    textarea{
        width: 75%;
        height: 230px;
        border-radius: 8px;
        outline: none;
        padding: 0 12px;
        padding-top: 10px;
        box-shadow: 6px 6px 16px rgba(255,255,255,0.5), -6px -6px 16px rgba(255,255,255,0.5), inset 2px 2px 8px rgba(209,205,199, 0.5);
        border: none;
        background-color: ${Colors.tertiaryColor};
        resize: none;
        align-self: center;
        color: ${Colors.primaryColor};
        margin-left: 15px;
    }
`;

export const ProjectButton = styled(Button)`
    width: 40%;

`