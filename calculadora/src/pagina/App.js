import Boton from "../componente/Boton";
import Pantalla from "../componente/Pantalla";
import BotonBorrar from "../componente/BotonBorrar";
import "../Estilos/App.css";
import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import ReactCardFlip from "react-card-flip";
import axios from "axios";

function App() {
  const [Registro, setRegistro] = useState([]);
  const [flip, setFlip] = useState(false);

  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };
  const operaciones_registradas = async (setRegistro) => {
    const { data } = await axios.get("/api/operacion/operaciones_registradas");
    console.log(data);
    setRegistro(data);
  };

  const historial = (flip) => {
    setFlip(!flip);
    axios
      .get("/api/operacion/operaciones_registradas")
      .then((response) => {
        // Manejar la respuesta exitosa
        console.log("Datos obtenidos:", response.data);
      })
      .catch((error) => {
        // Manejar el error
        console.error("Error al obtener datos:", error);
      });
    operaciones_registradas(setRegistro)
  };

  let resultadoFinal = "";

  const calcularResultado = () => {
    if (input) {
      resultadoFinal = evaluate(input);
      setInput(resultadoFinal.toString())
      const hoy = new Date().toLocaleDateString();
      let newOperacion = {
        operacion: input,
        resultado: resultadoFinal,
        fecha: hoy,
      };
      

      axios
        .post("/api/operacion/registrar", newOperacion)
        .then((res) => {
          if (res.data === "Operacion registrada correctamente") {
            alert(res.data);
          } else if (res.data === "Error") {
            alert(res.data);
          }
        })
        .then((err) => {
          console.log(err);
        });
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>Calculadora</h1>
      </div>
      <ReactCardFlip isFlipped={flip}>
        <div className="contenedor-calculadora">
          <Pantalla input={input} />
          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <BotonBorrar manejarClear={() => setInput("")}>Borrar</BotonBorrar>
          </div>
          <button className="cambiar" onClick={() => historial(flip)}>
            {" "}
            Historial{" "}
          </button>
        </div>
        <div className="contenedor-calculadora">
          <button className="cambiar" onClick={() => setFlip(!flip)}>
            {" "}
            Volver{" "}
          </button>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Operacion</th>
                <th>Resultado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Registro.map((operacion, index) => (
                <tr key={index}>
                  <td>{operacion.operacion}</td>
                  <td>{operacion.resultado}</td>
                  <td>{operacion.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default App;
