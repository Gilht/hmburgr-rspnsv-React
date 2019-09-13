import React from 'react';
import logo from './logo.svg';
import './App.css';
import Persona from './Persona/Persona';

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
          Learn React
        </a>
        <Persona nombre="Gilberto Hernandez" edad="28" cd="Mty" />
        <br></br>
       <Persona nombre="Las propiedades se cambian lo que no cambia es el codigo del componente"/> 
      
      </header>
    </div>
  );
  
}

export default App;
