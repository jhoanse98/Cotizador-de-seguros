import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0px auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: '',
    datos: {
      marca:'',
      year: '',
      plan: '',
    },
  }); //información de cotización

  //{datos ? <Resumen /> : null}//complejo trabajar con tantos ternarios
                                //mejor pasarselo al componente y retornar null desde este

  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
        />

        <Resumen 
          datos={datos}
        />

        <Resultado
          cotizacion={cotizacion}
        />
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
