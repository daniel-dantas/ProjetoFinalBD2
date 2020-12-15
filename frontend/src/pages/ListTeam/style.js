import styled from 'styled-components';
import {Main} from '../../styles/global';

import Colors from '../../styles/colors';

export const TeamContent = styled(Main)`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 70px;
`
export const ContentCards = styled.div`
    width: 1024px;
    height: auto;
    min-height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
`

export const StudentCard = styled.div`
    width: 28%;
    height: auto;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${Colors.tertiaryColor};
    box-shadow: inset 2px 2px 8px rgba(209,205,199,0.5), 6px 6px 16px rgba(255,255,255,0.5), -6px -6px 16px rgba(255,255,255,0.5);
    margin-bottom: 50px;

    .userAvatar{
        max-width: 85px;
        border-radius: 50px;
        margin-bottom: 20px;
    }

    h3{
        margin-bottom: 10px;
    }

    p{
        font-size: 0.9em;
        margin-bottom: 10px;
    }
    
    .social-links{
        margin-bottom: 10px;

        a{
            img{
                max-width: 23px;
                margin-right: 10px;
            }
        }
    }

    ul{
        list-style: none;
        margin-bottom: 10px;
        li{
            float: left;
            margin-left: 5px;
            color: ${Colors.fontColor};
            font-weight: 500;

            &::after{
                content: " |"
            }
        }
    }

    button{
        width: 70px;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 6px;
        color: #FFF;
        font-weight: bold;
        background-color: ${Colors.primaryColor};
        transition: all 0.2s;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }
`;

export const CloseTeam = styled.button`
    width: 150px;
    height: 50px;
    outline: none;
    border: none;
    background-color: ${Colors.primaryColor};
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    color: #FFF;
    font-weight: bold;
    border-radius: 8px;
`;

export const UserProjects = styled.div`
    width: 50%;
    height: 65vh;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;

        .label-project{
            width: 80%;
            height: 60px;
            border: solid 2px ${Colors.tertiaryColor};
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            border-radius: 8px;
            transition: all 0.2s;
            
            h4{
                margin-left: 15px;
            }

            .input-project{
                margin-right: 15px;
            }
        }
`;