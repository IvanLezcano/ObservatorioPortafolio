import React from 'react';
import ReactDOM from 'react-dom/client';
import EntradaPrueba from './EntradaPrueba';
import App from './App';
import Vecinos from './vecinos';
import Items from './items';
import Recolecciones from './recoleccion';
import Estadisticas from './estadisticas';



import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/vecinos',
    element: <Vecinos />
  }
  ,
  {
    path: '/trabajosDeRecoleccion',
    element: <Recolecciones />
  }
  ,
  {
    path: '/Items',
    element: <Items />
  }
  ,
  {
    path: '/Estadisticas',
    element: <Estadisticas />
  }
  ,
  {
    path: '/prueba',
    element: <EntradaPrueba />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





