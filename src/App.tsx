import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import { Link } from "react-router-dom";
import './app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App(): JSX.Element {
  

  return (
    <div className='body'>

      <Header></Header>
      
          <div className='container'>
                      <div className='row'>
                      <button type="button"  >
                        <Link to={"/vecinos"}>Vecinos</Link>
                      </button>
                      </div>
                      <div>
                      <button >
                        <Link to={"/TRABAJOSDERECOLECCIONYLIMPIEZA"}>Trabajos De Recoleccion Y Limpieza</Link>
                      </button>
                      </div>
                      <div>
                      <button >
                        <Link to={"/ITEMS DEL TERRITORIO"}>Items Del Territorio</Link>
                      </button>
                      </div>
                      <div>
                     
                      <button>
                        <Link to={"/ESTADISTICAS DE TRABAJO"}>Estadisticas Del Trabajo</Link>
                      </button>
                      </div>
          </div>
    </div>
  )
}
  

export default App;
