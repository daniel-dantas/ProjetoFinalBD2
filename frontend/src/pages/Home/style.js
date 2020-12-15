import styled from 'styled-components';
import {Main} from '../../styles/global';

import Colors from '../../styles/colors';

export const HomeContent = styled(Main)`
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
export const ContentFilters = styled.div`
    width: 96%;
    max-width: 1024px;
    height: 70px;
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;

    select{
        width: 180px;
        height: 40px;
        border-radius: 4px;
        color: ${Colors.primaryColor};
        font-size: 1em;
        font-weight: 500;
        border: solid 2px ${Colors.secondaryColor};
        outline: none;
        background-color: #FFF;
        margin-left:25px;
        padding: 0px 5px;
        position: relative;
        margin-right: 25px;
    }
`

export const ContentCards = styled.div`
    width: 1024px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
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
    margin-bottom: 30px;

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
`