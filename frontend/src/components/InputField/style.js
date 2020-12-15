import styled from 'styled-components';

import Colors from '../../styles/colors';

export const Input = styled.input`
    height: 50px;
    border-radius: 8px;
    outline: none;
    border: none;
    padding: 0 12px;
    margin-left: 15px;
    font-size: 1.1em;
    color: ${Colors.primaryColor};
    font-weight: 450;
    box-shadow: 6px 6px 16px rgba(255,255,255,0.5), -6px -6px 16px rgba(255,255,255,0.5), inset 2px 2px 8px rgba(209,205,199, 0.5);
    background-color: ${Colors.tertiaryColor};
    margin-bottom: 10px;

    &::placeholder{
        font-weight: 400;
    }
`;