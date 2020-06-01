import React, {useState} from 'react';
import styled from '@emotion/styled';
import {ObtenerDiferenciaYear, ObtenerMarca, calcularPlan} from '../Helper';

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

const Boton = styled.button`
    width: 100%;
    background-color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    border: none;
    transition: background-color .5s ease;
    margin-top: 2rem;

    &:hover{
        cursor:pointer;
        background-color:#26C6DA;
    }
`;

const Error = styled.div`
    background-color: red;
    width: 100%;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;
`;

const Formulario = () => {
    //En los input type "radio" 
    //deben tener el mismo name de tal manera
    //que solo se seleccione uno
    //de tener nombres diferentes se podrían seleccionar ambos


    const [datos, guardarDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });

    //state para el error

    const [error, actualizarError] = useState(false);

    const {marca, year, plan} = datos;

    const obtenerDatos = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value,
        })
    }

    const handleChange= e => {
        e.preventDefault();

        //validar campos del formulario

        if(marca.trim() === "" || year.trim() === "" || plan.trim() === "" ){
            actualizarError(true);
            return;
        }

        actualizarError(false);
        //precio base

        let resultado = 2000;

        //obtener la diferencia de años

        const diferenciaYear = ObtenerDiferenciaYear(year);
        console.log(diferenciaYear);
        
        //por cada año restarle el 3%

        resultado -= ((diferenciaYear*3)*resultado)/100;

        //incremento
            //americano 15
            //Asiático 5%
            //Europeo 30%
        resultado= ObtenerMarca(marca) * resultado;
        console.log(resultado);

        

        //básico un 20%
        //completo un 50%
        resultado = parseFloat(calcularPlan(plan) * resultado).toFixed(2);
        //TOTAL
        console.log(resultado);
    }


    return (
        <form
            onSubmit={handleChange}
        >

            {error ? <Error>Todos los campos son obligatorios</Error> : null}    
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerDatos}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>

                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerDatos}
                >
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
                    checked= {plan === "basico"}
                    onChange = {obtenerDatos}
                /> Básico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange= {obtenerDatos}
                /> Completo
                
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
      );
}
 
export default Formulario;