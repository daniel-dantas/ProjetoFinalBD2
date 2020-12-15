import styled from 'styled-components';

import Colors from '../../styles/colors';

export const ContentMenu = styled.div`
        width: 250px;
        height: 100vh;
        background-color: #FFF;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        transform: ${({open}) => open ? 'translateX(0)' : 'translate(-100%)'};
        transition: transform 0.2s ease-in-out;

        .user{
            width: 90%;
            height: 200px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;

            img{
                max-width: 55%;
                border-radius: 100%;
                border: solid 2px;
                margin: 0 auto;
            }

            h3{
                color: ${Colors.primaryColor}
            }
        }

        ul{
            list-style: none;

            li{
                margin-bottom: 10px;
                font-weight: 500;
                transition: all 0.2s;

                &:hover{
                    opacity: 0.8;
                    cursor: pointer;
                }
            }
        }

        button{
            width: 150px;
            height: 45px;
            border: none;
            outline: none;
            border-radius: 6px;
            color: #FFF;
            font-weight: bold;
            background-color: ${Colors.fontColor};
            transition: all 0.2s;
            box-shadow: inset 2px 2px 8px ${Colors.primaryColor}, 6px 6px 16px rgba(255,255,255,0.5), -6px -6px 16px rgba(255,255,255,0.5);
            cursor: pointer;
            font-size: 1.1em;

            &:hover{
                opacity: 0.8;
            }
        }

        &::after{
            content: '';
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.5);
            position: absolute;
            top: 0;
            left:250px;
            z-index: 90;
            transform: ${({open}) => open ? 'translateX(0)' : 'translate(-100%)'};
        }
`;