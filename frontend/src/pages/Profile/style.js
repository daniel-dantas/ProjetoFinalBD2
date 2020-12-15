import styled from 'styled-components';

import {Main,Button} from '../../styles/global';
import Colors from '../../styles/colors';

import editIcon from '../../assets/icon/edit-icon.png'
import deleteIcon from '../../assets/icon/delete-icon.png'

export const MainProfile = styled(Main)`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`;

export const ProfileContent = styled.div`
    width: 1024px;
    min-height: 80vh;
    height: auto;
    display: grid;
    grid-template-columns: 3fr;
`;

export const ProfileForm = styled.form`
    width: 45%;
    height: 100%;
    margin-bottom: 30px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    grid-column: 1;
`;

export const ProfileAvatar = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-column: 2;

    img{ 
        max-width: 160px;
        border-radius: 100%;
        border: solid 2px ${Colors.primaryColor};
        margin-bottom: 20px;
    }

    p{
        text-decoration: underline;
        margin-top: 15px;
    }

`;

export const EditButton = styled(Button)`
    width: 95%;
    margin-left: 15px;
    margin-bottom: 10px;

    &::before{
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 55px;
        border-radius: 0 8px 8px 0;
        background-image: url(${editIcon});
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const DeleteButton = styled(Button)`
    width: 95%;
    margin-left: 15px;
    background-color: #FFF;
    border: solid 2px ${Colors.primaryColor};
    color:  ${Colors.primaryColor};
    margin-bottom: 10px;

    &::before{
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 55px;
        border-radius: 0 8px 8px 0;
        background-image: url(${deleteIcon});
        background-position: center;
        background-repeat: no-repeat;
    }
`;
