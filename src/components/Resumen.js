import React from 'react';
import styled from '@emotion/styled';
import {Mayuscula} from '../Helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #008383;
    color: #fff;
`

const Resumen = ({datos}) => {

    const{marca, year, plan} = datos;

    if( marca=== '' || year === '' || plan === '') return null;
    
    return (
        <ContenedorResumen>
            <h2>Resumen Cotización</h2>
            <ul>
                <li>Marca: {Mayuscula(marca)} </li>
                <li>Año: {year} </li>
                <li>Plan: {Mayuscula(plan)} </li>
            </ul>
        </ContenedorResumen>
      );
}
 
export default Resumen;