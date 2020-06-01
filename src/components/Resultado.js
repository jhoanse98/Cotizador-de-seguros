import React from 'react';
import styled from '@emotion/styled';

const ResultadoMensaje = styled.p`
    text-align: center;
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
`;

const ContenedorCotizacion = styled.div`
    background-color: rgb(127,224,237);
    text-align: center;
    border: 1px solid #26C6DA;
    position:relative;
    margin-top: 1rem;
    padding: .5rem;
`

const TextoCotizacion = styled.p`
    color: #00838F;
    text-transform: uppercase;
    padding: 1rem;
    margin: 0;
    font-weight: bold;
`;

const Resultado = ({cotizacion}) => {
    return (
        (cotizacion === '') 
            ? <ResultadoMensaje>Seleccione Marca, año y plan de seguro</ResultadoMensaje>
            :
                (
                    <ContenedorCotizacion>
                        <TextoCotizacion>Su cotización es: ${cotizacion}</TextoCotizacion>
                    </ContenedorCotizacion>
                )
    )
}
 
export default Resultado;