import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {Mayuscula} from '../Helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
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

Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
}
 
export default Resumen;