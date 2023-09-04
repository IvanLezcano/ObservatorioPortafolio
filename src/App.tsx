import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Home from './home'
import { Link } from "react-router-dom";
import './css/app.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";




function App(): JSX.Element {
  

  return (
    <div className='body'>

      <Header></Header>
      <Home></Home>
      
    <Link to={"/prueba"}> <button type="button"  >Prueba</button></Link>

    </div>
  )
}
  

export default App;
