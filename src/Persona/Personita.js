//aqui tendra el codigo con el que se inicio el npx-create en sept/2019//
import React from 'react';
import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';

//este componente tambien renderea con lo datos de el dumb cmpntnt, solo que aqui lo dinamico se le hizo con los props para pasarle para metro con attributes//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Aprender React en el curso de udemy 
          </a>
          <Persona nombre="Gilberto Hernandez" edad="28" cd="Mty" />
          <br></br>
         <Persona nombre="Las propiedades se cambian lo que no cambia es el codigo del componente"/> 
  
        </header>
      </div>
    );
  }

    export default App;