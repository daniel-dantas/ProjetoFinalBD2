import styled from 'styled-components';

import Colors from '../../styles/colors';

export const NavBar = styled.nav`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: ${Colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;

    h2{
        color: #FFF;
    }

    img{
        margin-right: 20px;
    }  
`;