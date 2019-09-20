import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';

class App extends Component {
  state = {   
    persons: [
      { nombre: 'alberto', edad: 45 },
      { nombre: '', edad: 49 },
      { nombre: 'Julia Rdz ', edad: 32 }
    ],
    otherState: 'set txt en el o.state , aun no se ha cambiado nada '
  };

  switchNameHandler = (nombre) => {
    // console.log('');
    this.setState({
      persons: [
        { nombre: nombre, edad: 28 },
        { nombre: 'Manuel', edad: 29 },
        { nombre: 'Stephanie', edad: 27 }
         
      ],
      otherState: 'aqui ya se cambio el state alterno por el nuevo al momento de darle click'
    });
    console.log(this.state.otherState) //solo cabia cuando le damos soble click //
  };

  changedNameHandler = (e) => {
    // console.log('');
    this.setState({
      persons: [
        { nombre: 'random', edad: 28 },
        { nombre: e.target.value, edad: 29 },
        { nombre: 'Stephanie', edad: 27 }
      ]
    })
  }

  render() {
    return (

      <div className="App">
        <h1>Switching </h1>
        <p>Make functional components & after that unity test  </p>
        <button onClick={() => this.switchNameHandler('Name without bind!!')}>Switchear</button>
        <Persona
          nombre={this.state.persons[0].nombre}
          edad={this.state.persons[0].edad}
          click={this.switchNameHandler.bind(this,'nombreconBind')}
        />
        <Persona
          nombre={this.state.persons[1].nombre}
          edad={this.state.persons[1].edad}
          changed={this.changedNameHandler} 
        >
          My Hobbies: Racing
        </Persona>
        <Persona
          nombre={this.state.persons[2].nombre}
          edad={this.state.persons[2].edad}
        />
      </div>
    );
  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



