import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Slabo 27px', serif;
    margin:0px;

`

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
      );
}
 
export default Header;