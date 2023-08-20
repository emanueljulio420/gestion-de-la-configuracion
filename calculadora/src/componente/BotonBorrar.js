import React from 'react';
import '../Estilos/style.css';

const BotonBorrar = (props) => (
  <div className='boton-borrar' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonBorrar;