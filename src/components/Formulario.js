import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Label =styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
//webkit appearance quita la apariencia natural de select
//sin este no se aplicaria ni el border o el padding


const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Formulario = () => {
    //En los input type "radio" 
    //deben tener el mismo name de tal manera
    //que solo se seleccione uno
    //de tener nombres diferentes se podrían seleccionar ambos
    return (
        <form>
            <Campo>
                <Label>Marca</Label>
                <Select>
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>

                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select>
                    <option value="">--Seleccione--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                </Select>
            </Campo>


            
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                /> Básico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                /> Completo
                
            </Campo>

            <button type="button">Cotizar</button>
        </form>
      );
}
 
export default Formulario;