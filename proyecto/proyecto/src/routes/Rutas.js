import React from 'react';
import {Routes,Route} from "react-router-dom";

//Rutas absolutas
import ViewCalificaciones from '../components/calificaciones/ViewCalificaciones';
import Home from '../components/inicio/Home';

function Rutas() {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/calificaciones' element={<ViewCalificaciones/>}/>
    </Routes>
  )
}

export default Rutas