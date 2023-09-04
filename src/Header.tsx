import React, { Fragment, useState } from 'react';
import logo from './css/logo.svg';
import { Link} from "react-router-dom";
import "./css/Header.css"
import {BsPerson} from "react-icons/bs"
import Navbar from './navbar';
import 'animate.css'

export default function Header(): JSX.Element {

 

  return (
    <div className="animate__heartBeat">
     
     <Navbar/>



<div className="banner_principal">
      <h1 className='titulo'>Observatorio De Registros De Ivan</h1>
    </div>

    </div>
   
    
  )
}
  


