import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import { Link } from "react-router-dom";
import './app.css'
import vecinos from './KJ3PQQWQMVAHFFHHGVTQLYE67M.png'
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

          <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={vecinos} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card SADASDAtitle</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={vecinos} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={vecinos} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={vecinos} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
  

export default App;
