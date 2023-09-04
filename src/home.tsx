import React, { Fragment, useState } from 'react';
import logo from './css/logo.svg';
import { Link} from "react-router-dom";
import "./css/Header.css"
import vecinos from './css/KJ3PQQWQMVAHFFHHGVTQLYE67M.png'
export default function Home(): JSX.Element {

 

  return (


<div className="row row-cols-1 row-cols-md-3 m-2 p-3 g-10">
<div className="col m-auto p-3">
  <div className="card">
    <img src={vecinos} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Trabajos de recoleccion y limpieza</h5>
      <p className="card-text">Aqui se cargan todos los trabajos de recoleccion y limpieza del territorio</p>
    </div>
   
                      <Link to={"/trabajosDeRecoleccion"}> 
                      <button type="button" className="btn btn-dark" >Trabajos De Recoleccion Y Limpieza </button></Link>
               
  </div>
</div>
<div className="col m-auto p-3">
  <div className="card">
    <img src={vecinos} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Vecinos</h5>
      <p className="card-text">Aqui podra realizar la carga de vecinos asi tambien como su busqueda y datos</p>
    </div>
   
                      <Link to={"/vecinos"}> <button type="button" className="btn btn-dark"  >Vecinos</button></Link>
                
  </div>
</div>
<div className="col m-auto p-3">
  <div className="card">
    <img src={vecinos} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Items</h5>
      <p className="card-text">Aqui se podran cargar tanto bocas de tormenta como luminarias, baches, lomas, entre otros.</p>
    </div>
 
                      <Link to={"/Items"}>   <button  className="btn btn-dark">Items Del Territorio    </button></Link>
                
  </div>
</div>
<div className="col m-auto p-3">
  <div className="card">
    <img src={vecinos} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Estadisticas</h5>
      <p className="card-text">Aqui se podran realizar las estadisticas en cuanto a limpieza, vecinos, registros e items en general.</p>
    </div>

                      <Link to={"/Estadisticas"}>    <button className="btn btn-dark">Estadisticas Del Trabajo   </button></Link>
                 
  </div>
</div>
</div>
  )}