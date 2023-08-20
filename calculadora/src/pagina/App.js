
import Boton from '../componente/Boton';
import Pantalla from '../componente/Pantalla';
import BotonBorrar from '../componente/BotonBorrar';
import '../Estilos/App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import ReactCardFlip from "react-card-flip";
import axios from "axios";

function App() {

  /*
  const operaciones = async (setUserList) => {
    const { data } = await axios.get("/api/operacion/operaciones_registradas");
    console.log(data);
    setUserList(data);
  };
  */

  const [flip, setFlip] = useState(false)

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  let resultadoFinal = "";

  const calcularResultado = () => {
    if (input){
      resultadoFinal = evaluate(input);
      setInput(resultadoFinal);
      const hoy = new Date().toLocaleDateString();
      let newOperacion = {
        operacion: input,
        resultado: resultadoFinal,
        fecha: hoy
      }

      axios.post("localhost:5000/api/operacion/registrar", newOperacion)
      .then((res) => {
        if (res.data=== 'Operacion registrada correctamente'){
          alert(res.data);
        }else if (res.data=== 'Error'){
          alert(res.data);
        }
      })
      .then((err) => {
        console.log(err);
      });

    }else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className='App'>
      <div className='titulo'>
        <h1>
          Calculadora
        </h1>
      </div>
      <ReactCardFlip isFlipped={flip}>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonBorrar manejarClear={() => setInput('')}>
            Borrar
          </BotonBorrar>
        </div>
        <button className='cambiar' onClick={ () => setFlip(!flip)}> Historial </button>
      </div>
      <div className='contenedor-calculadora'>
      <button className='cambiar' onClick={ () => setFlip(!flip)}> Volver </button>
      </div>
      </ReactCardFlip>

    </div>
  );
}

export default App;