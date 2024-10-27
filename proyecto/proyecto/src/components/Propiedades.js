import React from "react";
import Propiedades2 from "./Propiedades2";
//import App from "../App";
function Propiedades(props) {
    const {nombre,variable1,variable2,varbol}=props;
    const apellidos="Cambrano";
  //console.log(varbol);
  return (
    <div>
      Propiedades
      <h1>Propiedad 1: {nombre}</h1>
      <h1>Propiedad 2: {variable1}</h1>
      <h1>Propiedad 3: {variable2}</h1>
      <h1>Propiedad 4: {varbol}</h1>
      <h1>Operaciones</h1>
      <h2>Suma: {variable1+variable2}</h2>
      <h2>Producto: {variable1*variable2}</h2>
      <Propiedades2 apellidos={apellidos}/>
    </div>
  );
}

export default Propiedades;