import styled from 'styled-components';

import {Main} from '../../styles/global';
import Colors from '../../styles/colors';

export const MainListProjects = styled(Main)`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 70px;
`;

export const ListContent = styled.div`
    width: 1024px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    .list{
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        .itemList{
            width: 80%;
            height: auto;
            min-height: 200px;
            border-radius: 8px;
            border: solid 2px ${Colors.tertiaryColor};
            margin-top: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-left: 20px;
            position: relative;

            h2{
                margin-left: 20px;
            }

            ul{
                list-style: none;
                margin-left: 20px;
               
               li{
                   float: left;
               }
            }

            p{
                width: 90%;
                margin-left: 20px;
                color: ${Colors.fontColor}
            }

            button{
                width: 30px;
                height: 30px;
                border: none;
                outline: none;
                background-color: #FFF;
                cursor: pointer;
                transition: all 0.2s;
                position: absolute;
                top: 20px;
                right: 20px;

                &:hover{
                    opacity: 0.9;
                }
            }
        }
    }

`